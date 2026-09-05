import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ClipboardList,
  DraftingCompass,
  Flame,
  Layers,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Timer,
  Wrench,
} from "lucide-react";

import logoImg from "../assets/logo.png";
import weldingImg from "../assets/welding.jpg";
import sparksImg from "../assets/sparks.jpg";
import escadaImg from "../assets/escada.png";
import escada2Img from "../assets/escada2.jpg";
import corrimaoImg from "../assets/corrimao.png";
import mezaninoImg from "../assets/mezanino.png";
import coberturaImg from "../assets/cobertura.jpg";
import galpaoImg from "../assets/galpao.jpg";
import gradesImg from "../assets/grades.jpg";
import estruturasImg from "../assets/estruturas.jpg";
import gradesProtecaoImg from "../assets/grades-protecao.jpg";

// TODO: substitua pelo número oficial do WhatsApp da PEH Serralheria
const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=" +
  encodeURIComponent("Olá! Quero solicitar um orçamento com a PEH Serralheria.");

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "PEH Serralheria Tudo em Ferro e Aço Inox" },
      {
        name: "description",
        content:
          "Estruturas, coberturas, mezaninos, galpões, esquadrias, grades, corrimãos e guarda-corpos em ferro e aço inox sob medida. Orçamento rápido e sem compromisso.",
      },
      { property: "og:title", content: "PEH Serralheria Tudo em Ferro e Aço Inox" },
      {
        property: "og:description",
        content:
          "Fabricação e instalação de estruturas metálicas sob medida para residências, comércios e indústrias. Solicite seu orçamento.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "PEH Serralheria",
          slogan: "Tudo em ferro e aço inox",
          description:
            "Fabricação e instalação de estruturas metálicas, coberturas, mezaninos, galpões, esquadrias, grades, corrimãos e guarda-corpos sob medida.",
        }),
      },
    ],
  }),
});

const services = [
  {
    icon: DraftingCompass,
    title: "Estruturas Metálicas",
    text: "Fabricação e instalação de estruturas sob medida para projetos residenciais, comerciais e industriais, com foco em resistência, segurança e durabilidade.",
    image: estruturasImg,
  },
  {
    icon: Building2,
    title: "Coberturas Metálicas",
    text: "Projeto e instalação de coberturas para garagens, corredores, áreas externas, comércios, empresas e todos os tipos de edificações.",
    image: coberturaImg,
  },
  {
    icon: Layers,
    title: "Mezaninos Metálicos",
    text: "Desenvolvimento e montagem de mezaninos para ampliar a área útil e aproveitar melhor os espaços em empresas, galpões, comércios e residências.",
    image: mezaninoImg,
  },
  {
    icon: Wrench,
    title: "Janelas e Esquadrias",
    text: "Janelas e esquadrias metálicas sob medida, desenvolvidas de acordo com as características e necessidades de cada projeto.",
    image: gradesImg,
  },
  {
    icon: ShieldCheck,
    title: "Grades e Proteções Metálicas",
    text: "Produção e instalação de grades para portas, janelas, fachadas, muros e ambientes que precisam de mais segurança e proteção.",
    image: gradesProtecaoImg,
  },
  {
    icon: Ruler,
    title: "Corrimãos e Guarda-Corpos",
    text: "Corrimãos e guarda-corpos personalizados para escadas, sacadas, mezaninos, passarelas e áreas elevadas, em ferro ou inox.",
    image: corrimaoImg,
  },
  {
    icon: Building2,
    title: "Galpões Metálicos",
    text: "Construção e montagem de galpões para indústrias, depósitos, oficinas e comércios, com estruturas desenvolvidas conforme cada operação.",
    image: galpaoImg,
  },
];

const reasons = [
  {
    icon: Ruler,
    title: "Tudo sob medida",
    text: "Nada de peça genérica: cada projeto é medido, calculado e fabricado para o seu espaço.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança em primeiro lugar",
    text: "Estruturas calculadas e soldadas por profissionais experientes, com acabamento que dura.",
  },
  {
    icon: Timer,
    title: "Prazo respeitado",
    text: "Cronograma claro desde o orçamento. Você sabe quando começa e quando termina.",
  },
  {
    icon: Award,
    title: "Ferro e aço inox de qualidade",
    text: "Trabalhamos com materiais certificados para garantir resistência e durabilidade.",
  },
];

const steps = [
  {
    icon: MessageCircle,
    title: "1. Você chama no WhatsApp",
    text: "Conte o que precisa. Respondemos rápido e já orientamos sobre a melhor solução.",
  },
  {
    icon: Ruler,
    title: "2. Medição e orçamento",
    text: "Vamos até o local, tiramos as medidas e apresentamos um orçamento claro, sem surpresas.",
  },
  {
    icon: Flame,
    title: "3. Fabricação própria",
    text: "Sua peça é fabricada na nossa serralheria, com solda e acabamento de qualidade.",
  },
  {
    icon: ClipboardList,
    title: "4. Instalação e entrega",
    text: "Instalamos com segurança, limpamos o local e entregamos pronto para usar.",
  },
];

const faqs = [
  {
    q: "O orçamento é gratuito?",
    a: "Sim. Você entra em contato, agendamos a medição e apresentamos o orçamento sem compromisso e sem custo.",
  },
  {
    q: "Vocês atendem residências, comércios e indústrias?",
    a: "Sim. Atendemos desde pequenos reparos e instalações residenciais até galpões e estruturas industriais completas.",
  },
  {
    q: "Trabalham com aço inox além de ferro?",
    a: "Sim. Somos especialistas tanto em ferro quanto em aço inox, ideal para corrimãos, guarda-corpos e ambientes que exigem acabamento superior.",
  },
  {
    q: "Quanto tempo leva para fabricar e instalar?",
    a: "Depende do tamanho do projeto. Serviços menores são concluídos em poucos dias; estruturas maiores seguem um cronograma definido já no orçamento.",
  },
  {
    q: "As estruturas têm garantia?",
    a: "Sim. Trabalhamos com materiais de qualidade e mão de obra especializada, garantindo a segurança e a durabilidade de cada instalação.",
  },
];

const gallery = [
  { src: escadaImg, alt: "Escada metálica preta com degraus de madeira instalada pela PEH Serralheria" },
  { src: escada2Img, alt: "Escada de ferro com corrimão fabricada sob medida" },
  { src: mezaninoImg, alt: "Mezanino metálico com guarda-corpo instalado em galpão" },
  { src: corrimaoImg, alt: "Corrimão de aço inox instalado em escada externa" },
  { src: coberturaImg, alt: "Cobertura metálica instalada em garagem residencial" },
  { src: gradesImg, alt: "Janela com esquadria e grade metálica preta sob medida" },
];

function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#" className="flex items-center gap-3">
            <img src={logoImg} alt="Logo PEH Serralheria" className="h-14 w-auto" />
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#servicos" className="transition-colors hover:text-navy">Serviços</a>
            <a href="#trabalhos" className="transition-colors hover:text-navy">Trabalhos</a>
            <a href="#como-funciona" className="transition-colors hover:text-navy">Como funciona</a>
            <a href="#duvidas" className="transition-colors hover:text-navy">Dúvidas</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-navy-deep"
          >
            <MessageCircle className="h-4 w-4" />
            Pedir orçamento
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={weldingImg}
          alt="Soldador da PEH Serralheria trabalhando em estrutura metálica"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy/40" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32 lg:py-40">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-steel">
            <Flame className="h-3.5 w-3.5 text-spark" />
            Tudo em ferro e aço inox
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-black leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Serralheria sob medida, do orçamento à instalação
          </h1>
          <p className="mt-6 max-w-xl text-lg text-steel">
            Estruturas, coberturas, mezaninos, galpões, esquadrias, grades e corrimãos
            fabricados e instalados por quem entende do ofício. Deus é fiel, e nosso
            compromisso é com a qualidade.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-spark px-6 py-3.5 font-display text-base font-bold text-navy-deep transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar orçamento gratuito
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-6 py-3.5 text-base font-semibold text-primary-foreground transition-colors hover:bg-white/10"
            >
              Ver todos os serviços
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <ul className="mt-10 flex flex-col items-start gap-2 text-sm text-steel sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            {["Orçamento sem compromisso", "Fabricação própria", "Instalação inclusa"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-spark" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-widest text-navy/60">Nossos serviços</p>
          <h2 className="mt-2 font-display text-3xl font-black text-navy sm:text-4xl">
            Tudo que sua obra precisa em metal, em um só lugar
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              {s.image && (
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={640}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="mb-3 inline-flex rounded-lg bg-secondary p-2.5">
                  <s.icon className="h-5 w-5 text-navy" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </article>
          ))}
          {/* CTA card */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-2xl p-6"
          >
            <img
              src={weldingImg}
              alt="Soldador da PEH Serralheria trabalhando em estrutura metálica"
              loading="lazy"
              width={1024}
              height={640}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy-deep/85" />
            <div className="relative flex flex-col items-start justify-between gap-6">
              <p className="font-display text-xl font-bold leading-snug text-primary-foreground">
                Não achou o que procura? Fazemos sob medida.
              </p>
              <span className="inline-flex items-center gap-2 rounded-lg bg-spark px-4 py-2.5 text-sm font-bold text-navy-deep">
                Fale Conosco! <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Galeria */}
      <section id="trabalhos" className="bg-navy py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-steel/70">Trabalhos realizados</p>
            <h2 className="mt-2 font-display text-3xl font-black text-primary-foreground sm:text-4xl">
              Obra boa não precisa de discurso, precisa de foto
            </h2>
            <p className="mt-4 text-steel">
              Alguns dos projetos que fabricamos e instalamos. Cada um medido, soldado e
              entregue pela nossa equipe.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {gallery.map((g) => (
              <div key={g.src} className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que a PEH quebra de objeções */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={sparksImg}
              alt="Profissional da PEH Serralheria polindo metal com equipamento de proteção"
              loading="lazy"
              width={1920}
              height={1280}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-navy/60">Por que a PEH</p>
            <h2 className="mt-2 font-display text-3xl font-black text-navy sm:text-4xl">
              Contratar serralheiro não precisa ser um risco
            </h2>
            <p className="mt-4 text-muted-foreground">
              A gente sabe o que preocupa: prazo que estica, orçamento que muda no meio do
              caminho, estrutura que não dura. Por isso trabalhamos assim:
            </p>
            <ul className="mt-8 space-y-6">
              {reasons.map((r) => (
                <li key={r.title} className="flex gap-4">
                  <div className="mt-0.5 shrink-0 rounded-lg bg-secondary p-2.5">
                    <r.icon className="h-5 w-5 text-navy" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-navy">{r.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="bg-navy-soft py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-navy/60">Como funciona</p>
            <h2 className="mt-2 font-display text-3xl font-black text-navy sm:text-4xl">
              Do primeiro contato à entrega, sem dor de cabeça
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <li key={s.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="mb-4 inline-flex rounded-lg bg-navy p-2.5">
                  <s.icon className="h-5 w-5 text-spark" />
                </div>
                <h3 className="font-display font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section id="duvidas" className="mx-auto max-w-3xl px-4 py-20 sm:py-28">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-navy/60">Dúvidas frequentes</p>
          <h2 className="mt-2 font-display text-3xl font-black text-navy sm:text-4xl">
            Perguntas que todo mundo faz antes de fechar
          </h2>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border border-border bg-card p-5 open:border-navy/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-bold text-navy">
                {f.q}
                <ArrowRight className="h-4 w-4 shrink-0 rotate-90 transition-transform group-open:-rotate-90" />
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden">
        <img
          src={sparksImg}
          alt=""
          aria-hidden
          loading="lazy"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-deep/90" />
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center">
          <h2 className="font-display text-3xl font-black text-primary-foreground sm:text-4xl">
            Seu projeto em ferro ou inox começa com uma mensagem
          </h2>
          <p className="mt-4 text-lg text-steel">
            Chame agora no WhatsApp, conte o que precisa e receba orientação e orçamento
            sem compromisso.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-spark px-8 py-4 font-display text-lg font-bold text-navy-deep transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-6 w-6" />
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-navy-deep py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center">
          <img src={logoImg} alt="PEH Serralheria. Deus é fiel, tudo em ferro e aço inox" className="h-16 w-auto" />
          <p className="text-sm text-steel">
            PEH Serralheria. Tudo em ferro e aço inox. Estruturas, coberturas, mezaninos,
            galpões, esquadrias, grades, corrimãos e guarda-corpos sob medida.
          </p>
          <p className="text-xs text-steel/60">
            © {new Date().getFullYear()} PEH Serralheria. Todos os direitos reservados. Desenvolvido por Agência SCASE.
          </p>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-50 rounded-full bg-navy p-4 shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6 text-spark" />
      </a>
    </div>
  );
}
