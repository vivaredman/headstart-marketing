import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          <div className="flex items-center gap-3">
            <Image
  src="/headstart-logo.png"
  alt="HeadStart Marketing"
  width={240}
  height={80}
  className="w-auto h-14 md:h-12"
  priority
/>
          </div>

          <div className="flex gap-6 text-sm font-bold text-slate-900">
            <a href="#services" className="hover:text-amber-600">
              Services
            </a>

            <a href="#results" className="hover:text-amber-600">
              Results
            </a>

            <a href="#about" className="hover:text-amber-600">
              About
            </a>

            <a href="#contact" className="hover:text-amber-600">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800"
          >
            Free Consultation
          </a>
        </div>
      </div>
    </nav>
  );
}