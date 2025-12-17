import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    "Home",
    "Profile",
    "Categories",
    "Online Store",
    "Applications",
    "Brands",
    "Testimonials",
    "Contact",
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* TOP BAR */}
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <img
            src="https://www.svbelting.com/img/logo.png"
            alt="SV Belting"
            className="h-9"
          />

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-white font-semibold">
            {menu.map((item) => (
              <a key={item} href="#" className="hover:text-red-500">
                {item}
              </a>
            ))}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white text-3xl"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU (NOT FULLSCREEN) */}
      {open && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <nav className="flex flex-col px-6 py-6 space-y-4 text-sm font-medium text-gray-800">
            {menu.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setOpen(false)}
                className="hover:text-red-600"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
