import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import PromoSection from "../components/PromoSection";
import Applications from "../components/Applications";
import Customers from "../components/Customers/Customers";
import Navbar from "../components/Navbar";
import InfoSection from "../components/InfoSection";
import IndustriesWeServe from "../components/IndustriesWeServe";

export default function Home() {
  return ( 
    <>
      <Navbar />
      <Hero />
      <Customers />


      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* LEFT: PRODUCTS + PROMO */}
          <div className="lg:col-span-9">
            <FeaturedProducts />
            <IndustriesWeServe />
            <PromoSection />
          </div>
          

          {/* RIGHT: APPLICATIONS */}
          <div className="lg:col-span-3">
            <Applications />
          </div>
        </div>
       <InfoSection />
      </section>

    </>
  );
}
