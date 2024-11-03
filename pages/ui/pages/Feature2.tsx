import Image from "next/image";

export default function Feature2() {
  return (
    <div className=" relative w-full grid grid-cols-1 md:grid-cols-2 min-h-screen ">
      <div className="w-full flex items-end justify-start p-8  bg-[#F2EFEB]">
        <div className="max-w-[390px] m-20">
          <h2 className="text-4xl font-normal tracking-tight font-['Jost']">
            Bespoke Suit & Dress Making Professionals
          </h2>
          <p className="text-lg text-[#7C8059] italic text-muted-foreground font-['Ibarra_Real_Nova'] mt-4">
            High Quality
          </p>
          <p className="text-[#333333] leading-relaxed mt-6 text-[17px] ">
            At vero eos et accusamus et justo odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti cupiditate non provident,
            similique sunt in culpa...
          </p>
          <button className="relative rounded-none px-[65px] py-[17px] mt-10">
            <svg
              className="h-full w-full absolute left-0 top-0 animatedbutton"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 189 59"
              preserveAspectRatio="none"
            >
              <path
                fill-rule="evenodd"
                stroke-width="1px"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                vector-effect="non-scaling-stroke"
                d="M0.500,0.500 L178.500,0.500 C184.023,0.500 188.500,4.977 188.500,10.500 L188.500,57.500 L10.500,57.500 C4.977,57.500 0.500,53.023 0.500,47.500 L0.500,0.500 Z"
              ></path>
            </svg>
            <span className="w-full h-full flex items-center justify-center uppercase text-sm tracking-wider ">
              View More
            </span>
          </button>
        </div>
      </div>
      <div className="relative h-full min-h-[400px] ">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "url(https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-2.jpg)",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
}
