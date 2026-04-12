import React, { useEffect, useMemo, useState } from "react";

export default function Landing1() {
  const [mounted, setMounted] = useState(false);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const navItems = useMemo(
    () => [
      { label: "Home", href: "#" },
      { label: "Shop All", href: "#shop" },
      { label: "About Us", href: "#about" },
      { label: "Contact", href: "#footer" },
    ],
    [],
  );

  const categories = useMemo(
    () => [
      {
        key: "jjk",
        title: "Jujutsu Kaisen",
        subtitle: "NEW ARRIVALS",
        cta: "Shop",
        img: "https://images.unsplash.com/photo-1520975682071-a1bdfb7f63ee?auto=format&fit=crop&w=1400&q=80",
      },
      {
        key: "ds",
        title: "Demon Slayer",
        subtitle: "HOODIES",
        cta: "Shop",
        img: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80",
      },
      {
        key: "op",
        title: "One Piece",
        subtitle: "GRAPHIC TEES",
        cta: "Shop",
        img: "https://images.unsplash.com/photo-1520975682031-6d7f7b7f5d22?auto=format&fit=crop&w=1200&q=80",
      },
      {
        key: "nrt",
        title: "Naruto",
        subtitle: "BEST SELLERS",
        cta: "Shop",
        img: "https://images.unsplash.com/photo-1520975681653-0e3a6f96cace?auto=format&fit=crop&w=1200&q=80",
      },
    ],
    [],
  );

  const bestSellers = useMemo(
    () => [
      {
        key: "bs-1",
        name: "Obsidian Crow Tee",
        price: "$58.00",
        img: "https://images.unsplash.com/photo-1520975682157-1f0c4e8b0b9f?auto=format&fit=crop&w=900&q=80",
      },
      {
        key: "bs-2",
        name: "Red Seal Hoodie",
        price: "$112.00",
        img: "https://images.unsplash.com/photo-1520975681677-6d4bb7a3a4f8?auto=format&fit=crop&w=900&q=80",
      },
      {
        key: "bs-3",
        name: "Shadow Arc Jacket",
        price: "$148.00",
        img: "https://images.unsplash.com/photo-1520975682164-4b0f4a1b11c5?auto=format&fit=crop&w=900&q=80",
      },
      {
        key: "bs-4",
        name: "Koi Crest Tee",
        price: "$64.00",
        img: "https://images.unsplash.com/photo-1520975682101-6ce38e6a4f1f?auto=format&fit=crop&w=900&q=80",
      },
    ],
    [],
  );

  const hotPicks = useMemo(
    () => [
      {
        key: "hp-1",
        name: "Midnight Panel Tee",
        price: "$62.00",
        img: "https://images.unsplash.com/photo-1520975682065-1d41f0a3ef0c?auto=format&fit=crop&w=900&q=80",
      },
      {
        key: "hp-2",
        name: "Crimson Stitch Hoodie",
        price: "$118.00",
        img: "https://images.unsplash.com/photo-1520975682054-0a7d2c7df8fb?auto=format&fit=crop&w=900&q=80",
      },
      {
        key: "hp-3",
        name: "Arcline Overshirt",
        price: "$132.00",
        img: "https://images.unsplash.com/photo-1520975682114-3c0d6d3f8a47?auto=format&fit=crop&w=900&q=80",
      },
      {
        key: "hp-4",
        name: "Kage Utility Tee",
        price: "$56.00",
        img: "https://images.unsplash.com/photo-1520975682078-6d7c1c13c2bd?auto=format&fit=crop&w=900&q=80",
      },
    ],
    [],
  );

  const testimonials = useMemo(
    () => [
      {
        key: "t-1",
        quote:
          "The fit is premium and the prints look insane in person. Feels like a real streetwear drop, not merch.",
        name: "Jordan M.",
        role: "Verified buyer",
        avatar:
          "https://images.unsplash.com/photo-1520975682024-9c02f4f7d9c7?auto=format&fit=crop&w=240&q=80",
        rating: 5,
      },
      {
        key: "t-2",
        quote:
          "Fast shipping, clean packaging, and the hoodie quality is next level. Already placing my second order.",
        name: "Mina K.",
        role: "Verified buyer",
        avatar:
          "https://images.unsplash.com/photo-1520975682034-e9e2fe1f3c42?auto=format&fit=crop&w=240&q=80",
        rating: 5,
      },
      {
        key: "t-3",
        quote:
          "The designs are bold but wearable. Perfect for daily fits—gets compliments every time I go out.",
        name: "Alex R.",
        role: "Verified buyer",
        avatar:
          "https://images.unsplash.com/photo-1520975682060-2db4c1a0a0f1?auto=format&fit=crop&w=240&q=80",
        rating: 4,
      },
    ],
    [],
  );

  const currentTestimonial = testimonials[testimonialIdx % testimonials.length];

  const heroImg =
    "https://images.unsplash.com/photo-1520975682124-5f27c2b9f5b1?auto=format&fit=crop&w=2000&q=80";
  const promoImg =
    "https://images.unsplash.com/photo-1520975682142-52a5e6d3e4c0?auto=format&fit=crop&w=2000&q=80";
  const aboutImg =
    "https://images.unsplash.com/photo-1520975682074-7b3f5b5b6a2d?auto=format&fit=crop&w=1400&q=80";

  const IconSearch = (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M16.2 16.2 21 21"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );

  const IconCart = (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.2 7.4h14.2l-1.4 7.2a2.2 2.2 0 0 1-2.2 1.8H9.4a2.2 2.2 0 0 1-2.2-1.7L5.5 3.6H2.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.7 21a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z"
        fill="currentColor"
      />
      <path
        d="M18.1 21a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z"
        fill="currentColor"
      />
    </svg>
  );

  const IconUser = (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 12.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M20.2 21a8.2 8.2 0 0 0-16.4 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );

  const IconTruck = (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3.5 6.6h11.4v9.8H3.5V6.6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14.9 9.2h3.7l1.9 2.3v4.9h-5.6V9.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 19.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"
        fill="currentColor"
      />
      <path
        d="M18.2 19.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z"
        fill="currentColor"
      />
    </svg>
  );

  const IconHeadset = (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.2 12a7.8 7.8 0 0 1 15.6 0v5.4a2.2 2.2 0 0 1-2.2 2.2h-1.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M4.2 12v4.1a1.9 1.9 0 0 0 1.9 1.9h1.3V12H4.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M16.6 12v6h1.3a1.9 1.9 0 0 0 1.9-1.9V12h-3.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );

  const IconShield = (props) => (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2.8 19.2 6v6.8c0 4.3-2.9 7.7-7.2 8.9-4.3-1.2-7.2-4.6-7.2-8.9V6L12 2.8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m9 12 2.1 2.1L15.9 9.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const RatingStars = ({ rating = 5 }) => (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${i < rating ? "text-red-500" : "text-white/20"}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 17.3 6.7 20l1-6-4.4-4.3 6.1-.9L12 3.2l2.7 5.6 6.1.9-4.4 4.3 1 6L12 17.3Z" />
        </svg>
      ))}
    </div>
  );

  const SectionTitle = ({ kicker, title, align = "left" }) => (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {kicker ? (
        <div className="text-xs font-semibold tracking-[0.28em] text-white/60">
          {kicker}
        </div>
      ) : null}
      <div className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
        {title}
      </div>
      <div
        className={
          align === "center"
            ? "mx-auto mt-5 h-px w-24 bg-red-500/70"
            : "mt-5 h-px w-24 bg-red-500/70"
        }
      />
    </div>
  );

  const ProductCard = ({ p }) => (
    <a
      href="#"
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] transition duration-300 hover:-translate-y-1 hover:border-white/20"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={p.img}
          alt={p.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
          Premium Drop
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="text-sm font-semibold text-white">{p.name}</div>
          <div className="text-sm font-bold text-white">{p.price}</div>
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-white/60">
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            Oversized Fit
          </div>
          <div className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
            Heavyweight
          </div>
        </div>
      </div>
    </a>
  );

  const CategoryCard = ({ c, size = "small" }) => (
    <a
      href="#shop"
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)] transition duration-300 hover:-translate-y-1 hover:border-white/20 ${
        size === "large" ? "min-h-[340px] sm:min-h-[440px]" : "min-h-[220px]"
      }`}
    >
      <img
        src={c.img}
        alt={c.title}
        className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
      <div className="relative flex h-full flex-col justify-end p-6 sm:p-7">
        <div className="text-[11px] font-semibold tracking-[0.32em] text-white/70">
          {c.subtitle}
        </div>
        <div
          className={`mt-2 font-black tracking-tight text-white ${
            size === "large"
              ? "text-3xl sm:text-4xl"
              : "text-2xl sm:text-3xl"
          }`}
        >
          {c.title}
        </div>
        <div className="mt-5">
          <span className="inline-flex items-center justify-center rounded-full bg-red-500 px-5 py-2 text-sm font-bold text-white transition duration-300 hover:bg-red-600">
            {c.cta}
          </span>
        </div>
      </div>
      <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-red-500/25 blur-2xl" />
    </a>
  );

  const ArrowButton = ({ direction = "left", onClick }) => (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white/80 backdrop-blur transition duration-300 hover:border-white/25 hover:bg-black/60"
      aria-label={direction === "left" ? "Previous" : "Next"}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={`h-5 w-5 ${direction === "left" ? "" : "rotate-180"}`}
        aria-hidden="true"
      >
        <path
          d="M14.8 5.5 8.8 12l6 6.5"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="h-2 bg-red-500" />
      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between py-2">
            <div className="text-xs font-semibold tracking-wide text-white/80">
              FREE SHIPPING on all orders over $50
            </div>
            <div className="hidden items-center gap-4 text-xs text-white/60 sm:flex">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                Limited Drops Weekly
              </span>
              <span className="h-4 w-px bg-white/10" />
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-white/10">
                <span className="h-2 w-2 rounded-full bg-red-500" />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-black tracking-[0.14em]">
                  REAL WORLD
                </div>
                <div className="-mt-0.5 text-xs font-semibold tracking-[0.34em] text-white/60">
                  ANIME ARC
                </div>
              </div>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((it) => (
                <a
                  key={it.label}
                  href={it.href}
                  className="text-sm font-semibold text-white/70 transition hover:text-white"
                >
                  {it.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition hover:border-white/20 hover:bg-white/[0.07]"
                aria-label="Search"
              >
                <IconSearch className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition hover:border-white/20 hover:bg-white/[0.07]"
                aria-label="Cart"
              >
                <IconCart className="h-5 w-5" />
              </button>
              <button
                type="button"
                className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/80 transition hover:border-white/20 hover:bg-white/[0.07] sm:inline-flex"
                aria-label="Account"
              >
                <IconUser className="h-5 w-5" />
              </button>
              <a
                href="#shop"
                className="ml-2 hidden items-center justify-center rounded-xl bg-red-500 px-4 py-2 text-sm font-bold text-white transition hover:bg-red-600 sm:inline-flex"
              >
                Shop Drop
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="relative">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Streetwear hoodie"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-8">
                <div
                  className={`inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-semibold tracking-[0.34em] text-white/70 backdrop-blur transition duration-700 ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  HOODIE COLLECTION
                </div>

                <h1
                  className={`mt-6 text-5xl font-black leading-[0.9] tracking-tight transition duration-700 sm:text-7xl lg:text-8xl ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                >
                  DEMON
                  <br />
                  SLAYER
                </h1>

                <p
                  className={`mt-6 max-w-xl text-sm leading-relaxed text-white/70 transition duration-700 ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                >
                  Premium heavyweight hoodies built for streetwear fits—bold
                  graphics, clean silhouettes, and drop-level quality.
                </p>

                <div
                  className={`mt-8 flex flex-col gap-3 transition duration-700 sm:flex-row sm:items-center ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                >
                  <a
                    href="#shop"
                    className="inline-flex items-center justify-center rounded-xl bg-red-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-600"
                  >
                    SHOP NOW
                  </a>
                  <a
                    href="#shop"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-bold text-white/90 backdrop-blur transition hover:border-white/25 hover:bg-black/40"
                  >
                    Explore Best Sellers
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div
                  className={`relative ml-auto max-w-sm rounded-2xl border border-white/10 bg-black/35 p-6 backdrop-blur transition duration-700 ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                >
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-red-500/30 blur-2xl" />
                  <div className="text-xs font-semibold tracking-[0.32em] text-white/60">
                    LIMITED TIME
                  </div>
                  <div className="mt-3 text-5xl font-black tracking-tight">
                    35%
                  </div>
                  <div className="mt-1 text-lg font-bold text-white/90">
                    DISCOUNT
                  </div>
                  <div className="mt-4 text-sm text-white/70">
                    Code applied at checkout for selected hoodies.
                  </div>
                  <div className="mt-6 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <div className="text-xs font-semibold tracking-[0.24em] text-white/60">
                      DROP ENDS IN
                    </div>
                    <div className="text-sm font-bold text-white">06:12:44</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-black">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-6 py-10 sm:grid-cols-3 sm:gap-8">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 ring-1 ring-red-500/20">
                  <IconTruck className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-sm font-bold">Free Delivery</div>
                  <div className="mt-1 text-xs text-white/60">
                    On orders over $50
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 ring-1 ring-red-500/20">
                  <IconHeadset className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-sm font-bold">Customer Care</div>
                  <div className="mt-1 text-xs text-white/60">
                    24/7 support team
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 ring-1 ring-red-500/20">
                  <IconShield className="h-6 w-6" />
                </span>
                <div>
                  <div className="text-sm font-bold">Warranty</div>
                  <div className="mt-1 text-xs text-white/60">
                    Quality guaranteed
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16" id="shop">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
              <SectionTitle kicker="ANIME DROPS" title="Shop By Anime" />
              <div className="max-w-xl text-sm text-white/65">
                Curated capsules inspired by iconic arcs—designed like real
                streetwear, built to last.
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <CategoryCard c={categories[0]} size="large" />
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
                <CategoryCard c={categories[1]} />
                <CategoryCard c={categories[2]} />
                <CategoryCard c={categories[3]} />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle kicker="TOP DROPS" title="Best Sellers" align="center" />

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {bestSellers.map((p) => (
                <ProductCard key={p.key} p={p} />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-red-500 px-7 py-3 text-sm font-bold text-white transition hover:bg-red-600"
              >
                VIEW ALL
              </a>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={promoImg}
              alt="Collection promo"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-semibold tracking-[0.34em] text-white/70 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  LIMITED COLLECTION
                </div>
                <div className="mt-6 text-5xl font-black leading-[0.92] tracking-tight sm:text-7xl">
                  AKATSUKI
                  <br />
                  COLLECTION
                </div>
                <div className="mt-6 max-w-xl text-sm leading-relaxed text-white/70">
                  Dark palettes, sharp silhouettes, and heavy cotton—built like a
                  premium capsule drop.
                </div>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#shop"
                    className="inline-flex items-center justify-center rounded-xl bg-red-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-red-600"
                  >
                    SHOP THE DROP
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-black/30 px-6 py-3 text-sm font-bold text-white/90 backdrop-blur transition hover:border-white/25 hover:bg-black/40"
                  >
                    View Lookbook
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative ml-auto max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-6 backdrop-blur">
                  <div className="absolute inset-y-0 right-0 w-16 bg-red-500" />
                  <div className="relative">
                    <div className="text-xs font-semibold tracking-[0.32em] text-white/70">
                      SAVE UP TO
                    </div>
                    <div className="mt-3 text-5xl font-black tracking-tight">
                      25%
                    </div>
                    <div className="mt-1 text-lg font-bold text-white/90">
                      DISCOUNT
                    </div>
                    <div className="mt-4 text-sm text-white/70">
                      Selected capsule pieces for a limited time.
                    </div>
                    <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-xs text-white/70">
                      Free returns • Secure checkout • Heavyweight fabrics
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionTitle kicker="CURATED" title="Hot Picks" align="center" />

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {hotPicks.map((p) => (
                <ProductCard key={p.key} p={p} />
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-red-500 px-7 py-3 text-sm font-bold text-white transition hover:bg-red-600"
              >
                VIEW ALL
              </a>
            </div>
          </div>
        </section>

        <section className="bg-black py-16" id="about">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]">
                  <img
                    src={aboutImg}
                    alt="About our brand"
                    className="h-[360px] w-full object-cover sm:h-[440px]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-5 py-4 backdrop-blur">
                    <div>
                      <div className="text-xs font-semibold tracking-[0.32em] text-white/60">
                        MADE FOR DAILY FITS
                      </div>
                      <div className="mt-1 text-sm font-bold">
                        Premium streetwear quality
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <span className="inline-flex items-center rounded-full bg-red-500/15 px-3 py-1 text-xs font-semibold text-red-400 ring-1 ring-red-500/20">
                        Heavyweight
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold tracking-[0.34em] text-white/70">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  REAL WORLD ANIME ARC
                </div>
                <h2 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl">
                  ABOUT US
                  <span className="text-white/40"> – </span>
                  REAL WORLD ANIME
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-white/70">
                  We craft anime-inspired streetwear with premium fabrics, bold
                  graphics, and fit-first silhouettes. Every drop is designed to
                  feel like a high-end capsule collection—clean, wearable, and
                  built to become your daily rotation.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-sm font-bold">Premium Materials</div>
                    <div className="mt-2 text-xs text-white/60">
                      Heavyweight cotton blends for structure and comfort.
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-sm font-bold">Drop-Level Design</div>
                    <div className="mt-2 text-xs text-white/60">
                      Bold graphics, minimal palettes, clean typography.
                    </div>
                  </div>
                </div>
                <div className="mt-9">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-xl bg-red-500 px-7 py-3 text-sm font-bold text-white transition hover:bg-red-600"
                  >
                    READ MORE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <SectionTitle
              kicker="TESTIMONIAL"
              title="What People Say"
              align="center"
            />

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7 shadow-[0_25px_70px_-40px_rgba(0,0,0,0.9)] sm:p-10">
              <div className="flex items-start justify-between gap-6">
                <div className="text-6xl font-black leading-none text-red-500/30">
                  “
                </div>
                <div className="hidden items-center gap-3 sm:flex">
                  <ArrowButton
                    direction="left"
                    onClick={() =>
                      setTestimonialIdx(
                        (testimonialIdx - 1 + testimonials.length) %
                          testimonials.length,
                      )
                    }
                  />
                  <ArrowButton
                    direction="right"
                    onClick={() =>
                      setTestimonialIdx(
                        (testimonialIdx + 1) % testimonials.length,
                      )
                    }
                  />
                </div>
              </div>

              <div className="mt-2 text-center text-base font-semibold leading-relaxed text-white/85 sm:text-lg">
                {currentTestimonial.quote}
              </div>

              <div className="mt-8 flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-red-500/20 blur-lg" />
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="relative h-14 w-14 rounded-full object-cover ring-2 ring-white/10"
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <div className="text-sm font-bold text-white">
                    {currentTestimonial.name}
                  </div>
                  <div className="mt-1 text-xs text-white/60">
                    {currentTestimonial.role}
                  </div>
                </div>
                <RatingStars rating={currentTestimonial.rating} />

                <div className="mt-2 flex items-center gap-2 sm:hidden">
                  <ArrowButton
                    direction="left"
                    onClick={() =>
                      setTestimonialIdx(
                        (testimonialIdx - 1 + testimonials.length) %
                          testimonials.length,
                      )
                    }
                  />
                  <ArrowButton
                    direction="right"
                    onClick={() =>
                      setTestimonialIdx(
                        (testimonialIdx + 1) % testimonials.length,
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-black" id="footer">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <a href="#" className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-white/10">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  </span>
                  <div className="leading-tight">
                    <div className="text-sm font-black tracking-[0.14em]">
                      REAL WORLD
                    </div>
                    <div className="-mt-0.5 text-xs font-semibold tracking-[0.34em] text-white/60">
                      ANIME ARC
                    </div>
                  </div>
                </a>
                <div className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
                  Premium anime-inspired streetwear. Bold graphics, clean fits,
                  and drop-level quality for everyday rotation.
                </div>
              </div>

              <div className="lg:col-span-3">
                <div className="text-xs font-semibold tracking-[0.32em] text-white/60">
                  LINKS
                </div>
                <div className="mt-4 grid gap-3 text-sm font-semibold">
                  <a href="#" className="text-white/70 transition hover:text-white">
                    Home
                  </a>
                  <a
                    href="#shop"
                    className="text-white/70 transition hover:text-white"
                  >
                    Shop
                  </a>
                  <a
                    href="#about"
                    className="text-white/70 transition hover:text-white"
                  >
                    About
                  </a>
                  <a
                    href="#footer"
                    className="text-white/70 transition hover:text-white"
                  >
                    Contact
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="text-xs font-semibold tracking-[0.32em] text-white/60">
                  NEWSLETTER
                </div>
                <div className="mt-4 text-sm text-white/65">
                  Get early access to drops, special offers, and restocks.
                </div>
                <form className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="h-12 w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-red-500/60 focus:ring-2 focus:ring-red-500/20"
                  />
                  <button
                    type="button"
                    className="h-12 rounded-xl bg-red-500 px-6 text-sm font-bold text-white transition hover:bg-red-600"
                  >
                    SUBSCRIBE
                  </button>
                </form>
                <div className="mt-6 flex items-center gap-3 text-xs text-white/45">
                  <span className="h-1.5 w-1.5 rounded-full bg-white/20" />
                  No spam. Unsubscribe anytime.
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
              <div>© {new Date().getFullYear()} Real World Anime Arc. All rights reserved.</div>
              <div className="flex items-center gap-4">
                <span>Privacy</span>
                <span className="h-3 w-px bg-white/10" />
                <span>Terms</span>
                <span className="h-3 w-px bg-white/10" />
                <span>Returns</span>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
