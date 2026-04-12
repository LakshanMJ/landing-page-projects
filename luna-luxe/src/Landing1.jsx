import { useState } from 'react';

const features = [
  {
    title: "Free Shipping",
    subtitle: "On all beauty orders",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 7h12v10H3z" />
        <path d="M15 10h4l2 2v5h-6z" />
        <circle cx="7" cy="18" r="1.5" />
        <circle cx="18" cy="18" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Secure Payment",
    subtitle: "Trusted checkout",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18" />
        <path d="M8 14h3" />
      </svg>
    ),
  },
  {
    title: "Premium Quality",
    subtitle: "Luxury-grade formulas",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 3 4 7v5c0 5 3.5 8 8 9 4.5-1 8-4 8-9V7z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    subtitle: "Beauty experts online",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 12a8 8 0 0 1 16 0" />
        <rect x="3" y="12" width="3" height="6" rx="1" />
        <rect x="18" y="12" width="3" height="6" rx="1" />
        <path d="M8 19h8" />
      </svg>
    ),
  },
];

const products = [
  { name: "Velvet Glow Foundation", price: "$68.00", image: "Velvet Glow Foundation.jpg" },
  { name: "Radiance Vitamin C Serum", price: "$74.00", image: "Radiance Vitamin C Serum.jpg" },
  { name: "Silk Matte Lipstick", price: "$42.00", image: "Silk Matte Lipstick.jpg" },
  { name: "Hydra Calm Moisturizer", price: "$58.00", image: "Hydra Calm Moisturizer.JPG" },
  { name: "Rose Clay Cleanser", price: "$39.00", image: "Rose Clay Cleanser.JPG" },
  { name: "Luminous Blush Palette", price: "$52.00", image: "Luminous Blush Palette.jpg" },
  { name: "Botanical Face Oil", price: "$64.00", image: "Botanical Face Oil.JPG" },
  { name: "Dew Mist Setting Spray", price: "$46.00", image: "Dew Mist Setting Spray.JPG" },
];



const blogs = [
  { title: "5 Nighttime Skincare Rituals For Glass Skin", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03" },
  { title: "How To Build A Minimal Luxury Makeup Kit", image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" },
  { title: "Top 2026 Makeup Trends For A Soft Glam Look", image: "https://images.unsplash.com/photo-1498843053639-170ff2122f35" },
];

export default function Landing1() {
  const [play, setPlay] = useState(false);

  return (
    <div className="bg-[#f5f1ec] text-[#3f342d]">
      <div className="bg-[#efe8df] px-6 py-3 text-xs sm:text-sm">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>Call: +1 (800) 555-0199</p>
          <p>Email: care@lunaluxe.com</p>
          <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
        </div>
      </div>

      <header className="bg-[#f5f1ec]/95 px-6 py-5 shadow-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-semibold tracking-wide text-[#a47148]">Luna Luxe</h1>
          <nav className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-[#a47148] transition duration-300">Home</a>
            <a href="#about" className="hover:text-[#a47148] transition duration-300">About</a>
            <a href="#shop" className="hover:text-[#a47148] transition duration-300">Shop</a>
            <a href="#products" className="hover:text-[#a47148] transition duration-300">Products</a>
            <a href="#pages" className="hover:text-[#a47148] transition duration-300">Pages</a>
            <a href="#contact" className="hover:text-[#a47148] transition duration-300">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="rounded-full border border-[#d9c9b8] p-2 hover:scale-105 transition duration-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 7h15l-1.5 9h-12z" />
                <path d="M6 7 5 4H2" />
                <circle cx="9" cy="20" r="1" />
                <circle cx="18" cy="20" r="1" />
              </svg>
            </button>
            <button className="rounded-lg bg-[#a47148] px-5 py-2 text-sm font-medium text-white hover:scale-105 transition duration-300">
              Shop Now
            </button>
          </div>
        </div>
      </header>

      {/* <section id="home" className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-lg bg-[#f3ece4] p-7 shadow-md md:grid-cols-2 md:p-10">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#a47148]">Luxury Beauty Essentials</p>
            <h2 className="mb-5 text-4xl font-semibold leading-tight md:text-[52px]">
              Enhance Your Natural Beauty With The Best Cosmetics
            </h2>
            <p className="mb-8 max-w-xl text-[15px] leading-7 text-[#6a5c50]">
              Discover high-performance skincare and makeup crafted with skin-loving botanicals for a radiant, confident glow.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-lg border border-[#a47148] px-6 py-3 text-sm font-medium text-[#a47148] hover:scale-105 transition duration-300">
                Learn More
              </button>
              <button className="rounded-lg bg-[#a47148] px-6 py-3 text-sm font-medium text-white hover:scale-105 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg ">
            <img
              src="public/Botanical Face Oil.jpg"
              alt="Luxury cosmetic serum"
              className="h-[420px] w-full rounded-lg object-cover shadow-md md:h-[500px]"
            />
            <img
              src="https://source.unsplash.com/300x300/?flower,petals,pink&sig=2"
              alt="Floral element"
              className="absolute -left-8 -top-8 hidden h-28 w-28 rounded-full object-cover md:block"
            />
          </div>
        </div>
      </section> */}
      <section id="home" className="px-6 py-16 md:py-20">
        {/* 1. Removed 'p-7/p-10' from the grid so the image can touch the edges */}
        <div className="mx-auto grid max-w-7xl items-center  rounded-lg bg-[#f3ece4] shadow-md md:grid-cols-2">

          {/* 2. Added padding back specifically to the text side */}
          <div className="p-7 md:p-16">
            <p className="mb-3 text-xs uppercase tracking-[0.28em] text-[#a47148]">Luxury Beauty Essentials</p>
            <h2 className="mb-5 text-4xl font-semibold leading-tight md:text-[52px]">
              Enhance Your Natural Beauty With The Best Cosmetics
            </h2>
            <p className="mb-8 max-w-xl text-[15px] leading-7 text-[#6a5c50]">
              Discover high-performance skincare and makeup crafted with skin-loving botanicals for a radiant, confident glow.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-lg border border-[#a47148] px-6 py-3 text-sm font-medium text-[#a47148] transition duration-300 hover:scale-105">
                Learn More
              </button>
              <button className="rounded-lg bg-[#a47148] px-6 py-3 text-sm font-medium text-white transition duration-300 hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>

          {/* 3. Set h-full on the container and the img */}
          <div className="relative  min-h-[510px] w-full">
            <img
              src="https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1200&auto=format&fit=crop"
              alt="Luxury cosmetic serum"
              /* 4. h-full and object-cover are key here */
              className="absolute inset-0 h-full w-full object-cover"
            />
            {/* Decorative floral image remains absolute */}
            <img
              src="natural.png"
              alt="Floral element"
              className="absolute -left-8 -top-8 hidden h-28 w-28 rounded-full object-cover md:block"
            />

          </div>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-4 rounded-lg bg-[#fbf8f5] p-4 shadow-md sm:grid-cols-2 md:p-6 lg:grid-cols-4">
          {features.map((item) => (
            <div key={item.title} className="rounded-lg border border-[#eee4da] bg-white p-4 text-center">
              <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#f3e7db] text-[#a47148]">
                {item.icon}
              </span>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm text-[#7b6d60]">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h3 className="text-3xl font-semibold">Products For Everyone</h3>
            <p className="mx-auto mt-3 max-w-2xl text-[#6a5c50]">
              Curated beauty collections designed for every skin type, tone, and daily routine.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-lg shadow-md">

              <img
                src="skincareproducts.JPG"
                alt="Skincare products"
                className="h-80 w-full object-cover object-top transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6 text-white">
                <h4 className="mt-40 text-2xl font-semibold">Skincare Products</h4>
                <button className="mt-3 rounded-lg bg-[#a47148] px-4 py-2 text-sm hover:scale-105 transition duration-300">
                  Explore
                </button>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md">
              <img
                src="makeup-collection.jpg"
                alt="Makeup collection"
                className="h-80 w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/10 p-6 text-white">
                <h4 className="mt-40 text-2xl font-semibold">Makeup Collection</h4>
                <button className="mt-3 rounded-lg bg-[#a47148] px-4 py-2 text-sm hover:scale-105 transition duration-300">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2">
          <img
            src="woman-applying-cream-face.jpg"
            alt="Beauty model applying skincare"
            className="h-[430px] w-full rounded-lg object-cover shadow-md"
          />
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.22em] text-[#a47148]">About Luna Luxe</p>
            <h3 className="mb-4 text-3xl font-semibold">Using Natural Ingredients That Care For Your Skin</h3>
            <p className="mb-6 text-[#6a5c50]">
              We blend botanical science with elegant textures to create formulas that nourish skin while enhancing natural beauty.
            </p>
            <ul className="mb-8 space-y-2 text-[#4d4037]">
              <li>• Organic ingredients</li>
              <li>• Skin-friendly</li>
              <li>• Dermatologically tested</li>
              <li>• Long-lasting results</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-lg border border-[#a47148] px-5 py-2 text-sm font-medium text-[#a47148] hover:scale-105 transition duration-300">
                About Us
              </button>
              <button className="rounded-lg bg-[#a47148] px-5 py-2 text-sm font-medium text-white hover:scale-105 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg shadow-md">
          <div className="relative">

            <video
              className="h-[360px] w-full object-cover"
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
            <video
              className="h-[360px] w-full object-cover"
              poster="your-thumbnail.jpg"
            >
              <source src="https://www.youtube.com/watch?v=A3ZANxbbw-E" type="video/mp4" />
            </video>

            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/35 text-white">
              <h3 className="text-center text-3xl font-semibold md:text-4xl">
                Feel Confident In Your Own Skin
              </h3>

              <button className="mt-5 rounded-full bg-white/90 p-4 text-[#a47148] hover:scale-105 transition duration-300">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </section> */}

      {/* <h3 className="mb-4 text-3xl font-semibold">Finally, A Game-Changer</h3>
       */}


      <section className="px-6 pb-20">
        <h3 className="mb-6 text-center text-3xl font-semibold ">
          Finally, A Game-Changer !
        </h3>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg shadow-md">
          <div className="relative h-[400px] w-full">

            {play ? (
              <div
                className="relative h-full w-full cursor-pointer"
                onClick={() => setPlay(true)}
              >
                {/* THUMBNAIL */}
                <img
                  src="/thumbnail.jpg" // your thumbnail
                  alt="Video thumbnail"
                  className="h-full w-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#a47148] shadow-lg hover:scale-110 transition">
                    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ) : (
              <video
                className="h-full w-full object-cover"
                src="/promo_vid.mp4" // your video file
                controls={false}
                autoPlay
                loop
                muted
              />
            )}

          </div>
        </div>
      </section>

      <section className="px-6 pb-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-[#efe4d8] p-8 shadow-md">
            <p className="text-sm uppercase tracking-[0.2em] text-[#a47148]">Luna Luxe</p>
            <h3 className="mt-3 text-3xl font-semibold">Beauty Variants</h3>
            <p className="mt-4 text-[#6a5c50]">
              From refreshing gels to rich creams, discover textures and ingredient blends tailored to your beauty ritual.
            </p>
            <button className="mt-6 rounded-lg bg-[#a47148] px-5 py-2 text-sm text-white hover:scale-105 transition duration-300">
              Shop Collection
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {/* <img
              src="fruit.JPG"
              alt="Natural fruit ingredients"
              className="h-36 w-full rounded-lg object-cover shadow-md"
            /> */}
            {/* <img
              src="cream-product.jpg"
              alt="Cream product"
              className="h-36 w-full rounded-lg object-cover shadow-md"
            /> */}
            {/* <img
              src="Makeup-pigments2.jpg"
              alt="Makeup pigments"
              className="h-36 w-full rounded-lg object-cover shadow-md"
            /> */}
            {/* <img
              src="Beauty oil.jpg"
              alt="Beauty oil"
              className="h-36 w-full rounded-lg object-cover shadow-md"
            /> */}
            {/* <img
              src="Cosmetic textures.jpg"
              alt="Cosmetic textures"
              className="h-36 w-full rounded-lg object-cover shadow-md"
            /> */}
            <div className="relative h-36 w-full overflow-hidden rounded-lg shadow-md group cursor-pointer">
              <img
                src="Skincare texture.jpg"
                alt="Skincare texture"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>

              {/* TEXT */}
              <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300 font-medium underline underline-offset-4 decoration-1">
                Skincare Texture
              </p>
            </div>
            <div className="relative h-36 w-full overflow-hidden rounded-lg shadow-md group cursor-pointer">
              <img
                src="fruit.JPG"
                alt="Natural fruit ingredients"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>

              {/* TEXT */}
              <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300 font-medium underline underline-offset-4 decoration-1">
                Natural fruit ingredients
              </p>
            </div>
            <div className="relative h-36 w-full overflow-hidden rounded-lg shadow-md group cursor-pointer">
              <img
                src="cream-product.jpg"
                alt="Cream product"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>

              {/* TEXT */}
              <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300 font-medium underline underline-offset-4 decoration-1">
                Cream Product
              </p>
            </div>
            <div className="relative h-36 w-full overflow-hidden rounded-lg shadow-md group cursor-pointer">
              <img
                src="Makeup-pigments2.jpg"
                alt="Makeup pigments"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>

              {/* TEXT */}
              <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300 font-medium underline underline-offset-4 decoration-1">
                Makeup pigments
              </p>
            </div>

            <div className="relative h-36 w-full overflow-hidden rounded-lg shadow-md group cursor-pointer">
              <img
                src="Beauty oil.jpg"
                alt="Beauty Oil"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>

              {/* TEXT */}
              <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300 font-medium underline underline-offset-4 decoration-1">
                Beauty Oil
              </p>
            </div>

            <div className="relative h-36 w-full overflow-hidden rounded-lg shadow-md group cursor-pointer">
              <img
                src="Cosmetic textures.jpg"
                alt="Cosmetic Textures"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300"></div>

              {/* TEXT */}
              <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition duration-300 font-medium underline underline-offset-4 decoration-1">
                Cosmetic Textures
              </p>
            </div>

          </div>
        </div>
      </section>

      <section id="products" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-semibold">Our Products</h3>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <button className="rounded-lg bg-[#a47148] px-5 py-2 text-sm text-white hover:scale-105 transition duration-300">Popular</button>
              <button className="rounded-lg border border-[#d4c1ae] px-5 py-2 text-sm hover:scale-105 transition duration-300">New Arrivals</button>
              <button className="rounded-lg border border-[#d4c1ae] px-5 py-2 text-sm hover:scale-105 transition duration-300">Best Sellers</button>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((item) => (
              <div key={item.name} className="rounded-lg bg-white p-4 shadow-md">
                {/* <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full rounded-lg object-cover scale-95 hover:scale-100 transition duration-300"
                /> */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-60 w-full rounded-lg object-cover scale-95 hover:scale-100 transition duration-300 cursor-pointer"
                />
                <h4 className="mt-3 text-sm font-semibold">{item.name}</h4>
                <p className="mt-1 text-[#a47148]">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <div className="relative rounded-lg bg-[#f0e2d4] p-8 shadow-md">
            <p className="text-sm uppercase tracking-[0.2em] text-[#a47148]">Limited Offer</p>
            <h3 className="mt-3 text-3xl font-semibold">50% Off Skincare Sale</h3>
            <button className="mt-5 rounded-lg bg-[#a47148] px-5 py-2 text-sm text-white hover:scale-105 transition duration-300">Shop Sale</button>
            <img
              src="50off.png"
              alt="Skincare sale item"
              className="absolute -bottom-6 -right-2 hidden h-40 w-30  object-cover md:block"
            />
          </div>
          <div className="relative rounded-lg bg-[#ead8c5] p-8 shadow-md">
            <p className="text-sm uppercase tracking-[0.2em] text-[#a47148]">Special This Month</p>
            <h3 className="mt-3 text-3xl font-semibold">Free Shipping This Month</h3>
            <button className="mt-5 rounded-lg bg-[#a47148] px-5 py-2 text-sm text-white hover:scale-105 transition duration-300">Order Now</button>
            <img
              src="free-ship.png"
              alt="Shipping promo beauty products"
              className="absolute -bottom-6 -right-8 hidden ml-10 h-50 w-60 object-cover md:block"
            />
          </div>
        </div>
      </section>

      <section className="px-80 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg shadow-md">
          <div className="relative">
            <img
              src="GlowNaturally.jpg"
              alt="Woman using cosmetics"
              className="h-[360px] w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center bg-black/35 px-8 text-white">
              <h3 className="max-w-xl text-4xl font-semibold">Glow Naturally. Feel Beautiful.</h3>
              <button className="mt-6 w-fit rounded-lg bg-[#a47148] px-6 py-3 text-sm font-medium text-white hover:scale-105 transition duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="pages" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-semibold">News & Article</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {blogs.map((post) => (
              <article key={post.title} className="overflow-hidden rounded-lg bg-white shadow-md">
                <img src={post.image} alt={post.title} className="h-52 w-full object-cover" />
                <div className="p-5">
                  <h4 className="text-lg font-semibold">{post.title}</h4>
                  <button className="mt-4 rounded-lg border border-[#a47148] px-4 py-2 text-sm text-[#a47148] hover:scale-105 transition duration-300">
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-lg bg-[#efe4d8] p-8 text-center shadow-md">
          <h3 className="text-3xl font-semibold">Join Our Beauty Newsletter</h3>
          <p className="mx-auto mt-3 max-w-2xl text-[#6a5c50]">
            Be the first to discover exclusive drops, skincare secrets, and personalized beauty tips.
          </p>
          <div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-[#d9c7b5] bg-white px-4 py-3 outline-none placeholder:text-[#8d7d6f] focus:border-[#a47148]"
            />
            <button className="rounded-lg bg-[#a47148] px-6 py-3 text-sm font-medium text-white hover:scale-105 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#9a6745] px-6 py-14 text-[#f8f3ee]">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div>
            <h4 className="text-2xl font-semibold">Luna Luxe</h4>
            <p className="mt-3 text-sm text-[#f3e5d9]">
              Premium cosmetics crafted to elevate your natural beauty with timeless elegance.
            </p>
          </div>
          <div>
            <h5 className="mb-3 font-semibold">Links</h5>
            <ul className="space-y-2 text-sm text-[#f3e5d9]">
              <li>About</li>
              <li>Shop</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-3 font-semibold">Office</h5>
            <ul className="space-y-2 text-sm text-[#f3e5d9]">
              <li>89 Rose Avenue</li>
              <li>Los Angeles, CA 90017</li>
              <li>+1 (800) 555-0199</li>
            </ul>
          </div>
          <div>
            <h5 className="mb-3 font-semibold">Social</h5>
            <div className="flex gap-3">

              {/* FACEBOOK */}
              <a
                href="/"
                className="rounded-full border border-[#dcbca4] p-2 text-white bg-[#a47148] hover:bg-[#8a5d3b] hover:scale-105 transition duration-300"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.4v-2.9h2.4V9.4c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.3h-1.2c-1.2 0-1.6.8-1.6 1.5v1.8h2.7l-.4 2.9h-2.3v7A10 10 0 0022 12z" />
                </svg>
              </a>

              {/* INSTAGRAM */}
              <a
                href="/"
                className="rounded-full border border-[#dcbca4] p-2 text-white bg-[#a47148] hover:bg-[#8a5d3b] hover:scale-105 transition duration-300"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.8 2 3 3.8 3 6v12c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.8a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM12 9a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </a>

              {/* YOUTUBE */}
              <a
                href="/"
                className="rounded-full border border-[#dcbca4] p-2 text-white bg-[#a47148] hover:bg-[#8a5d3b] hover:scale-105 transition duration-300"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C15.8 5 12 5 12 5h0s-3.8 0-6.9.1c-.4 0-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.7 2 11.3v1.4C2 14.3 2.2 16 2.2 16s.2 1.4.8 2c.8.8 1.9.8 2.4.9 1.7.2 6.6.2 6.6.2s3.8 0 6.9-.1c.4 0 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.2-1.7.2-3.3v-1.4C22 9.7 21.8 8 21.8 8zM10 14.5v-5l5 2.5-5 2.5z" />
                </svg>
              </a>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
