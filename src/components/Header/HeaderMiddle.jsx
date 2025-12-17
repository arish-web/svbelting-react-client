import {
  FaLock,
  FaPhoneAlt,
  FaTruck,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";

export default function HeaderMiddle() {
  return (
    <div className="bg-gray-100 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-12 gap-4 items-center">
        
        {/* LOGO */}
        <div className="col-span-3">
          <img
            src="/images/logo.png"
            alt="SV Belting"
            className="w-full max-w-xs"
          />
        </div>

        {/* SEARCH */}
        <div className="col-span-4">
          <div className="flex">
            <input
              type="text"
              placeholder="Search Here..."
              className="w-full px-4 py-2 border border-orange-300 focus:outline-none"
            />
            <button className="bg-orange-600 text-white px-5 font-semibold">
              SEARCH
            </button>
          </div>
        </div>

        {/* INFO */}
        <div className="col-span-3 space-y-2 text-sm">
          <div className="flex items-start gap-2">
            <FaLock className="text-orange-600 mt-1" />
            <div>
              <p className="font-semibold text-orange-600">
                100% Safe and Secure
              </p>
              <p className="text-gray-600">
                Billing & Ordering Information
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaPhoneAlt className="text-orange-600 mt-1" />
            <div>
              <p className="font-semibold text-orange-600">
                Call Us : +91 94440 14653
              </p>
              <p className="text-gray-600">
                Timing : 9.00 am to 8.00 pm
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <FaTruck className="text-orange-600 mt-1" />
            <div>
              <p className="font-semibold text-orange-600">
                Free Shipping on all items!
              </p>
              <p className="text-gray-600">Safe and Secure</p>
            </div>
          </div>
        </div>

        {/* ICONS */}
        <div className="col-span-2 flex flex-col items-end gap-3">
          <div className="flex gap-2">
            <FaFacebookF className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaYoutube className="social-icon" />
            <FaGooglePlusG className="social-icon" />
            <FaLinkedinIn className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
