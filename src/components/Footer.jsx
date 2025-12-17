export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-10">
        <div>
          <h3 className="font-bold mb-4">About SV Belting</h3>
          <p className="text-sm">
            Since 1997, SV Belting has been supplying high-quality industrial
            conveyor and transmission belts across India.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Quick Contact</h3>
          <p>📞 +91 94440 14653</p>
          <p>✉ rajeshwarisethu@svbelting.com</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Mission</h3>
          <p className="text-sm">
            Total Customer Satisfaction through quality and service.
          </p>
        </div>
      </div>

      <p className="text-center text-xs mt-8">
        © SV Belting. All Rights Reserved.
      </p>
    </footer>
  );
}
