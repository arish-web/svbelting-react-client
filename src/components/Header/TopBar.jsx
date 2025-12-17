export default function TopBar() {
  return (
    <div className="bg-gray-800 text-gray-200 text-xs">
      <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-2">
        
        {/* LEFT TEXT */}
        <p>
          #1-A, Pillayar Koil Street, MTH Road, Mannurpet, Chennai - 600 050.
        </p>

        {/* RIGHT LINKS */}
        <div className="flex gap-4">
          <span>
            Contact Us : <span className="font-semibold">+91 94440 14653</span>
          </span>

          <span>Welcome guest</span>

          <span className="cursor-pointer hover:underline">
            Login / Register
          </span>
        </div>

      </div>
    </div>
  );
}
