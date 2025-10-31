'use client'

import { useEffect, useRef } from 'react'

type Particle = {
  x: number
  y: number
  z: number
  radius: number
  vx: number
  vy: number
  opacity: number
  offset: number
}

const PARTICLE_COUNT = 90
const MAX_DEPTH = 1.1
const BASE_COLOR = { r: 217, g: 4, b: 41 }
const LINK_DISTANCE = 140

export default function BackgroundParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d') as CanvasRenderingContext2D | null
    if (!context) return
    const ctx = context

    const element = canvas

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
      const direction = Math.random() * Math.PI * 2
      const speed = 0.008 + Math.random() * 0.012

      return {
        x: Math.random(),
        y: Math.random(),
        z: Math.random() * MAX_DEPTH,
        radius: 0.6 + Math.random() * 1.1,
        vx: Math.cos(direction) * speed,
        vy: Math.sin(direction) * speed,
        opacity: 0.06 + Math.random() * 0.12,
        offset: Math.random() * Math.PI * 2,
      }
    })

    let animationId = 0
    let lastTime = performance.now()

    const dpr = window.devicePixelRatio || 1

    function resize() {
      if (!element) return
      const { innerWidth, innerHeight } = window
      element.width = innerWidth * dpr
      element.height = innerHeight * dpr
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener('resize', resize)

    const render = () => {
      const now = performance.now()
      const delta = Math.min((now - lastTime) / 1000, 0.05)
      lastTime = now

      if (!element) {
        animationId = requestAnimationFrame(render)
        return
      }

      const width = element.width / dpr
      const height = element.height / dpr

      ctx.clearRect(0, 0, width, height)

      const positions: Array<{ px: number; py: number; opacity: number; z: number }> = []

      particles.forEach((particle) => {
        const driftX =
          Math.cos(now * 0.0002 + particle.offset) * 0.02 * (0.5 + particle.z)
        const driftY =
          Math.sin(now * 0.00025 + particle.offset) * 0.015 * (0.5 + particle.z)

        particle.x += (particle.vx + driftX) * delta
        particle.y += (particle.vy + driftY) * delta

        if (particle.x < -0.1) particle.x = 1.1
        if (particle.x > 1.1) particle.x = -0.1
        if (particle.y < -0.1) particle.y = 1.1
        if (particle.y > 1.1) particle.y = -0.1

        const px = particle.x * width
        const py = particle.y * height

        positions.push({
          px,
          py,
          opacity: particle.opacity,
          z: particle.z,
        })

        const gradient = ctx.createRadialGradient(px, py, 0, px, py, particle.radius * 14)

        gradient.addColorStop(
          0,
          `rgba(${BASE_COLOR.r}, ${BASE_COLOR.g}, ${BASE_COLOR.b}, ${Math.min(
            particle.opacity + 0.04,
            0.18,
          ).toFixed(3)})`,
        )
        gradient.addColorStop(
          1,
          `rgba(${BASE_COLOR.r}, ${BASE_COLOR.g}, ${BASE_COLOR.b}, ${(
            particle.opacity * 0.04
          ).toFixed(3)})`,
        )

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.globalCompositeOperation = "lighter"
        ctx.arc(px, py, particle.radius * 10, 0, Math.PI * 2)
        ctx.fill()

        ctx.globalCompositeOperation = "source-over"
        ctx.beginPath()
        ctx.fillStyle = `rgba(255, 255, 255, ${(particle.opacity * 0.3).toFixed(3)})`
        ctx.arc(px, py, particle.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      ctx.globalCompositeOperation = "lighter"
      ctx.shadowBlur = 0
      for (let i = 0; i < positions.length; i += 1) {
        for (let j = i + 1; j < positions.length; j += 1) {
          const dx = positions[i].px - positions[j].px
          const dy = positions[i].py - positions[j].py
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance > LINK_DISTANCE) continue

          const strength = 1 - distance / LINK_DISTANCE
          const alpha = 0.12 + strength * 0.38
          const blendRatio = Math.min(0.6, strength + positions[i].z * 0.4)
          const r = Math.round(
            BASE_COLOR.r * (1 - blendRatio) + 255 * blendRatio,
          )
          const g = Math.round(
            BASE_COLOR.g * (1 - blendRatio) + 255 * blendRatio,
          )
          const b = Math.round(
            BASE_COLOR.b * (1 - blendRatio) + 255 * blendRatio,
          )

          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`
          ctx.lineWidth = 0.8 + strength * 1.1
          ctx.shadowBlur = 6 * strength
          ctx.shadowColor = `rgba(${BASE_COLOR.r}, ${BASE_COLOR.g}, ${BASE_COLOR.b}, ${(alpha * 0.6).toFixed(
            3,
          )})`
          ctx.beginPath()
          ctx.moveTo(positions[i].px, positions[i].py)
          ctx.lineTo(positions[j].px, positions[j].py)
          ctx.stroke()
        }
      }
      ctx.shadowBlur = 0
      ctx.globalCompositeOperation = "source-over"

      animationId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="background-particles-canvas" />
}
