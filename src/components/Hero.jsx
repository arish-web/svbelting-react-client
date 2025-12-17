import HeroCarousel from "./HeroCarousel";
export default function Hero() {
  return (
    <section className="relative min-h-screen text-white">
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=2400&q=80')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 sm:pt-36 md:pt-40 pb-20 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold uppercase leading-tight">
            We Engineer <br />
            The Future of <br />
            <span className="text-red-800">Industrial Performance</span>
          </h1>

          <p className="mt-6 text-gray-100 max-w-xl">
            High-performance conveyor and transmission belts for manufacturing,
            automation and heavy-duty industries.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-6 py-3 uppercase tracking-wider font-semibold hover:bg-red-700 hover:text-white transition    min-w-[140px] sm:min-w-0">
              View Products
            </button>
            <button className="border border-white px-6 py-3 uppercase tracking-wider hover:bg-white hover:text-black transition  min-w-[149px] sm:min-w-0">
              Get Enquiry
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="order-second md:order-last md:flex md:justify-center md:items-center">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
