import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-24 md:h-20">
          <a href="#" className="flex items-center">
            <Image
              src="/headstart-logo.png"
              alt="HeadStart Marketing"
              width={320}
              height={110}
              className="h-20 w-auto md:h-12"
              priority
            />
          </a>

          <div className="hidden md:flex gap-6 text-sm font-bold text-slate-900">
            <a href="#services" className="hover:text-amber-600">Services</a>
            <a href="#results" className="hover:text-amber-600">Results</a>
            <a href="#about" className="hover:text-amber-600">About</a>
            <a href="#contact" className="hover:text-amber-600">Contact</a>
          </div>

          <a
            href="/webinar"
            className="hidden md:block bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800"
          >
            Free Webinar
          </a>
        </div>
      </div>
    </nav>
  );
}