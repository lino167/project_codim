"use client";
import { FormEvent, useState } from "react";
import { orbitron } from "../../styles/fonts";

export default function ContatoPage() {
  const [status, setStatus] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    console.log("Form enviado (mock)", data);
    setStatus("Mensagem enviada (mock). Em breve entraremos em contato!");
    form.reset();
  }

  return (
    <main className="mx-auto max-w-[1200px] px-4 md:px-16">
      <section className="py-16">
        <h1 className={`${orbitron.className} text-3xl md:text-4xl font-bold`}>Contato</h1>
        <p className="mt-2 text-codim-gray">Preencha o formulário abaixo. Sem backend ainda – envio mockado.</p>

        <form onSubmit={onSubmit} className="mt-8 max-w-2xl space-y-4">
          <div>
            <label htmlFor="nome" className="block text-sm mb-1">Nome</label>
            <input id="nome" name="nome" type="text" required className="w-full rounded-md border border-codim-gray/30 bg-transparent px-3 py-2 outline-none focus:border-codim-red" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input id="email" name="email" type="email" required className="w-full rounded-md border border-codim-gray/30 bg-transparent px-3 py-2 outline-none focus:border-codim-red" />
          </div>
          <div>
            <label htmlFor="mensagem" className="block text-sm mb-1">Mensagem</label>
            <textarea id="mensagem" name="mensagem" rows={4} required className="w-full rounded-md border border-codim-gray/30 bg-transparent px-3 py-2 outline-none focus:border-codim-red" />
          </div>
          <button
            type="submit"
            className="inline-block rounded-xl px-6 py-3 bg-codim-red text-codim-white transition-colors hover:bg-white hover:text-black"
            aria-label="Enviar mensagem"
          >
            Enviar
          </button>
        </form>

        {status && (
          <p className="mt-4 text-sm text-codim-gray">{status}</p>
        )}
      </section>
    </main>
  );
}