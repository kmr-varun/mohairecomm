"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
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
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-20">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={76}
        slidesPerView={5}
        autoplay={{
          delay: 5000,
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
                className="object-cover transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
