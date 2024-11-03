import { Fragment } from "react";

const words = ["Individuality of your style", "Weekend Special Sale 50%"];

export default function TapeSection() {
  return (
    <div className="">
      <div className="py-10  overflow-clip">
        <div className="h-[70px] bg-[#1f261e] text-[#9fa695] flex items-center">
          <div className="flex">
            <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:60s]">
              {[...new Array(10)].fill(0).map((_, idx) => (
                <Fragment key={idx}>
                  {words.map((word, index) => (
                    <div key={word} className="inline-flex gap-4 items-center">
                      <span className="text-xl font-normal font-['Ibarra_Real_Nova'] tracking-wider ">
                        {index === 0 ? (
                          <span className="italic">{word}</span>
                        ) : (
                          <span>{word}</span>
                        )}
                      </span>
                    </div>
                  ))}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
