"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slideshow() {
  const slides = [
    {
      id: 1,
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-11.jpg",
      alt: "Tailored suit jacket with tie",
    },
    {
      id: 2,
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-12.jpg",
      alt: "Sewing supplies and thread",
    },
    {
      id: 3,
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-13.jpg",
      alt: "Hands working at sewing machine",
    },
    {
      id: 4,
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-14.jpg",
      alt: "Fashion design profile",
    },
    {
      id: 5,
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-15.jpg",
      alt: "Light fabric detail",
    },
    {
      id: 6,
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-11.jpg",
      alt: "Tailored suit jacket with tie",
    },
    {
      id: 7,
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-12.jpg",
      alt: "Sewing supplies and thread",
    },
    {
      id: 8,
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-13.jpg",
      alt: "Hands working at sewing machine",
    },
    {
      id: 9,
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-14.jpg",
      alt: "Fashion design profile",
    },
    {
      id: 10,
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-15.jpg",
      alt: "Light fabric detail",
    },
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-20">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={75}
        slidesPerView={5}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative aspect-[8/9] w-full overflow-hidden ">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover transition-transform duration-300 scale-110 hover:scale-110 hover:translate-x-2"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
