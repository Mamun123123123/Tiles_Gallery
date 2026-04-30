import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-primary">
            🧱 TilesGallery
          </h2>
          <p className="mt-2 text-sm opacity-80 max-w-sm mx-auto sm:mx-0">
            Discover premium aesthetic tiles for modern interiors.
            Build your dream space with unique designs.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-base sm:text-lg">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-primary">Home</Link>
            </li>
            <li>
              <Link href="/all-tiles" className="hover:text-primary">All Tiles</Link>
            </li>
            <li>
              <Link href="/profile" className="hover:text-primary">My Profile</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-base sm:text-lg">Contact Us</h3>

          <p className="text-sm opacity-80">
            Email: alm@tilesgallery.com
          </p>
          <p className="text-sm opacity-80">
            Phone: +8801866418423
          </p>

          <div className="flex justify-center sm:justify-start gap-4 mt-4">
            <a
              href="#"
              className="p-2 rounded-full bg-base-300 hover:bg-slate-800 hover:text-white transition"
            >
              <FaFacebookF size={16} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-base-300 hover:bg-pink-500 hover:text-white transition"
            >
              <FaInstagram size={16} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-base-300 hover:bg-blue-600 hover:text-white transition"
            >
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center px-4 py-4 border-t border-base-300 text-xs sm:text-sm opacity-70">
        © {new Date().getFullYear()} TilesGallery. All rights reserved.
      </div>
    </footer>
  );
}