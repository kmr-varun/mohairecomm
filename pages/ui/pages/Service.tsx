"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function Service() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("up");
  const images = [
    "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home-2-png-1.png",
    "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H2-interacitve-2.png",
    "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H2-interacitve-5.png",
    "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H2-interacitve-4.png",
    "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/H2-interacitve-3.png",
  ];
  const texts = [
    "Modern Dress",
    "Alternations",
    "Bespoke",
    "Hand Sewn",
    "Measurement",
  ];

  const handleMouseEnter = (index: number) => {
    // setDirection(index > currentImageIndex ? "up" : "down");
    setCurrentImageIndex(index);
  };

  const handleMouseLeave = (index: number) => {
    // setDirection("down");
    setCurrentImageIndex(index);
  };

  return (
    <div className="container h-screen mx-auto max-w-6xl py-16 ">
      <div className="flex h-screen items-center justify-start gap-44 overflow-hidden">
        <div className="relative aspect-[3/4] h-[600px]  ">
          {images.map((src, index) => (
            <Image
              key={src}
              alt={`Elegant dress view ${index + 1}`}
              className={`absolute inset-0 object-cover transition-all duration-500 ease-in-out ${
                currentImageIndex === index
                  ? "opacity-100 translate-y-0 -rotate-0"
                  : "opacity-0 -translate-y-1/4 -rotate-12"
                // : "opacity-100 -translate-y-0"
              }`}
              height={500}
              src={src}
              style={{
                aspectRatio: "3/4",
                objectFit: "contain",
                // borderRadius:
                //   index === 0
                //     ? "0px 50% 50% 50%"
                //     : index === 1
                //     ? "100px 0px 100px 100px"
                //     : index === 2
                //     ? "100px 100px 0px 100px"
                //     : index === 3
                //     ? "100px 0px 100px 100px"
                //     : "100px 100px 0px 100px",
              }}
              width={500}
            />
          ))}
        </div>
        <div className="flex flex-col justify-center ">
          <div className="">
            {texts.map((text, index) => (
              <p
                key={index}
                className={`text-[60px] tracking-tight  cursor-pointer transition-colors duration-200 py-0 ${
                  currentImageIndex === index
                    ? "font-['Ibarra_Real_Nova'] italic"
                    : "font-nomral font-['Jost'] text-black"
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
