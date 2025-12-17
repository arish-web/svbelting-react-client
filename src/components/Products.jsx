import { products } from "../data/products";

export default function Products() {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Products
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {products.map((p, i) => (
          <div key={i} className="bg-white rounded shadow p-4 text-center">
            <img
              src={p.image}
              alt={p.title}
              className="h-40 w-full object-contain"
            />
            <h3 className="text-xl font-semibold mt-4">{p.title}</h3>
            <p className="text-gray-600 mt-2">{p.desc}</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
