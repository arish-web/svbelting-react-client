export default function PromoSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-100 to-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {/* CONSULTATION SUPPORT */}
          <div className="lg:col-span-3 bg-white shadow-xl rounded-lg overflow-hidden relative">
            <div className="absolute left-0 top-0 h-full w-1.5 sm:w-2 bg-red-600"></div>

            <div className="p-5 sm:p-8 flex flex-col md:flex-row gap-6 sm:gap-8">
              <img
                src="https://www.svbelting.com/img/consultation-support.png"
                alt="Consultation Support"
                className="w-full md:w-56 h-44 sm:h-56 object-cover border rounded"
              />

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-wide text-gray-900">
                    Consultation Support
                  </h3>

                  <p className="mt-3 sm:mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                    Our Chief Technicians bring over a decade of hands-on
                    experience in industrial belting solutions. We help you
                    solve complex operational and technical challenges with
                    precision-driven support.
                  </p>
                </div>

                <button className="mt-5 sm:mt-6 w-full sm:w-fit bg-red-600 text-white px-6 sm:px-7 py-3 text-sm font-bold uppercase hover:bg-white hover:text-black hover:border-red transition">
                  Contact Experts
                </button>
              </div>
            </div>
          </div>

          {/* TIMER BELT */}
          <div className="lg:col-span-2 bg-white shadow-xl rounded-lg p-5 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-extrabold uppercase text-gray-900 border-b pb-2 sm:pb-3">
                Timer Belt
              </h3>

              <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                Engineered for minimal slippage and superior torque
                transmission. Ideal for CNC machines, robotics and precision
                automation.
              </p>
            </div>

            <img
              src="https://www.svbelting.com/img/timing.png"
              alt="Timer Belt"
              className="w-full max-w-xs mx-auto mt-5 sm:mt-6"
            />
          </div>
        </div>

        {/* ================= V BELTS CTA STRIP ================= */}
        <div className="mt-10 sm:mt-14 relative overflow-hidden rounded-xl bg-red-700 shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,white,transparent)]"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 py-8 sm:py-10 gap-6 sm:gap-8">
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-8 text-center sm:text-left">
              <img
                src="https://www.svbelting.com/img/vbelt.png"
                alt="V Belts"
                className="w-28 sm:w-40 drop-shadow-lg"
              />

              <div className="text-white">
                <h3 className="text-3xl sm:text-5xl font-extrabold uppercase tracking-widest">
                  V Belts
                </h3>
                <p className="text-base sm:text-xl uppercase font-semibold opacity-90">
                  Online Shop
                </p>
              </div>
            </div>

            <button className="w-full sm:w-auto bg-white text-black px-8 sm:px-10 py-3 sm:py-4 text-sm font-bold uppercase tracking-wider hover:bg-black hover:text-white transition">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
