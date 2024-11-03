import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function NewsletterSection() {
  return (
    <section className="py-16 px-4 md:px-6 bg-white">
      <div className=" px-4 space-y-8">
        <div className="text-center space-y-3 mb-20">
          <h2 className="text-5xl font-['Jost']">Subsribe to our newsletter</h2>
          <p className="text-[#7c8059] text-[19px] font-['Ibarra_Real_Nova'] italic ">
            High Quality Tailor
          </p>
        </div>

        <div className="flex gap-8 text-[#1f261e] font-['Jost'] text-[25px] font-normal ">
          <div className="w-full flex flex-col gap-8">
            <div className="relative  flex items-center justify-center">
              <div className="p-10 space-y-4 custom-box">
                <blockquote className="">
                  "The wise man therefore always holds in these matters to this
                  principle of selection. Donec a eros libero, dignissim eget"
                </blockquote>
                <p className="font-['Ibarra_Real_Nova'] text-lg text-[#7c8059] italic">
                  by Sara Bergman
                </p>
              </div>
            </div>

            <div className="shadow-none border-none">
              <div className="px-1">
                <img
                  src="https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/blog-img-17.jpg"
                  alt="Tailor drawing sketches"
                  className="w-full object-cover"
                />
                <div className="py-6 space-y-2">
                  <h3 className="text-[25px] font-normal">
                    Workshops for tailors around the world
                  </h3>
                  <div className="flex items-center gap-2 font-['Ibarra_Real_Nova'] italic text-lg text-[#7c8059]">
                    <time>April 20, 2023</time>
                    <span>/</span>
                    <span className="italic">Accessories</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <div className="shadow-none border-none">
              <div className="px-1">
                <img
                  src="https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/blog-img-15.jpg"
                  alt="Tailor drawing sketches"
                  className="w-full object-cover"
                />
                <div className="py-6 space-y-2">
                  <h3 className="text-[25px] font-normal">
                    Tailors detailed work
                  </h3>
                  <div className="flex items-center gap-2 font-['Ibarra_Real_Nova'] italic text-lg text-[#7c8059]">
                    <time>April 20, 2023</time>
                    <span>/</span>
                    <span className="italic">Accessories</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow-none border-none">
              <div className="px-1">
                <img
                  src="https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/blog-img-18.jpg"
                  alt="Tailor drawing sketches"
                  className="w-full object-cover"
                />
                <div className="py-6 space-y-2">
                  <h3 className="text-[25px] font-normal">
                    Wedding or casual event suits?
                  </h3>
                  <div className="flex items-center gap-2 font-['Ibarra_Real_Nova'] italic text-lg text-[#7c8059]">
                    <time>April 20, 2023</time>
                    <span>/</span>
                    <span className="italic">Accessories</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col">
            <div className="shadow-none border-none">
              <div className="px-1">
                <img
                  src="https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/blog-img-16.jpg"
                  alt="Tailor drawing sketches"
                  className="w-full object-cover"
                />
                <div className="py-6 space-y-2">
                  <h3 className="text-[25px] font-normal">
                    Ladies bespoke tailored shirts & blouses
                  </h3>
                  <div className="flex items-center gap-2 font-['Ibarra_Real_Nova'] italic text-lg text-[#7c8059]">
                    <time>April 20, 2023</time>
                    <span>/</span>
                    <span className="italic">Accessories</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow-none border-none bg-[#faf8f5] h-min">
              <div className="p-16 space-y-4">
                <h3 className="text-[25px] font-normal">
                  Needlework tailoring materials
                </h3>
                <p className="uppercase text-[12px] font-normal tracking-wider">
                  WEDDING OR CAUSUAL SUITS SERVICES?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
