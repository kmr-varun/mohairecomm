import { Button } from "@/components/ui/button";

interface PricingTier {
  title: string;
  price: number;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: "Classic Suits",
    price: 99,
    features: ["Ullamcorper", "Venenatis", "Quisque", "Elementum"],
  },
  {
    title: "Casual Suits",
    price: 155,
    features: ["Ullamcorper", "Venenatis", "Quisque", "Elementum"],
  },
  {
    title: "Tuxedo",
    price: 270,
    features: ["Ullamcorper", "Venenatis", "Quisque", "Elementum"],
  },
];

export default function Pricing() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center py-20 mt-10">
      <div className="max-w-4xl w-full text-center mb-20">
        <h1 className="text-5xl  font-normal tracking-wider font-['Jost']">
          Individuality of your <br /> style.
        </h1>
        <p className="text-lg text-[#7c8059] italic font-['Ibarra_Real_Nova'] mt-4 mb-6">
          Best Quality Tailor
        </p>
        <p className="text-black text-lg max-w-md mx-auto  leading-relaxed">
          At vero eos et accusamus et justo odio ducimus qui blanditiis
          praesentium provident, similique sunt in culpa nea...
        </p>
      </div>
      <div className="flex gap-8 w-full justify-center px-20">
        {pricingTiers.map((tier, index) => (
          <div key={index} className={`flex w-full flex-col  `}>
            <div
              className={`border border-[#bfa886] border-b-0 ${
                index === 1 ? "rounded-t-[40px]" : "rounded-none"
              } flex w-full flex-col justify-between pt-12 pb-0 `}
            >
              <div className="text-center w-full">
                <div className="flex flex-col items-center justify-center w-full">
                  <h2 className="text-4xl font-normal font-['Jost'] mb-8">
                    {tier.title}
                  </h2>
                  <div className="text-5xl w-full font-noraml mb-12 flex flex-col font-['Ibarra_Real_Nova'] italic items-center justify-center  ">
                    <div className="flex w-[170px] ">
                      <span className="text-2xl mr-1">$</span>
                      <span>{tier.price}</span>
                    </div>
                    <span className="text-xl ml-20 -mt-6">
                      <span className="mx-1 text-gray-400">/</span>
                      <span className="font-normal">monthly</span>
                    </span>
                  </div>
                </div>
                <ul className="space-y-4 mb-12  text-left flex flex-col justify-center items-center">
                  {tier.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-md"
                    >
                      <span className="px-2">✓</span> {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="relative rounded-none px-[61px] pt-[24px] pb-[23px] ">
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
                  d="M0.5,0.5 L188.5,0.5 L188.5,57.5 L0.5,57.5 Z"
                ></path>
              </svg>

              <span className="w-full h-full flex items-center justify-center uppercase text-[12px] tracking-wider">
                PURCHASE
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
