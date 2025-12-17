import applications from "../data/applications";

const Applications = () => {
  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
          Applications
        </h2>

        <div className="grid gap-6 sm:gap-8">
          {applications.map((app) => (
            <div
              key={app.id}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6
                         border-b pb-6"
            >
              {/* IMAGE */}
              <img
                src={app.image}
                alt={app.title}
                className="w-full sm:w-24 h-40 sm:h-24
                           object-cover border rounded"
              />

              {/* CONTENT */}
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-orange-600">
                  {app.title}
                </h3>

                <p className="text-sm sm:text-base text-gray-600 mt-1">
                  {app.description}
                </p>

                <a
                  href={app.link}
                  className="inline-block mt-2 text-sm font-semibold
                             text-black hover:text-orange-600"
                >
                  More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
