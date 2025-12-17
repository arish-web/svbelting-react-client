export default function Header() {
  return (
    <div className=" hidden sm:block bg-blue-800 text-white text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-8 py-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          {/* ADDRESS */}
          <div className="text-center sm:text-left">
            #1-A, Pillayar Koil Street, MTH Road, Mannurpet, Chennai – 600050
          </div>

          {/* RIGHT INFO */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-4">
            <span className="whitespace-nowrap">📞 +91 94440 14653</span>

            <span className="hidden sm:inline">|</span>

            <span>Welcome Guest</span>

            <span className="hidden sm:inline">|</span>

            <span className="underline cursor-pointer hover:text-orange-400">
              Login
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
