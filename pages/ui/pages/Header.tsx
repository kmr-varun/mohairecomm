"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, MoreHorizontal, X } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    image:
      "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H2-portfolio-img-1.jpg",
    alt: "Model in black dress with white collar against blue sky",
    title: "Holland & Sherry",
    subtitle: "Fabrics",
  },
  {
    id: 2,
    image:
      "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H2-portfolio-img-2.jpg",
    alt: "Two models in white flowing dresses",
    title: "Loro Piana",
    subtitle: "L.Piana",
  },
  {
    id: 3,
    image:
      "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H2-portfolio-img-03.jpg",
    alt: "Person in grey suit, black and white photo",
    title: "Ermenegildo Zegna",
    subtitle: "DIY",
  },
  {
    id: 4,
    image:
      "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H2-portfolio-img-04.jpg",
    alt: "Close-up of a model wearing a white dress",
    title: "Ajmo Barbero",
    subtitle: "Fabrics",
  },
  {
    id: 5,
    image:
      "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H2-portfolio-img-5.jpg",
    alt: "Model in a black suit against a white background",
    title: "Orange Felt Fabric",
    subtitle: "Fabrics",
  },
  {
    id: 6,
    image:
      "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H2-portfolio-img-6.jpg",
    alt: "Model in a black suit against a white background",
    title: "Boucle Textil",
    subtitle: "L.Piana",
  },
];

const menuItems = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Collections", href: "/collections" },
  { id: 3, title: "About Us", href: "/about" },
  { id: 4, title: "Contact", href: "/contact" },
  { id: 5, title: "Blog", href: "/blog" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnimationState, setMenuAnimationState] = useState("closed");

  const toggleMenu = () => {
    if (isMenuOpen) {
      setMenuAnimationState("closing");
      setTimeout(() => {
        setIsMenuOpen(false);
        setMenuAnimationState("closed");
      }, 600);
    } else {
      setIsMenuOpen(true);
      setMenuAnimationState("opening");
      setTimeout(() => {
        setMenuAnimationState("open");
      }, 50);
    }
  };

  return (
    <header className="flex flex-col pb-20">
      <div className="relative h-[calc(100vh-88px)] top-[88px] w-full overflow-hidden">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={5}
          slidesPerView={3}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative group">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority
              />
              {/* Hover overlay */}
              <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end py-[70px] items-center text-white overflow-hidden">
                <div className="text-center px-4">
                  <h2 className="text-3xl font-normal mb-2 font-['Jost'] transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                    {slide.title}
                  </h2>
                  <p className="text-xl transform translate-y-full font-['Ibarra_Real_Nova'] italic opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out delay-150">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Carousel Controls */}
        {/* <button
          className="swiper-button-prev absolute left-4 top-1/2 -translate-y-1/2 stroke-white text-white z-10"
          aria-label="Previous slide"
        ></button>
        <button
          className="swiper-button-next absolute right-4 top-1/2 -translate-y-1/2 text-white z-10"
          aria-label="Next slide"
        ></button> */}

        <div className="swiper-button-prev">
          <svg
            className="slider-arrow-left"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 50.9"
          >
            <polyline points="25.6,0.4 0.7,25.5 25.6,50.6"></polyline>
          </svg>
        </div>
        <div className="swiper-button-next">
          <svg
            className="slider-arrow-right"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26 50.9"
          >
            <polyline points="0.4,50.6 25.3,25.5 0.4,0.4"></polyline>
          </svg>
        </div>
      </div>
    </header>
  );
}
