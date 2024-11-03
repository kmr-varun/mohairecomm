import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dribbble, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1a2419] text-gray-300 py-24 font-['Jost']">
      <div className="w-full flex justify-between px-10 py-10">
        {/* Brand Column */}
        <div className="space-y-6 w-[400px]">
          <h2 className="text-3xl font-light tracking-wide text-white">
            MOHAIR
          </h2>
          <p className="text-lg leading-relaxed">
            Discover the finest tailor and haute couture studio in town, get in
            touch with us and let's start the work on your new suit together.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white">
              <Dribbble className="h-5 w-5" />
              <span className="sr-only">Dribbble</span>
            </Link>
            <Link href="#" className="hover:text-white">
              <div className="h-5 w-5 fill-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z" />
                </svg>
              </div>
              <span className="sr-only">Vimeo</span>
            </Link>
            <Link href="#" className="hover:text-white">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-white">
              <div className="h-4 w-4 fill-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="M204 6.5C101.4 6.5 0 74.9 0 185.6 0 256 39.6 296 63.6 296c9.9 0 15.6-27.6 15.6-35.4 0-9.3-23.7-29.1-23.7-67.8 0-80.4 61.2-137.4 140.4-137.4 68.1 0 118.5 38.7 118.5 109.8 0 53.1-21.3 152.7-90.3 152.7-24.9 0-46.2-18-46.2-43.8 0-37.8 26.4-74.4 26.4-113.4 0-66.2-93.9-54.2-93.9 25.8 0 16.8 2.1 35.4 9.6 50.7-13.8 59.4-42 147.9-42 209.1 0 18.9 2.7 37.5 4.5 56.4 3.4 3.8 1.7 3.4 6.9 1.5 50.4-69 48.6-82.5 71.4-172.8 12.3 23.4 44.1 36 69.3 36 106.2 0 153.9-103.5 153.9-196.8C384 71.3 298.2 6.5 204 6.5z" />
                </svg>
              </div>
              <span className="sr-only">Pinterest</span>
            </Link>
          </div>
        </div>

        {/* Information Column */}
        <div className="space-y-6 text-lg">
          <h3 className=" font-light text-3xl text-white">Information:</h3>
          <div className="space-y-3">
            <p>info.tailor@example.com</p>
            <p>+345 8892 7413</p>
            <p>35 Savile Row, London W1S</p>
            <div className="space-y-1">
              <p>Monday to Saturday 10am-6pm</p>
              <p>Sunday closed</p>
            </div>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="space-y-6">
          <h3 className="text-3xl font-light text-white">Quick Links:</h3>
          <nav className="flex flex-col space-y-5 text-[12px] font-medium tracking-wider">
            <Link href="#" className="hover:text-white">
              ABOUT
            </Link>
            <Link href="#" className="hover:text-white">
              SERVICES
            </Link>
            <Link href="#" className="hover:text-white">
              OUR HERITAGE
            </Link>
            <Link href="#" className="hover:text-white">
              TAILORS
            </Link>
            <Link href="#" className="hover:text-white">
              CONTACT US
            </Link>
          </nav>
        </div>

        {/* Join Us Column */}
        <div className="space-y-6 w-[320px]">
          <h3 className="text-3xl font-light text-white">Join Us:</h3>
          <p className="text-lg">
            Sign up for exclusive offers, original stories, events and more.
          </p>
          <div className="relative w-full]">
            <input
              type="email"
              placeholder="Your Email *"
              className="w-full h-16 placeholder:font-['Ibarra_Real_Nova'] bg-transparent placeholder:italic font-['Jost'] text-base px-4 border border-white pr-12 outline-none placeholder:text-white text-white "
              required
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Subscribe"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                height="17px"
                className="h-3 px-2 fill-white"
              >
                <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
