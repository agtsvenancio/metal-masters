import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useEffect, useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  FileCheck2,
  Grid3X3,
  HardHat,
  Layers3,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Stairs,
  Warehouse,
  Wrench,
  X,
} from "lucide-react";

import logoImg from "../assets/logo.png";
import weldingImg from "../assets/welding.jpg";
import sparksImg from "../assets/sparks.jpg";
import escadaImg from "../assets/escada.png";
import escada2Img from "../assets/escada2.jpg";
import corrimaoImg from "../assets/corrimao.png";
import mezaninoImg from "../assets/mezanino.png";
import coberturaImg from "../assets/cobertura.jpg";
import gradesImg from "../assets/grades.jpg";
import estruturasImg from "../assets/estruturas.jpg";
import gradesProtecaoImg from "../assets/grades-protecao.jpg";

const PHONE_DISPLAY = "(11) 2553-2623";
const PHONE_URL = "tel:+551125532623";
const WHATSAPP_DISPLAY = "(11) 96741-1274";
const WHATSAPP_BASE = "https://wa.me/5511967411274";
const WHATSAPP_URL = `${WHATSAPP_BASE}?text=${encodeURIComponent(
  "Olá! Quero solicitar um orçamento com a PEH Serralheria.",
)}`;

export const Route = createFileRoute("/")({
  component: LandingPage,
  head: () => ({
    meta: [
      { title: "PEH Serralheria | Estruturas e Soluções Metálicas" },
      {
        name: "description",
        content:
          "PEH Serralheria: soluções em estruturas metálicas, mezaninos, escadas, coberturas, guarda-corpos, grelhas, ferro e aço inox.",
      },
      { property: "og:title", content: "PEH Serralheria | Estruturas e Soluções Metálicas" },
      {
        property: "og:description",
        content:
          "Soluções metálicas desenvolvidas com experiência, segurança, qualidade e precisão.",
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
          description:
            "Soluções em estruturas metálicas desenvolvidas com experiência, segurança, qualidade e precisão.",
          telephone: "+55 11 2553-2623",
        }),
      },
    ],
  }),
});

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Segurança", href: "#seguranca" },
  { label: "Contato", href: "#contato" },
];

const services = [
  {
    icon: Building2,
    title: "Estruturas metálicas",
    text: "Desenvolvimento e execução de estruturas para diferentes projetos, com planejamento técnico e precisão.",
    image: estruturasImg,
  },
  {
    icon: Layers3,
    title: "Mezaninos",
    text: "Soluções sob medida para ampliar e aproveitar espaços com segurança e qualidade de execução.",
    image: mezaninoImg,
  },
  {
    icon: Stairs,
    title: "Escadas metálicas",
    text: "Escadas projetadas para cada necessidade, combinando resistência, segurança e acabamento profissional.",
    image: escadaImg,
  },
  {
    icon: Ruler,
    title: "Escadas marinheiro",
    text: "Acessos metálicos verticais desenvolvidos com atenção às medidas, ao uso e à segurança da instalação.",
    image: escada2Img,
  },
  {
    icon: Warehouse,
    title: "Coberturas metálicas",
    text: "Coberturas executadas conforme as características do projeto, priorizando proteção e durabilidade.",
    image: coberturaImg,
  },
  {
    icon: ShieldCheck,
    title: "Guarda-corpos",
    text: "Proteções em ferro ou aço inox desenvolvidas para áreas elevadas, escadas e passarelas.",
    image: corrimaoImg,
  },
  {
    icon: Grid3X3,
    title: "Grelhas",
    text: "Peças metálicas resistentes, fabricadas sob medida para atender às necessidades de cada instalação.",
    image: gradesProtecaoImg,
  },
  {
    icon: Wrench,
    title: "Outras soluções em ferro e aço inox",
    text: "Projetos personalizados avaliados de acordo com as medidas, o uso e as necessidades de execução.",
    image: gradesImg,
  },
];

const safetyItems = [
  { icon: HardHat, title: "EPIs", text: "Uso adequado dos equipamentos necessários para cada atividade." },
  { icon: ShieldCheck, title: "Procedimentos", text: "Cuidados voltados à segurança da equipe e da obra." },
  { icon: FileCheck2, title: "Documentação", text: "Documentação relacionada à segurança do trabalho." },
  { icon: Sparkles, title: "Responsabilidade", text: "Execução conduzida com atenção, cuidado e profissionalismo." },
];

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Olá! Quero solicitar um orçamento com a PEH Serralheria.",
      `Nome: ${data.get("name") ?? ""}`,
      `Telefone / WhatsApp: ${data.get("phone") ?? ""}`,
      `E-mail: ${data.get("email") ?? ""}`,
      `Serviço de interesse: ${data.get("service") ?? ""}`,
      `Projeto: ${data.get("message") ?? ""}`,
    ].join("\n");
    window.open(`${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-sans text-foreground">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-metal/20 bg-background/95 shadow-industrial backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" aria-label="PEH Serralheria, início" className="relative z-10">
            <img src={logoImg} alt="PEH Serralheria" className="h-14 w-auto object-contain" />
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary hidden lg:inline-flex">
            Solicitar orçamento
            <ArrowRight className="h-4 w-4" />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="icon-button lg:hidden"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <nav aria-label="Navegação mobile" className="border-t border-metal/15 bg-background px-5 py-6 lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-12 items-center justify-between border-b border-metal/10 text-base font-semibold text-foreground"
                >
                  {item.label}
                  <ChevronRight className="h-4 w-4 text-highlight" />
                </a>
              ))}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 justify-center">
                Solicitar orçamento
              </a>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="relative min-h-[760px] overflow-hidden lg:min-h-[820px]">
          <img
            src={weldingImg}
            alt="Profissional executando trabalho de serralheria em estrutura metálica"
            className="absolute inset-0 h-full w-full object-cover object-center"
            width={1920}
            height={1280}
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-metal-gradient" />

          <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-16 pt-32 lg:min-h-[820px] lg:items-center lg:px-8 lg:pb-20 lg:pt-36">
            <div className="max-w-4xl" data-reveal>
              <p className="eyebrow"><span />15 anos construindo confiança</p>
              <h1 className="mt-5 max-w-4xl font-display text-[clamp(3rem,7vw,6.75rem)] font-black uppercase leading-[0.92] text-foreground">
                Soluções metálicas com <span className="text-highlight">experiência, segurança e precisão.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Há 15 anos, a PEH Serralheria desenvolve e executa soluções em estruturas metálicas para diferentes necessidades, reunindo experiência de obra, conhecimento técnico e compromisso com cada projeto.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">
                  Solicitar orçamento
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#servicos" className="btn-secondary justify-center">Conheça nossos serviços</a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-quiet justify-center">
                  <MessageCircle className="h-5 w-5" /> WhatsApp
                </a>
              </div>
              <ul className="mt-10 grid max-w-2xl grid-cols-1 gap-3 border-t border-metal/20 pt-6 text-sm text-muted-foreground sm:grid-cols-3">
                {["Experiência de obra", "Execução responsável", "Soluções sob medida"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 shrink-0 text-highlight" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="sobre" className="section-shell bg-surface">
          <div className="section-grid mx-auto max-w-7xl px-5 lg:px-8">
            <div data-reveal>
              <SectionTitle eyebrow="Sobre nós" title="Conhecimento técnico que se prova em cada execução." />
              <div className="mt-8 space-y-5 text-base leading-8 text-muted-foreground">
                <p>A PEH Serralheria atua há 15 anos no mercado, desenvolvendo e executando soluções em estruturas metálicas para diferentes projetos.</p>
                <p>À frente da empresa, são 31 anos de experiência no segmento, unindo conhecimento técnico, experiência de obra e atenção a cada etapa da execução.</p>
                <p>Mais do que fabricar estruturas, buscamos entender o projeto, planejar sua execução e entregar um trabalho com qualidade, segurança e precisão.</p>
              </div>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-foreground">
                {["Qualidade", "Segurança", "Precisão"].map((value) => (
                  <span key={value} className="flex items-center gap-2"><Check className="h-4 w-4 text-highlight" />{value}</span>
                ))}
              </div>
            </div>

            <div className="relative" data-reveal>
              <div className="overflow-hidden rounded-2xl border border-metal/20">
                <img src={sparksImg} alt="Trabalho profissional de acabamento em metal" loading="lazy" width={1920} height={1280} className="aspect-[4/5] h-full w-full object-cover" />
              </div>
              <div className="stats-panel">
                <div><strong>15<span>+</span></strong><p>Anos de mercado</p></div>
                <div className="h-px bg-metal/20 sm:h-20 sm:w-px" />
                <div><strong>31</strong><p>Anos de experiência no segmento</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicos" className="section-shell">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl" data-reveal>
              <SectionTitle eyebrow="Serviços" title="Soluções metálicas desenvolvidas para cada necessidade." />
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">Cada projeto é avaliado de acordo com suas características e necessidades, buscando uma execução técnica, segura e de qualidade.</p>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service, index) => (
                <article key={service.title} className="service-card" data-reveal style={{ transitionDelay: `${Math.min(index, 3) * 70}ms` }}>
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={service.image} alt={service.title} loading="lazy" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <service.icon className="h-6 w-6 text-highlight" />
                    <h3 className="mt-5 text-lg font-bold text-foreground">{service.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-6 text-muted-foreground">{service.text}</p>
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-highlight transition-colors hover:text-foreground">
                      Solicitar orçamento <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="seguranca" className="section-shell relative overflow-hidden bg-surface">
          <div className="absolute inset-y-0 right-0 hidden w-[42%] lg:block">
            <img src={weldingImg} alt="Execução de serviço com atenção e proteção" loading="lazy" width={1920} height={1280} className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-surface/20" />
          </div>
          <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
            <div className="max-w-3xl" data-reveal>
              <SectionTitle eyebrow="Segurança" title="Segurança faz parte de cada etapa do trabalho." />
              <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-muted-foreground">
                <p>Na PEH, a execução dos serviços envolve não apenas qualidade e experiência, mas também cuidados e procedimentos voltados à segurança da equipe e da obra.</p>
                <p>Contamos com documentação e certificações relacionadas à segurança do trabalho, além do uso adequado de EPIs e procedimentos necessários para a realização das atividades.</p>
                <p>Nosso compromisso é executar cada projeto com responsabilidade, segurança e profissionalismo.</p>
              </div>
            </div>
            <div className="mt-12 grid max-w-4xl gap-px overflow-hidden rounded-2xl border border-metal/20 bg-metal/20 sm:grid-cols-2 lg:grid-cols-4" data-reveal>
              {safetyItems.map((item) => (
                <article key={item.title} className="bg-surface-elevated p-6">
                  <item.icon className="h-7 w-7 text-highlight" />
                  <h3 className="mt-5 font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20 sm:py-24">
          <img src={estruturasImg} alt="Estrutura metálica executada pela PEH Serralheria" loading="lazy" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/90" />
          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 lg:flex-row lg:items-end lg:px-8" data-reveal>
            <div className="max-w-3xl">
              <p className="eyebrow"><span />Seu projeto começa aqui</p>
              <h2 className="mt-4 font-display text-4xl font-black uppercase leading-tight text-foreground sm:text-5xl">Uma solução metálica pensada para a sua necessidade.</h2>
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary shrink-0 justify-center">Solicitar orçamento <ArrowRight className="h-4 w-4" /></a>
          </div>
        </section>

        <section id="contato" className="section-shell bg-surface">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div data-reveal>
                <SectionTitle eyebrow="Contato" title="Converse com a PEH sobre o seu projeto." />
                <p className="mt-6 text-base leading-8 text-muted-foreground">Envie as informações iniciais do seu projeto ou fale diretamente com a nossa equipe.</p>
                <div className="mt-10 space-y-4">
                  <a href={PHONE_URL} className="contact-link">
                    <span><Phone className="h-5 w-5" /></span>
                    <span><small>Telefone fixo</small><strong>{PHONE_DISPLAY}</strong></span>
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="contact-link">
                    <span><MessageCircle className="h-5 w-5" /></span>
                    <span><small>Celular e WhatsApp</small><strong>{WHATSAPP_DISPLAY}</strong></span>
                  </a>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center">Orçamento pelo WhatsApp</a>
                  <a href={PHONE_URL} className="btn-secondary justify-center">Ligar agora</a>
                </div>
              </div>

              <form onSubmit={submitQuote} className="quote-form" data-reveal>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nome" name="name" type="text" placeholder="Seu nome" required />
                  <Field label="Telefone / WhatsApp" name="phone" type="tel" placeholder="(11) 00000-0000" required />
                  <Field label="E-mail" name="email" type="email" placeholder="seu@email.com" />
                  <label className="field-label">
                    Serviço de interesse
                    <select name="service" required className="field-control" defaultValue="">
                      <option value="" disabled>Selecione um serviço</option>
                      {services.map((service) => <option key={service.title} value={service.title}>{service.title}</option>)}
                    </select>
                  </label>
                  <label className="field-label sm:col-span-2">
                    Mensagem / descrição do projeto
                    <textarea name="message" required rows={5} className="field-control resize-y" placeholder="Conte brevemente o que você precisa" />
                  </label>
                </div>
                <button type="submit" className="btn-primary mt-6 w-full justify-center sm:w-auto">
                  Solicitar orçamento <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-metal/15 bg-background py-14">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 border-b border-metal/15 pb-12 md:grid-cols-[1.4fr_0.7fr_0.9fr]">
            <div>
              <img src={logoImg} alt="PEH Serralheria" className="h-16 w-auto" />
              <p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">Soluções metálicas desenvolvidas com experiência, segurança, qualidade e precisão.</p>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase text-foreground">Navegação</h2>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                {navItems.slice(1).map((item) => <li key={item.href}><a href={item.href} className="hover:text-highlight">{item.label}</a></li>)}
              </ul>
            </div>
            <div>
              <h2 className="text-sm font-bold uppercase text-foreground">Contato</h2>
              <div className="mt-5 space-y-3 text-sm text-muted-foreground">
                <p>Telefone: <a href={PHONE_URL} className="text-foreground hover:text-highlight">{PHONE_DISPLAY}</a></p>
                <p>WhatsApp: <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-highlight">{WHATSAPP_DISPLAY}</a></p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-7 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} PEH Serralheria. Todos os direitos reservados.</p>
            <p>Desenvolvido por Agência SCASE.</p>
          </div>
        </div>
      </footer>

      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Solicitar orçamento pelo WhatsApp" className="whatsapp-float">
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2 className="mt-4 max-w-3xl font-display text-4xl font-black uppercase leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">{title}</h2>
    </div>
  );
}

function Field({ label, name, type, placeholder, required = false }: { label: string; name: string; type: string; placeholder: string; required?: boolean }) {
  return (
    <label className="field-label">
      {label}
      <input name={name} type={type} placeholder={placeholder} required={required} className="field-control" />
    </label>
  );
}