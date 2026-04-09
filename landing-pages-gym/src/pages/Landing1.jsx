export default function Landing1() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700;800;900&display=swap');
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up { animation: fadeInUp 0.85s ease-out both; }
        .animate-fade-in { animation: fadeIn 1s ease-out both; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>

      <div
        className="min-h-screen bg-neutral-950 text-white antialiased selection:bg-red-500/30 selection:text-white"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
      >
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
            <span
              className="text-2xl tracking-[0.2em] text-white sm:text-3xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              IRON<span className="text-red-500">CORE</span>
            </span>
            <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wider text-neutral-400 md:flex">
              <a href="#features" className="transition-colors hover:text-white">
                Features
              </a>
              <a href="#about" className="transition-colors hover:text-white">
                About
              </a>
              <a href="#trainers" className="transition-colors hover:text-white">
                Trainers
              </a>
              <a href="#pricing" className="transition-colors hover:text-white">
                Pricing
              </a>
            </nav>
            <a
              href="#cta"
              className="rounded-full bg-red-500 px-5 py-2 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-red-500/25 transition hover:bg-red-400"
            >
              Join Now
            </a>
          </div>
        </header>

        <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=85)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-neutral-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(239,68,68,0.12)_0%,_transparent_55%)]" />

          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="animate-fade-in-up mb-4 text-xs font-bold uppercase tracking-[0.35em] text-red-400">
              Elite Training · Proven Results
            </p>
            <h1
              className="animate-fade-in-up delay-100 text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Transform Your Body.
              <br />
              <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent">
                Build Your Power.
              </span>
            </h1>
            <p className="animate-fade-in-up delay-200 mx-auto mt-6 max-w-2xl text-lg font-medium text-neutral-400 md:text-xl">
              Science-backed programs, world-class coaching, and a community that pushes you past
              limits. Your strongest version starts here.
            </p>
            <div className="animate-fade-in-up delay-300 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-red-500 px-10 py-4 text-base font-bold uppercase tracking-widest text-white shadow-xl shadow-red-500/30 transition duration-300 hover:scale-105 hover:bg-red-400"
              >
                Join Now
              </a>
              <a
                href="#about"
                className="text-sm font-semibold uppercase tracking-widest text-neutral-400 transition hover:text-white"
              >
                See how it works →
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 animate-fade-in delay-400 md:block">
            <div className="h-10 w-6 rounded-full border-2 border-white/20 p-1">
              <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-red-500" />
            </div>
          </div>
        </section>

        <section id="features" className="relative border-t border-white/5 bg-neutral-950 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">Why us</p>
              <h2
                className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Everything you need to dominate
              </h2>
              <p className="mt-4 text-neutral-400">
                Premium equipment, expert guidance, and systems built for real transformation—not
                quick fixes.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Strength Training",
                  desc: "Progressive overload programs tailored to your level and goals.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75l9-9.75z"
                    />
                  ),
                },
                {
                  title: "Personal Coaching",
                  desc: "1-on-1 sessions that correct form, prevent injury, and accelerate gains.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  ),
                },
                {
                  title: "Nutrition Plans",
                  desc: "Macro strategies and meal frameworks that fuel performance and recovery.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.165l-3.23-1.125a48.424 48.424 0 00-3.722 0l-3.23 1.125m13.5-1.47a48.424 48.424 0 00-3.722 0l-3.23 1.125m0 0a48.424 48.424 0 01-3.722 0l-3.23-1.125m13.5 1.47V19.5m-13.5-1.47V19.5"
                    />
                  ),
                },
                {
                  title: "24/7 Access",
                  desc: "Train on your schedule with secure entry and always-on facility access.",
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  ),
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-transparent p-8 transition duration-300 hover:scale-105 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/10"
                >
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-red-500/10 text-red-500 ring-1 ring-red-500/20 transition group-hover:bg-red-500/20">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      {item.icon}
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/5 bg-neutral-900/50 py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517838277456-f5f99be501cd?auto=format&fit=crop&w=1200&q=85"
                alt="Intense gym workout"
                className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105 md:aspect-auto md:min-h-[520px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold uppercase tracking-widest text-red-400">Discipline</p>
                <p className="mt-1 text-2xl font-black uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  No excuses. Just reps.
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">Why choose us</p>
              <h2
                className="mt-3 text-4xl font-black uppercase leading-tight tracking-tight text-white sm:text-5xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Built on discipline.
                <br />
                <span className="text-neutral-500">Driven by results.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-neutral-400">
                We combine structured training, measurable progress, and accountability so you
                stop guessing and start compounding. Every session is designed to move the needle—
                whether you are rebuilding, cutting, or chasing a new PR.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Personalized programming—not cookie-cutter templates",
                  "Performance tracking and milestone reviews",
                  "Recovery-first mindset to keep you consistent",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-3 text-neutral-300">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/15 text-green-500 ring-1 ring-green-500/30">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <a
                href="#pricing"
                className="mt-10 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-red-400 transition hover:text-red-300"
              >
                View membership options
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </section>

        <section id="trainers" className="border-t border-white/5 bg-neutral-950 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">The team</p>
                <h2
                  className="mt-2 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Trainers who deliver
                </h2>
              </div>
              <p className="max-w-md text-neutral-400">
                Certified professionals obsessed with technique, progression, and sustainable
                performance.
              </p>
            </div>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Marcus Cole",
                  role: "Strength",
                  img: "https://images.unsplash.com/photo-1567013124632-4018482e1ef7?auto=format&fit=crop&w=800&q=85",
                },
                {
                  name: "Elena Vasquez",
                  role: "Cardio",
                  img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=85",
                },
                {
                  name: "James Okonkwo",
                  role: "Bodybuilding",
                  img: "https://images.unsplash.com/photo-1594736797933-d0c30c0cb6a7?auto=format&fit=crop&w=800&q=85",
                },
              ].map((t) => (
                <div
                  key={t.name}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/40 transition duration-300 hover:scale-105 hover:border-red-500/30 hover:shadow-2xl hover:shadow-red-500/5"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={t.img} alt={t.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xs font-bold uppercase tracking-widest text-red-400">{t.role}</p>
                      <p className="mt-1 text-2xl font-bold text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                        {t.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="border-t border-white/5 bg-neutral-900/30 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">Pricing</p>
              <h2
                className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Invest in your upgrade
              </h2>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-3 lg:items-stretch">
              <div className="flex flex-col rounded-3xl border border-white/10 bg-neutral-950/80 p-8 transition duration-300 hover:scale-105">
                <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">Basic</p>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    $49
                  </span>
                  <span className="text-neutral-500">/mo</span>
                </p>
                <ul className="mt-8 flex-1 space-y-4 text-sm text-neutral-400">
                  {["Facility access (off-peak)", "App workout library", "Locker room access"].map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="text-red-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="mt-10 block rounded-full border border-white/20 py-3 text-center text-sm font-bold uppercase tracking-widest text-white transition hover:border-white hover:bg-white/5"
                >
                  Choose Basic
                </a>
              </div>

              <div className="relative flex flex-col rounded-3xl border-2 border-red-500 bg-gradient-to-b from-red-500/10 to-neutral-950 p-8 shadow-2xl shadow-red-500/20 transition duration-300 hover:scale-105 lg:-translate-y-2 lg:py-10">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-red-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                  Most popular
                </span>
                <p className="text-sm font-bold uppercase tracking-widest text-red-400">Pro</p>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    $89
                  </span>
                  <span className="text-neutral-400">/mo</span>
                </p>
                <ul className="mt-8 flex-1 space-y-4 text-sm text-neutral-200">
                  {[
                    "24/7 facility access",
                    "Monthly coaching check-in",
                    "Nutrition starter plan",
                    "Guest pass (1/mo)",
                  ].map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="text-green-400">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="mt-10 block rounded-full bg-red-500 py-4 text-center text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-red-500/40 transition hover:bg-red-400"
                >
                  Choose Pro
                </a>
              </div>

              <div className="flex flex-col rounded-3xl border border-white/10 bg-neutral-950/80 p-8 transition duration-300 hover:scale-105">
                <p className="text-sm font-bold uppercase tracking-widest text-neutral-500">Elite</p>
                <p className="mt-4 flex items-baseline gap-1">
                  <span className="text-5xl font-black text-white" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                    $149
                  </span>
                  <span className="text-neutral-500">/mo</span>
                </p>
                <ul className="mt-8 flex-1 space-y-4 text-sm text-neutral-400">
                  {[
                    "Everything in Pro",
                    "Weekly 1-on-1 sessions",
                    "Custom programming",
                    "Priority booking & recovery suite",
                  ].map((f) => (
                    <li key={f} className="flex gap-3">
                      <span className="text-red-500">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className="mt-10 block rounded-full border border-white/20 py-3 text-center text-sm font-bold uppercase tracking-widest text-white transition hover:border-white hover:bg-white/5"
                >
                  Choose Elite
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-neutral-950 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">Transformations</p>
              <h2
                className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Real people. Real change.
              </h2>
            </div>
            <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-6">
              {[
                "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=85",
                "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=900&q=85",
                "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=85",
                "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=900&q=85",
                "https://images.unsplash.com/photo-1593079831268-3381b0db4c77?auto=format&fit=crop&w=900&q=85",
                "https://images.unsplash.com/photo-1434682880608-69a58e9c692d?auto=format&fit=crop&w=900&q=85",
              ].map((src, i) => (
                <div
                  key={src}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 md:aspect-square"
                >
                  <img
                    src={src}
                    alt={`Transformation ${i + 1}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-white/5 bg-neutral-900/40 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-red-500">Testimonials</p>
              <h2
                className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                What members say
              </h2>
            </div>
            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Chris Dalton",
                  quote:
                    "I finally have a plan I can stick to. Strength numbers are up and I feel athletic again.",
                  avatar:
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
                },
                {
                  name: "Priya Shah",
                  quote:
                    "Coaching is next-level—form fixes alone were worth it. The energy here is unreal.",
                  avatar:
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
                },
                {
                  name: "Jordan Lee",
                  quote:
                    "Nutrition + training under one roof. Down 18lbs and still building muscle.",
                  avatar:
                    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
                },
              ].map((x) => (
                <blockquote
                  key={x.name}
                  className="rounded-2xl border border-white/10 bg-neutral-950/60 p-8 transition duration-300 hover:border-red-500/30"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={x.avatar}
                      alt=""
                      className="h-14 w-14 rounded-full object-cover ring-2 ring-red-500/40"
                    />
                    <div>
                      <cite className="not-italic text-lg font-bold text-white">{x.name}</cite>
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500">Member</p>
                    </div>
                  </div>
                  <p className="mt-6 text-neutral-300 leading-relaxed">“{x.quote}”</p>
                  <div className="mt-6 flex gap-1 text-red-500">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <span key={s}>★</span>
                    ))}
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="border-t border-white/5 bg-gradient-to-br from-red-600 via-red-700 to-neutral-950 py-24 sm:py-32">
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2
              className="text-4xl font-black uppercase tracking-tight text-white sm:text-5xl md:text-6xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Start Your Transformation Today
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-red-100/90">
              Book a free intro session. We will assess your goals, map your plan, and show you
              exactly how we build momentum—fast.
            </p>
            <a
              href="#pricing"
              className="mt-10 inline-flex min-w-[220px] items-center justify-center rounded-full bg-white px-12 py-4 text-base font-black uppercase tracking-[0.2em] text-red-600 shadow-2xl transition duration-300 hover:scale-105 hover:bg-neutral-100"
            >
              Get Started
            </a>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-black py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:items-start">
              <div className="text-center md:text-left">
                <p
                  className="text-3xl tracking-[0.2em] text-white"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  IRON<span className="text-red-500">CORE</span>
                </p>
                <p className="mt-2 max-w-xs text-sm text-neutral-500">
                  Premium training for people who are done playing small.
                </p>
              </div>
              <nav className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-semibold uppercase tracking-wider text-neutral-400">
                <a href="#" className="transition hover:text-white">
                  Home
                </a>
                <a href="#about" className="transition hover:text-white">
                  About
                </a>
                <a href="#pricing" className="transition hover:text-white">
                  Pricing
                </a>
                <a href="#cta" className="transition hover:text-white">
                  Contact
                </a>
              </nav>
              <div className="flex items-center gap-5">
                {[
                  {
                    label: "Instagram",
                    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                  },
                  {
                    label: "YouTube",
                    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                  },
                  {
                    label: "Twitter",
                    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
                  },
                ].map((soc) => (
                  <a
                    key={soc.label}
                    href="#"
                    aria-label={soc.label}
                    className="text-neutral-500 transition hover:text-red-500"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d={soc.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-neutral-600">
              © {new Date().getFullYear()} IronCore. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
