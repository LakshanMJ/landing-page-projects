export default function Landing1() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Rooms", href: "#rooms" },
    { label: "Offers", href: "#offers" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#footer" },
  ];

  const stats = [
    { value: "25+", label: "Years of Excellence" },
    { value: "45k+", label: "Happy Guests" },
    { value: "120+", label: "Luxury Suites" },
    { value: "4.9", label: "Average Rating" },
  ];

  const experiences = [
    {
      title: "Hotel",
      subtitle: "A sanctuary of calm, crafted for unforgettable stays.",
      img: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2104f?auto=format&fit=crop&w=2400&q=80",
    },
    {
      title: "Restaurant",
      subtitle: "Seasonal cuisine, elegant atmosphere, coastal inspiration.",
      img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2400&q=80",
    },
    {
      title: "Wellness",
      subtitle: "Spa rituals and serenity with ocean-breeze tranquility.",
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2400&q=80",
    },
  ];

  const rooms = [
    {
      title: "Oceanfront Suite",
      img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "Garden Villa",
      img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "Penthouse Retreat",
      img: "https://images.unsplash.com/photo-1560067174-8943bd0f2661?auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "Poolside Deluxe",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80",
    },
  ];

  const amenities = [
    {
      title: "Spa & Wellness",
      text: "Signature rituals, sauna, and bespoke treatments.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
          <path
            d="M7 20c4.5 0 6-2.3 6-5.1 0-2.6-1.7-4.2-3.7-5.8C7.6 7.8 6 6.4 6 4.3 6 3 6.4 2 7 1.2"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M17 20c4.5 0 6-2.3 6-5.1 0-2.6-1.7-4.2-3.7-5.8-1.7-1.4-3.3-2.8-3.3-4.8 0-1.3.4-2.3 1-3.1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      ),
    },
    {
      title: "Free Wi‑Fi",
      text: "Seamless connectivity across the entire resort.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
          <path
            d="M2.5 8.5C8 3.5 16 3.5 21.5 8.5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M5.5 11.5c4-3.5 9-3.5 13 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.8"
          />
          <path
            d="M8.8 14.8c2.2-2.2 4.2-2.2 6.4 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path d="M12 18.5h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Room Service",
      text: "Discreet dining, delivered with impeccable timing.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
          <path d="M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path
            d="M6 18c0-6 3-10 6-10s6 4 6 10"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path d="M12 6V4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
        </svg>
      ),
    },
    {
      title: "Fine Dining",
      text: "Chef-led menus with local, seasonal ingredients.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
          <path d="M8 3v8M12 3v8M16 3v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M10 11c0 5-2 10-2 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M14 11c0 5 2 10 2 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Conference Room",
      text: "Premium spaces for meetings and celebrations.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
          <path d="M4 6h16v10H4V6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M8 20v-4M16 20v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9 10h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
        </svg>
      ),
    },
    {
      title: "Swimming Pool",
      text: "Infinity-edge views with attentive poolside service.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
          <path
            d="M3 17c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M3 20c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.75"
          />
          <path
            d="M8 4v8M8 4c0-1 1-2 2-2h4c1 0 2 1 2 2v8"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.8"
          />
        </svg>
      ),
    },
  ];

  const offers = [
    {
      title: "Family Vacation",
      tag: "Save 20%",
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "Honeymoon Package",
      tag: "Romance",
      img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "Luxury Escape",
      tag: "2 Nights",
      img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "Wellness Weekend",
      tag: "Spa Credit",
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=2000&q=80",
    },
  ];

  const blogs = [
    {
      title: "A Guide to Oceanfront Serenity",
      text: "Discover the small luxuries that make every moment feel effortless.",
      img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "Chef’s Tasting: Seasonal Coastal Menu",
      text: "An evening curated by our culinary team, inspired by local harvests.",
      img: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "Spa Rituals for Deep Restoration",
      text: "Breathe, unwind, and indulge in signature wellness therapies.",
      img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "Sunset Views: The Golden Hour Spots",
      text: "From poolside lounges to private terraces, find your perfect glow.",
      img: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2000&q=80",
    },
    {
      title: "Suites Designed for Quiet Indulgence",
      text: "Warm textures, refined lighting, and details that whisper luxury.",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0f2f2f] text-white selection:bg-[#d4af37]/30 selection:text-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        .serif { font-family: "Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif; }
        .sans { font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; }
      `}</style>

      <section id="home" className="relative min-h-[100svh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#0f2f2f]" />

        <header className="relative z-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
            <a href="#home" className="group inline-flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
              </span>
              <div className="leading-tight">
                <div className="serif text-lg tracking-wide">Lunara</div>
                <div className="text-xs tracking-[0.25em] text-white/60">HOTEL & RESORT</div>
              </div>
            </a>

            <nav className="hidden items-center gap-7 text-sm text-white/80 md:flex">
              {navLinks.slice(0, 6).map((l) => (
                <a key={l.href} href={l.href} className="transition-colors duration-300 hover:text-white">
                  {l.label}
                </a>
              ))}
              <a
                href="#rooms"
                className="rounded-full border border-[#d4af37]/35 bg-[#d4af37]/10 px-4 py-2 text-sm text-[#f3df9b] transition duration-300 hover:bg-[#d4af37]/20"
              >
                Book a Stay
              </a>
            </nav>

            <a
              href="#rooms"
              className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur transition duration-300 hover:bg-white/15 md:hidden"
            >
              Book
            </a>
          </div>
        </header>

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-96px)] max-w-7xl flex-col justify-center px-6 pb-16 pt-16 md:pb-24 md:pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
              Premium stays • Coastal serenity • Signature service
            </div>
            <h1 className="serif mt-6 text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Unlock Your <span className="text-[#e5c07b]">Best Stays</span>
            </h1>
            <p className="sans mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
              A refined oceanfront resort where quiet luxury meets effortless comfort. Curated suites, chef-led dining,
              and wellness rituals designed to slow time.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#rooms"
                className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-7 py-3 text-sm font-semibold tracking-wide text-[#0f2f2f] transition duration-300 hover:brightness-105"
              >
                Discover Rooms
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold tracking-wide text-white/90 backdrop-blur transition duration-300 hover:bg-white/10"
              >
                Explore the Resort
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur">
                  <div className="serif text-2xl text-[#e5c07b]">{s.value}</div>
                  <div className="mt-1 text-xs tracking-wide text-white/65">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="text-xs tracking-[0.25em] text-white/60">INTRODUCTION</div>
              <h2 className="serif mt-3 text-4xl leading-tight sm:text-5xl">
                Luxury Hotel & <span className="text-[#e5c07b]">Resort</span>
              </h2>
              <p className="sans mt-5 leading-relaxed text-white/75">
                Nestled between lush gardens and an endless horizon, Lunara offers a premium escape shaped by minimal
                elegance, warm textures, and thoughtful details. From private terraces to infinity-edge views, every
                space is designed to feel serene and personal.
              </p>
              <div className="mt-7 flex items-center gap-3">
                <a
                  href="#experience"
                  className="inline-flex items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-6 py-3 text-sm font-semibold text-[#f3df9b] transition duration-300 hover:bg-[#d4af37]/20"
                >
                  Explore More
                </a>
                <div className="text-sm text-white/55">Open all year • Signature service</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-12 sm:col-span-6">
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                    <img
                      src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=80"
                      alt="Resort pool"
                      className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-6">
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                    <img
                      src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1600&q=80"
                      alt="Luxury lounge"
                      className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  </div>
                </div>
                <div className="col-span-12">
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                    <img
                      src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2000&q=80"
                      alt="Luxury suite"
                      className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                      <div>
                        <div className="serif text-2xl">Signature Suites</div>
                        <div className="text-sm text-white/70">Design-led comfort with coastal views</div>
                      </div>
                      <a
                        href="#rooms"
                        className="mt-3 inline-flex w-fit items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm text-white/90 backdrop-blur transition duration-300 hover:bg-white/15 sm:mt-0"
                      >
                        View Rooms
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={`about-${s.label}`} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                    <div className="serif text-xl text-[#e5c07b]">{s.value}</div>
                    <div className="mt-1 text-xs text-white/60">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-xs tracking-[0.25em] text-white/60">EXPERIENCE</div>
              <h2 className="serif mt-3 text-4xl sm:text-5xl">Live the Lunara Way</h2>
            </div>
            <div className="hidden max-w-md text-right text-sm text-white/60 md:block">
              Three signature worlds—stay, dine, and renew—crafted with a calm, premium rhythm.
            </div>
          </div>
        </div>

        <div className="mt-10 space-y-8">
          {experiences.map((e) => (
            <div key={e.title} className="relative h-[64vh] min-h-[460px] w-full overflow-hidden">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${e.img})` }} />
              <div className="absolute inset-0 bg-black/55" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/20 to-[#0f2f2f]/95" />

              <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
                <div className="max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-10">
                  <div className="text-xs tracking-[0.25em] text-white/70">SIGNATURE</div>
                  <h3 className="serif mt-3 text-4xl sm:text-5xl">
                    {e.title} <span className="text-[#e5c07b]">Experience</span>
                  </h3>
                  <p className="sans mt-4 leading-relaxed text-white/75">{e.subtitle}</p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#rooms"
                      className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-[#0f2f2f] transition duration-300 hover:brightness-105"
                    >
                      Reserve Now
                    </a>
                    <a
                      href="#offers"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition duration-300 hover:bg-white/10"
                    >
                      View Offers
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="rooms" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs tracking-[0.25em] text-white/60">ROOMS & SUITES</div>
              <h2 className="serif mt-3 text-4xl sm:text-5xl">Refined Spaces</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/70">
                Minimal, elegant interiors with premium linens, warm lighting, and private outdoor moments—designed for
                quiet indulgence.
              </p>
            </div>
            <a
              href="#offers"
              className="inline-flex w-fit items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 px-6 py-3 text-sm font-semibold text-[#f3df9b] transition duration-300 hover:bg-[#d4af37]/20"
            >
              See Packages
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rooms.map((r) => (
              <a key={r.title} href="#" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <img
                  src={r.img}
                  alt={r.title}
                  className="h-[260px] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="serif text-xl">{r.title}</div>
                  <div className="mt-1 flex items-center justify-between text-xs text-white/70">
                    <span>From $299 / night</span>
                    <span className="inline-flex items-center gap-1 text-[#e5c07b]">
                      View
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                        <path d="M7 17 17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        <path
                          d="M9 7h8v8"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0c2626] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <div className="text-xs tracking-[0.25em] text-white/60">WHAT WE OFFER</div>
            <h2 className="serif mt-3 text-4xl sm:text-5xl">
              Amenities with <span className="text-[#e5c07b]">Intention</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/70">
              Every detail is curated to feel effortless—quiet comfort, premium service, and modern essentials in a refined setting.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((a) => (
              <div
                key={a.title}
                className="group rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:bg-white/10"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4af37]/30 bg-[#d4af37]/10 text-[#e5c07b]">
                  {a.icon}
                </div>
                <div className="serif mt-4 text-2xl">{a.title}</div>
                <p className="mt-2 leading-relaxed text-white/70">{a.text}</p>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-[#d4af37]/35 via-white/10 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2600&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f2f2f]/10 via-black/30 to-[#0f2f2f]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <div className="text-xs tracking-[0.25em] text-white/60">GUEST STORIES</div>
              <h2 className="serif mt-3 text-4xl sm:text-5xl">A stay worth returning to</h2>
              <p className="mt-4 leading-relaxed text-white/70">
                From sunset dinners to the calm of your suite, every moment is designed with restraint, elegance, and care.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-10">
                <div className="flex items-center gap-1 text-[#e5c07b]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="serif mt-5 text-2xl leading-relaxed">
                  “A masterpiece of calm luxury. The service felt invisible yet perfect, and the oceanfront suite was pure serenity.
                  We’ll be back without hesitation.”
                </p>
                <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
                  <div>
                    <div className="text-sm font-semibold text-white/90">Amelia R.</div>
                    <div className="text-xs text-white/60">London • Oceanfront Suite</div>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">Verified Guest</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs tracking-[0.25em] text-white/60">PACKAGES</div>
              <h2 className="serif mt-3 text-4xl sm:text-5xl">
                Exclusive <span className="text-[#e5c07b]">Offers</span>
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/70">
                Curated packages crafted for romance, family memories, and restorative weekends.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition duration-300 hover:bg-white/10"
            >
              View All Offers
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offers.map((o) => (
              <a key={o.title} href="#" className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <img
                  src={o.img}
                  alt={o.title}
                  className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-[#d4af37]/35 bg-[#d4af37]/15 px-3 py-1 text-xs font-semibold text-[#f3df9b] backdrop-blur">
                  {o.tag}
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="serif text-xl">{o.title}</div>
                  <div className="mt-2 text-xs text-white/70">Curated experiences • Premium inclusions</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2400&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2f2f]/95 via-black/20 to-[#0f2f2f]/95" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur sm:p-10 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <div className="text-xs tracking-[0.25em] text-white/60">LIMITED AVAILABILITY</div>
              <div className="serif mt-3 text-4xl leading-tight sm:text-5xl">
                Escape to Paradise <span className="text-[#e5c07b]">Book Now!</span>
              </div>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/70">
                Reserve your oceanfront stay with flexible dates and premium inclusions curated for a seamless arrival.
              </p>
            </div>
            <div className="md:col-span-4 md:flex md:justify-end">
              <a
                href="#rooms"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 text-sm font-semibold text-[#0f2f2f] transition duration-300 hover:brightness-105 md:w-auto"
              >
                Check Availability
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="bg-[#0c2626] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-xs tracking-[0.25em] text-white/60">JOURNAL</div>
              <h2 className="serif mt-3 text-4xl sm:text-5xl">Stories & Inspirations</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-white/70">
                Travel notes, dining highlights, and wellness rituals—designed to bring the Lunara mood with you.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex w-fit items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 transition duration-300 hover:bg-white/10"
            >
              Read More
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {blogs.map((b) => (
              <a
                key={b.title}
                href="#"
                className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:bg-white/10"
              >
                <div className="relative">
                  <img
                    src={b.img}
                    alt={b.title}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="serif text-lg leading-snug">{b.title}</div>
                  <div className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/70">{b.text}</div>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[#e5c07b]">
                    Read Article
                    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                      <path d="M7 17 17 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <path
                        d="M9 7h8v8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer id="footer" className="bg-[#0f2f2f] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 border-t border-white/10 pt-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="inline-flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5">
                  <span className="h-2 w-2 rounded-full bg-[#d4af37]" />
                </span>
                <div className="leading-tight">
                  <div className="serif text-lg tracking-wide">Lunara</div>
                  <div className="text-xs tracking-[0.25em] text-white/60">HOTEL & RESORT</div>
                </div>
              </div>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
                A luxury coastal retreat designed for calm. Suites, dining, wellness, and premium service—crafted with minimal elegance.
              </p>
              <div className="mt-6 flex items-center gap-3 text-white/70">
                {["Instagram", "Facebook", "X", "YouTube"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 hover:bg-white/10"
                    aria-label={s}
                    title={s}
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                      <path d="M7 12h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M12 7v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" opacity="0.65" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <div className="text-sm font-semibold text-white/90">Explore</div>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                {navLinks.slice(0, 5).map((l) => (
                  <a key={`f-${l.href}`} href={l.href} className="block transition hover:text-white">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="text-sm font-semibold text-white/90">Contact</div>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                <div>Oceanfront Avenue, Coastal Bay</div>
                <div>+1 (555) 012-3456</div>
                <div>reservations@lunararesort.com</div>
              </div>
            </div>

            <div className="md:col-span-3">
              <div className="text-sm font-semibold text-white/90">Newsletter</div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Receive curated offers, travel notes, and exclusive seasonal releases.
              </p>
              <form className="mt-5 flex gap-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/45 outline-none focus:border-[#d4af37]/50 focus:ring-2 focus:ring-[#d4af37]/15"
                />
                <button
                  type="button"
                  className="rounded-full bg-[#d4af37] px-5 py-3 text-sm font-semibold text-[#0f2f2f] transition duration-300 hover:brightness-105"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} Lunara Hotel & Resort. All rights reserved.</div>
            <div className="flex gap-5">
              <a href="#" className="transition hover:text-white">
                Privacy
              </a>
              <a href="#" className="transition hover:text-white">
                Terms
              </a>
              <a href="#" className="transition hover:text-white">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
