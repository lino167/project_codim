$ErrorActionPreference = 'Stop'

# Caminho do repositório (pasta deste script)
$RepoPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $RepoPath

# Verifica se Git está disponível
try { git --version | Out-Null } catch { Write-Error "Git não encontrado no PATH."; exit 1 }

# Configuração do watcher
$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $RepoPath
$watcher.IncludeSubdirectories = $true
$watcher.Filter = '*.*'
$watcher.EnableRaisingEvents = $true

# Ignorar alterações no diretório .git
function ShouldProcessChange($fullPath) {
    return ($fullPath -notlike (Join-Path $RepoPath '.git*'))
}

# Timer com debounce (15 segundos)
$timer = New-Object System.Timers.Timer
$timer.Interval = 15000
$timer.AutoReset = $false

$commitAndPush = {
    $status = git status --porcelain
    if ($status) {
        git add -A
        $timestamp = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
        git commit -m "auto: save $timestamp" | Out-Null
        try {
            git push | Out-Null
            Write-Host "[auto-push] Alterações enviadas em $timestamp"
        } catch {
            Write-Warning "[auto-push] Falha ao fazer push: $($_.Exception.Message)"
        }
    }
}

Register-ObjectEvent -InputObject $watcher -EventName Changed -Action { if (ShouldProcessChange($Event.SourceEventArgs.FullPath)) { $timer.Stop(); $timer.Start() } } | Out-Null
Register-ObjectEvent -InputObject $watcher -EventName Created -Action { if (ShouldProcessChange($Event.SourceEventArgs.FullPath)) { $timer.Stop(); $timer.Start() } } | Out-Null
Register-ObjectEvent -InputObject $watcher -EventName Deleted -Action { if (ShouldProcessChange($Event.SourceEventArgs.FullPath)) { $timer.Stop(); $timer.Start() } } | Out-Null
Register-ObjectEvent -InputObject $watcher -EventName Renamed -Action { if (ShouldProcessChange($Event.SourceEventArgs.FullPath)) { $timer.Stop(); $timer.Start() } } | Out-Null
Register-ObjectEvent -InputObject $timer -EventName Elapsed -Action $commitAndPush | Out-Null

Write-Host "[auto-push] Watcher iniciado em '$RepoPath'. Commit/push automáticos após 15s sem mudanças."
Write-Host "[auto-push] Pressione Ctrl+C para encerrar."

while ($true) { Start-Sleep -Seconds 1 }