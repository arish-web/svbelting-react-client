import {
  Factory,
  Truck,
  Package,
  Cog,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const industries = [
  {
    title: "Automotive Manufacturing",
    desc: "Timing and conveyor belts for high-precision assembly lines.",
    icon: Factory,
  },
  {
    title: "FMCG & Packaging",
    desc: "High-speed modular belts for packaging and material handling.",
    icon: Package,
  },
  {
    title: "Airport & Logistics",
    desc: "Heavy-duty conveyor solutions for baggage and cargo systems.",
    icon: Truck,
  },
  {
    title: "Mining & Cement",
    desc: "Abrasion-resistant belts built for extreme operating conditions.",
    icon: ShieldCheck,
  },
  {
    title: "Pharma & Food Processing",
    desc: "Hygienic and FDA-compliant conveyor belt solutions.",
    icon: Cog,
  },
  {
    title: "CNC & Automation",
    desc: "Precision timing belts for robotics and automated machinery.",
    icon: Cpu,
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Industries We Serve
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Engineered belt solutions for demanding industrial environments.
          </p>
        </div>

        {/* Industry Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                  <Icon className="text-red-600" size={24} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
