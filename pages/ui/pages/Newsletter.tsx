import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Send } from "lucide-react";

export default function Newsletter() {
  return (
    <Card className="w-full h-[400px] flex flex-col gap-5 font-['Jost'] items-center justify-center max-w-5xl mx-auto border-none shadow-none">
      <CardHeader className="space-y-2 text-center">
        <CardTitle className="text-[42px] font-normal ">
          Subscribe to our newsletter
        </CardTitle>
        <CardDescription className="text-lg text-black">
          Sign up for exclusive offers, original stories, events and more.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="w-[900px]" onSubmit={(e) => e.preventDefault()}>
          <div className="relative w-full]">
            <input
              type="email"
              placeholder="Your Email *"
              className="w-full h-16 placeholder:font-['Ibarra_Real_Nova'] placeholder:italic font-['Jost'] text-base px-4 border border-black pr-12 outline-none placeholder:text-black "
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
                className="h-3 px-2"
              >
                <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
              </svg>
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
