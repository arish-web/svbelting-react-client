export default function InfoSection() {
  return (
    <section className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div
          className="grid grid-cols-1 
                     sm:grid-cols-2 
                     md:grid-cols-3 
                     lg:grid-cols-5 
                     gap-8 sm:gap-10 
                     text-sm sm:text-base 
                     text-gray-600"
        >
          {/* CATEGORIES */}
          <div>
            <h4 className="mb-3 sm:mb-4 font-bold uppercase text-orange-600 tracking-wide">
              Categories
            </h4>
            <ul className="space-y-2 leading-relaxed">
              <li>Conveyor Belt</li>
              <li>Rubber Conveyor Belt</li>
              <li>Timing Belt</li>
              <li>Multi Poly V Belt</li>
              <li>Textape Belts</li>
            </ul>
          </div>

          {/* INFORMATION */}
          <div>
            <h4 className="mb-3 sm:mb-4 font-bold uppercase text-orange-600 tracking-wide">
              Information
            </h4>
            <ul className="space-y-2 leading-relaxed">
              <li>Cancellation</li>
              <li>Return Policy</li>
              <li>Refund Policy</li>
              <li>Terms & Conditions</li>
              <li>Shipping Policy</li>
              <li>Privacy Policy</li>
              <li>Customer Service</li>
              <li>Disclaimer Policy</li>
            </ul>
          </div>

          {/* MY ACCOUNT */}
          <div>
            <h4 className="mb-3 sm:mb-4 font-bold uppercase text-orange-600 tracking-wide">
              My Account
            </h4>
            <ul className="space-y-2 leading-relaxed">
              <li>Sign In</li>
              <li>Sign Up</li>
              <li>Enquiry</li>
              <li>Shopping Cart</li>
              <li>Help & FAQ</li>
              <li>Secure Shopping</li>
              <li>About Company</li>
            </ul>
          </div>

          {/* FOLLOW US */}
          <div>
            <h4 className="mb-3 sm:mb-4 font-bold uppercase text-orange-600 tracking-wide">
              Follow Us
            </h4>
            <ul className="space-y-2 leading-relaxed">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Linked In</li>
              <li>Google Plus</li>
              <li>Skype</li>
            </ul>
          </div>

          {/* INFRASTRUCTURE & MISSION */}
          <div className="space-y-5">
            <div>
              <h4 className="mb-2 sm:mb-3 font-bold uppercase text-orange-600 tracking-wide">
                Our Infrastructure
              </h4>
              <p className="leading-relaxed">
                Our infrastructure forms the backbone of our company.
                We have our own small processing unit situated near Chennai.
                We have a 4-meter hot press for joining the PU and PVC conveyor belts.
              </p>
            </div>

            <div>
              <h4 className="mb-2 font-bold uppercase text-orange-600 tracking-wide">
                Mission
              </h4>
              <p className="leading-relaxed">
                Our perspective right since the first day of our establishment in 1997,
                has always been: Total Customer Satisfaction.
              </p>
            </div>

            {/* <p className="text-xs text-gray-500 pt-2">
              Designed by VAR Infotech
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
}
