import { useEffect, useState } from "react";

const banners = [
  "https://www.svbelting.com/data1/images/banner1.jpg",
  "https://www.svbelting.com/data1/images/banner2.jpg",
  "https://www.svbelting.com/data1/images/banner3.jpg",
  "https://www.svbelting.com/data1/images/banner4.jpg",
  "https://www.svbelting.com/data1/images/banner5.jpg",
  "https://www.svbelting.com/data1/images/banner6.jpg",
  "https://www.svbelting.com/data1/images/banner7.jpg",
  "https://www.svbelting.com/data1/images/banner8.jpg",
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-full max-w-xl mx-auto 
                    aspect-[16/9] sm:aspect-[2/1]
                    overflow-hidden rounded-xl shadow-2xl"
    >
      {banners.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`banner-${index}`}
          className={`absolute inset-0 w-full h-full object-cover 
            transition-opacity duration-1000 ease-in-out
            ${index === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      {/* Dots */}
      <div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 
                      flex gap-2 bg-black/30 px-3 py-1 rounded-full"
      >
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition
              ${i === current ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
