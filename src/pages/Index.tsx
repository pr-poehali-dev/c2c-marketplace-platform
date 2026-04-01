import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Layers",
    title: "Стратегия",
    desc: "Глубокий анализ рынка и аудитории. Находим точки роста, которые другие упускают.",
    num: "01",
  },
  {
    icon: "Pen",
    title: "Дизайн",
    desc: "Визуальные решения, которые говорят за вас. Каждый пиксель — осознанный выбор.",
    num: "02",
  },
  {
    icon: "Zap",
    title: "Разработка",
    desc: "Современный стек, молниеносная скорость. Технологии, которые работают сегодня и завтра.",
    num: "03",
  },
  {
    icon: "TrendingUp",
    title: "Рост",
    desc: "После запуска — сопровождение и масштабирование. Мы в команде надолго.",
    num: "04",
  },
];

const stats = [
  { value: "127+", label: "Проектов" },
  { value: "98%", label: "Довольных клиентов" },
  { value: "5 лет", label: "Опыта" },
  { value: "3×", label: "Быстрее рынка" },
];

const works = [
  {
    title: "Архитектурное бюро",
    category: "Брендинг · Сайт",
    year: "2024",
  },
  {
    title: "Финтех стартап",
    category: "Стратегия · Продукт",
    year: "2024",
  },
  {
    title: "Ювелирный дом",
    category: "Дизайн · Разработка",
    year: "2023",
  },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="grain-overlay min-h-screen font-golos"
      style={{ background: "var(--dark-1)", color: "var(--cream)" }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(15,13,10,0.9)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="font-cormorant text-2xl font-semibold tracking-wider shimmer-text"
              style={{ letterSpacing: "0.12em" }}
            >
              AURUM
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Услуги", "Работы", "О нас", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm tracking-widest uppercase hover-gold"
                style={{ color: "rgba(240,232,216,0.6)", letterSpacing: "0.14em" }}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            className="hidden md:block text-sm tracking-widest uppercase px-5 py-2.5 transition-all duration-300"
            style={{
              border: "1px solid var(--gold)",
              color: "var(--gold)",
              letterSpacing: "0.1em",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLButtonElement).style.background = "var(--gold)";
              (e.target as HTMLButtonElement).style.color = "var(--dark-1)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLButtonElement).style.background = "transparent";
              (e.target as HTMLButtonElement).style.color = "var(--gold)";
            }}
          >
            Связаться
          </button>

          {/* Mobile menu */}
          <button
            className="md:hidden"
            style={{ color: "var(--gold)" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            className="md:hidden px-6 pb-6 flex flex-col gap-5"
            style={{ background: "var(--dark-2)" }}
          >
            {["Услуги", "Работы", "О нас", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm tracking-widest uppercase"
                style={{ color: "rgba(240,232,216,0.7)", letterSpacing: "0.14em" }}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6"
        style={{ paddingTop: "100px" }}
      >
        {/* Background decoration */}
        <div
          className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 80% at 80% 30%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)",
          }}
        />

        {/* Vertical line */}
        <div
          className="absolute left-6 top-1/4 bottom-1/4 w-px hidden lg:block"
          style={{ background: "linear-gradient(to bottom, transparent, var(--gold-dim), transparent)" }}
        />

        <div className="max-w-6xl mx-auto w-full">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 mb-10 opacity-0 animate-fade-in-up"
              style={{ animationFillMode: "forwards" }}
            >
              <div
                className="h-px w-12"
                style={{ background: "var(--gold)" }}
              />
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "var(--gold)", letterSpacing: "0.2em" }}
              >
                Цифровое агентство
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-cormorant font-light leading-none mb-8 opacity-0 animate-fade-in-up delay-200"
              style={{
                fontSize: "clamp(3.5rem, 9vw, 8rem)",
                letterSpacing: "-0.02em",
                animationFillMode: "forwards",
              }}
            >
              Создаём то,{" "}
              <span className="italic" style={{ color: "var(--gold)" }}>
                что остаётся
              </span>
              <br />
              в памяти
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg leading-relaxed mb-14 opacity-0 animate-fade-in-up delay-400"
              style={{
                color: "rgba(240,232,216,0.55)",
                maxWidth: "480px",
                animationFillMode: "forwards",
              }}
            >
              Стратегия, дизайн и разработка для компаний,
              которым важна репутация. Без компромиссов.
            </p>

            {/* CTA */}
            <div
              className="flex flex-wrap items-center gap-5 opacity-0 animate-fade-in-up delay-600"
              style={{ animationFillMode: "forwards" }}
            >
              <button
                className="px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-90"
                style={{
                  background: "var(--gold)",
                  color: "var(--dark-1)",
                  letterSpacing: "0.12em",
                  fontWeight: 600,
                }}
              >
                Начать проект
              </button>
              <button
                className="flex items-center gap-3 text-sm tracking-widest uppercase transition-all duration-300 group"
                style={{ color: "rgba(240,232,216,0.6)", letterSpacing: "0.12em" }}
              >
                <span
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:border-amber-500"
                  style={{ borderColor: "rgba(201,168,76,0.4)" }}
                >
                  <Icon name="Play" size={12} style={{ color: "var(--gold)" }} />
                </span>
                Смотреть работы
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-1000"
          style={{ animationFillMode: "forwards" }}
        >
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "rgba(240,232,216,0.3)", letterSpacing: "0.2em" }}
          >
            Scroll
          </span>
          <div
            className="w-px h-10 animate-float"
            style={{
              background:
                "linear-gradient(to bottom, var(--gold-dim), transparent)",
            }}
          />
        </div>
      </section>

      {/* STATS */}
      <section
        className="py-16 border-t border-b"
        style={{ borderColor: "rgba(201,168,76,0.12)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="font-cormorant font-light mb-2"
                  style={{
                    fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "rgba(240,232,216,0.4)", letterSpacing: "0.16em" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 px-6" id="services">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <div
                className="flex items-center gap-3 mb-5"
              >
                <div className="h-px w-8" style={{ background: "var(--gold)" }} />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--gold)", letterSpacing: "0.2em" }}
                >
                  Что мы делаем
                </span>
              </div>
              <h2
                className="font-cormorant font-light"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.1 }}
              >
                Полный цикл
                <br />
                <span className="italic" style={{ color: "var(--gold)" }}>создания продукта</span>
              </h2>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(240,232,216,0.5)", maxWidth: "280px" }}
            >
              От первой идеи до работающего бизнеса. Берём на себя всё, что
              требует экспертизы.
            </p>
          </div>

          {/* Services grid */}
          <div className="grid md:grid-cols-2 gap-px" style={{ background: "rgba(201,168,76,0.08)" }}>
            {services.map((s, i) => (
              <div
                key={i}
                className="group p-10 transition-all duration-400 cursor-pointer relative overflow-hidden"
                style={{ background: "var(--dark-1)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: "var(--dark-3)" }}
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-8">
                    <span
                      className="font-cormorant text-5xl font-light"
                      style={{ color: "rgba(201,168,76,0.2)" }}
                    >
                      {s.num}
                    </span>
                    <div
                      className="w-10 h-10 flex items-center justify-center border transition-all duration-300 group-hover:border-amber-500"
                      style={{ borderColor: "rgba(201,168,76,0.25)" }}
                    >
                      <Icon name={s.icon} fallback="Star" size={16} style={{ color: "var(--gold)" }} />
                    </div>
                  </div>
                  <h3
                    className="font-cormorant text-2xl font-medium mb-4 transition-all duration-300"
                    style={{ letterSpacing: "0.02em" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(240,232,216,0.5)" }}
                  >
                    {s.desc}
                  </p>
                  <div
                    className="flex items-center gap-2 mt-8 text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                    style={{ color: "var(--gold)", letterSpacing: "0.16em" }}
                  >
                    Подробнее
                    <Icon name="ArrowRight" size={12} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section
        className="py-28 px-6"
        style={{ background: "var(--dark-2)" }}
        id="works"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8" style={{ background: "var(--gold)" }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "var(--gold)", letterSpacing: "0.2em" }}
            >
              Наши работы
            </span>
          </div>
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <h2
              className="font-cormorant font-light"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.1 }}
            >
              Избранные
              <br />
              <span className="italic" style={{ color: "var(--gold)" }}>проекты</span>
            </h2>
            <a
              href="#"
              className="flex items-center gap-2 text-sm tracking-widest uppercase hover-gold"
              style={{ color: "rgba(240,232,216,0.5)", letterSpacing: "0.14em" }}
            >
              Все работы
              <Icon name="ArrowRight" size={14} />
            </a>
          </div>

          {/* Works list */}
          <div className="flex flex-col">
            {works.map((w, i) => (
              <div
                key={i}
                className="group flex items-center justify-between py-8 border-b cursor-pointer transition-all duration-300"
                style={{ borderColor: "rgba(201,168,76,0.1)" }}
              >
                <div className="flex items-center gap-8">
                  <span
                    className="font-cormorant text-sm hidden sm:block"
                    style={{ color: "rgba(201,168,76,0.4)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="font-cormorant text-2xl md:text-3xl font-light transition-all duration-300 group-hover:text-amber-400"
                      style={{ letterSpacing: "-0.01em" }}
                    >
                      {w.title}
                    </h3>
                    <p
                      className="text-xs tracking-widest mt-1"
                      style={{ color: "rgba(240,232,216,0.4)", letterSpacing: "0.14em" }}
                    >
                      {w.category}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <span
                    className="text-sm hidden sm:block"
                    style={{ color: "rgba(240,232,216,0.3)" }}
                  >
                    {w.year}
                  </span>
                  <div
                    className="w-9 h-9 border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ borderColor: "var(--gold)" }}
                  >
                    <Icon name="ArrowUpRight" size={14} style={{ color: "var(--gold)" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8" style={{ background: "var(--gold)" }} />
                <span
                  className="text-xs tracking-widest uppercase"
                  style={{ color: "var(--gold)", letterSpacing: "0.2em" }}
                >
                  О нас
                </span>
              </div>
              <h2
                className="font-cormorant font-light mb-8"
                style={{ fontSize: "clamp(2rem, 5vw, 3.8rem)", lineHeight: 1.1 }}
              >
                Мы верим, что
                <br />
                <span className="italic" style={{ color: "var(--gold)" }}>
                  детали решают всё
                </span>
              </h2>
              <p
                className="leading-relaxed mb-6"
                style={{ color: "rgba(240,232,216,0.55)" }}
              >
                AURUM — агентство, где каждое решение принимается осознанно.
                Мы работаем с компаниями, которым важно не просто "сделать
                сайт", а построить цифровой актив.
              </p>
              <p
                className="leading-relaxed mb-10"
                style={{ color: "rgba(240,232,216,0.45)" }}
              >
                Наша команда объединяет стратегов, дизайнеров и инженеров.
                Мы отбираем партнёров, а не клиентов — и дорожим репутацией.
              </p>
              <button
                className="flex items-center gap-3 text-sm tracking-widest uppercase group transition-all duration-300"
                style={{ color: "var(--gold)", letterSpacing: "0.14em" }}
              >
                Познакомиться с командой
                <Icon
                  name="ArrowRight"
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* Visual element */}
            <div className="relative">
              <div
                className="relative aspect-square max-w-sm mx-auto"
              >
                {/* Big border box */}
                <div
                  className="absolute inset-0"
                  style={{ border: "1px solid rgba(201,168,76,0.15)" }}
                />
                {/* Offset box */}
                <div
                  className="absolute"
                  style={{
                    inset: "24px",
                    border: "1px solid rgba(201,168,76,0.08)",
                    background: "var(--dark-3)",
                  }}
                />
                {/* Corner accent top-left */}
                <div
                  className="absolute top-0 left-0 w-8 h-8"
                  style={{
                    borderTop: "2px solid var(--gold)",
                    borderLeft: "2px solid var(--gold)",
                  }}
                />
                {/* Corner accent bottom-right */}
                <div
                  className="absolute bottom-0 right-0 w-8 h-8"
                  style={{
                    borderBottom: "2px solid var(--gold)",
                    borderRight: "2px solid var(--gold)",
                  }}
                />
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
                  <div
                    className="font-cormorant font-light mb-2 shimmer-text"
                    style={{ fontSize: "5rem", lineHeight: 1 }}
                  >
                    A
                  </div>
                  <div
                    className="text-xs tracking-widest uppercase mb-6"
                    style={{ color: "rgba(201,168,76,0.5)", letterSpacing: "0.3em" }}
                  >
                    AURUM STUDIO
                  </div>
                  <div
                    className="h-px w-16 mb-6"
                    style={{ background: "rgba(201,168,76,0.25)" }}
                  />
                  <p
                    className="text-xs leading-relaxed font-cormorant italic"
                    style={{ color: "rgba(240,232,216,0.4)", fontSize: "1rem" }}
                  >
                    "Золото проверяется огнём,
                    <br />
                    человек — трудом"
                  </p>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -right-5 px-5 py-3 animate-float"
                style={{
                  background: "var(--gold)",
                  color: "var(--dark-1)",
                }}
              >
                <div className="font-cormorant text-2xl font-semibold leading-none">
                  5+
                </div>
                <div className="text-xs tracking-widest uppercase mt-1" style={{ letterSpacing: "0.14em" }}>
                  лет опыта
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-28 px-6 relative overflow-hidden"
        style={{ background: "var(--dark-3)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-8" style={{ background: "var(--gold)" }} />
            <span
              className="text-xs tracking-widest uppercase"
              style={{ color: "var(--gold)", letterSpacing: "0.2em" }}
            >
              Начнём?
            </span>
            <div className="h-px w-8" style={{ background: "var(--gold)" }} />
          </div>

          <h2
            className="font-cormorant font-light mb-6"
            style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)", lineHeight: 1.05 }}
          >
            Готовы создать
            <br />
            <span className="italic" style={{ color: "var(--gold)" }}>
              что-то выдающееся?
            </span>
          </h2>

          <p
            className="mb-12 text-lg"
            style={{ color: "rgba(240,232,216,0.45)", maxWidth: "440px", margin: "0 auto 3rem" }}
          >
            Расскажите о проекте — мы ответим в течение 24 часов с предложением
            и планом действий.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              className="px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300 hover:opacity-85"
              style={{
                background: "var(--gold)",
                color: "var(--dark-1)",
                letterSpacing: "0.12em",
                fontWeight: 600,
              }}
            >
              Обсудить проект
            </button>
            <button
              className="px-10 py-4 text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                border: "1px solid rgba(201,168,76,0.4)",
                color: "rgba(240,232,216,0.6)",
                letterSpacing: "0.12em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--gold)";
                (e.currentTarget as HTMLButtonElement).style.color = "var(--gold)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,168,76,0.4)";
                (e.currentTarget as HTMLButtonElement).style.color = "rgba(240,232,216,0.6)";
              }}
            >
              Посмотреть портфолио
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-12 px-6 border-t"
        style={{ borderColor: "rgba(201,168,76,0.1)", background: "var(--dark-1)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span
              className="font-cormorant text-xl font-semibold tracking-wider shimmer-text"
              style={{ letterSpacing: "0.12em" }}
            >
              AURUM
            </span>

            <div className="flex items-center gap-8">
              {["Telegram", "Instagram", "Behance"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs tracking-widest uppercase hover-gold transition-colors duration-200"
                  style={{ color: "rgba(240,232,216,0.35)", letterSpacing: "0.16em" }}
                >
                  {s}
                </a>
              ))}
            </div>

            <p
              className="text-xs"
              style={{ color: "rgba(240,232,216,0.25)" }}
            >
              © 2024 AURUM Studio
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;