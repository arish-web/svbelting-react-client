import { customers } from "../../data/customers";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

export default function Customers() {
  return (
    <section className="py-12 md:py-16 bg-gray-100">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Our Customers
      </h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          freeMode={true}                 // ✅ KEY
          freeModeMomentum={false}        // ✅ KEY
          speed={4000}                    // smooth speed
          autoplay={{
            delay: 0,                     // ✅ CONTINUOUS
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {customers.map((c, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white p-6 rounded-xl shadow-sm
                              flex flex-col items-center justify-center
                              h-36">
                <img
                  src={c.logo}
                  alt={c.name}
                  className="h-16 md:h-20 object-contain"
                />
                <p className="mt-3 text-sm font-medium text-center text-gray-700">
                  {c.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
