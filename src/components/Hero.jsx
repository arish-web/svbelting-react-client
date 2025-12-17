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
      {/* <div className="absolute inset-0 bg-black/70" /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 sm:pt-36 md:pt-40 pb-20 grid md:grid-cols-2 gap-12 items-center">
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
            <button className="bg-white text-black px-6 py-3 uppercase tracking-wider font-semibold hover:bg-red-700 hover:text-white transition">
              View Products
            </button>
            <button className="border border-white px-6 py-3 uppercase tracking-wider hover:bg-white hover:text-black transition">
              Get Enquiry
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE (DESKTOP ONLY) */}
        <div className="hidden md:block">
          <img
            src="https://www.svbelting.com/data1/images/banner6.jpg"
            alt="Industrial"
            className="w-[520px] h-[220px] rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
