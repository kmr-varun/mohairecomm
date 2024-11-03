import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  status?: "sale" | "sold";
  originalPrice?: number;
}

export default function Products() {
  const products: Product[] = [
    {
      id: 1,
      name: "White Blazer",
      price: 120.0,
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/shop-single-36.jpg",
    },
    {
      id: 2,
      name: "Man Blazer",
      price: 100.0,
      originalPrice: 120.0,
      status: "sale",
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/shop-single-33.jpg",
    },
    {
      id: 3,
      name: "White Suit",
      price: 0,
      status: "sold",
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/shop-single-5.jpg",
    },
    {
      id: 4,
      name: "Blue Suit",
      price: 275.0,
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/shop-single-32.jpg",
    },
    {
      id: 5,
      name: "Bussines Suits",
      price: 95.0,
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/shop-single-27.jpg",
    },
    {
      id: 6,
      name: "Beige Dress",
      price: 100.0,
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/shop-single-30.jpg",
    },
    {
      id: 7,
      name: "Grey Suit",
      price: 110.0,
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/shop-single-31.jpg",
    },
    {
      id: 8,
      name: "Suspenders",
      price: 275.0,
      image:
        "https://mohair.qodeinteractive.com/wp-content/uploads/2023/05/shop-single-34.jpg",
    },
  ];

  return (
    <section className="relative w-full mt-20 bg-white overflow-hidden">
      <div className="-mx-1 pt-4">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h1 className="text-5xl font-normal font-['Jost'] tracking-normal ">
            Finest{" "}
            <span className="italic  font-['Ibarra_Real_Nova']">
              Custom tailored
            </span>{" "}
            suits from world
            <br />
            famous fabric{" "}
            <span className="italic font-['Ibarra_Real_Nova']">brands.</span>
          </h1>
        </div>
        <div className="overflow-x-auto h-full pt-12">
          <div
            className="relative  customproduct2 -mb-[1px]"
            // style={{
            //   borderWidth: "1px 0 0 1px",
            //   borderStyle: "dashed",
            //   borderColor: "#000000",
            //   borderImageSource:
            //     "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23000000' stroke-width='1' stroke-dasharray='10%2c 5' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
            //   borderImageSlice: "1",
            //   borderImageRepeat: "round",
            // }}
          >
            <table className="w-full border-separate border-spacing-0">
              <tbody>
                {[...Array(Math.ceil(products.length / 4))].map(
                  (_, rowIndex) => (
                    <tr key={rowIndex}>
                      {products
                        .slice(rowIndex * 4, rowIndex * 4 + 4)
                        .map((product, colIndex) => (
                          <td
                            key={product.id}
                            className="p-4 align-top w-1/4 h-[400px]"
                            // style={{
                            //   borderWidth: "0 1px 1px 0",
                            //   borderStyle: "dashed",
                            //   borderColor: "#000000",
                            //   borderImageSource:
                            //     "url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%2300ff00' stroke-width='1' stroke-dasharray='10%2c 5' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\")",
                            //   borderImageSlice: "1",
                            //   borderImageRepeat: "round",
                            // }}
                          >
                            <div className="relative group p-14">
                              {product.status && (
                                <div className="absolute z-10 left-[70px] top-[40px]">
                                  <div
                                    className={`h-12 w-12 flex items-center font-['Ibarra_Real_Nova']  italic justify-center text-md font-semibold rounded-full ${
                                      product.status === "sale"
                                        ? "bg-[#790000] text-white"
                                        : "bg-[#1f261e] text-white"
                                    }`}
                                  >
                                    {product.status.charAt(0).toUpperCase() +
                                      product.status.slice(1)}
                                  </div>
                                </div>
                              )}
                              <Link
                                href="#"
                                className="block relative h-[300px]"
                              >
                                <Image
                                  src={product.image}
                                  alt={product.name}
                                  fill
                                  className="object-contain border-none shadow-none"
                                />
                              </Link>
                              <div className="mt-4 w-full flex items-center justify-between ">
                                <div className="flex flex-col items-start ">
                                  <h3 className="text-xl font-normal font-['Jost']">
                                    {product.name}
                                  </h3>
                                  {product.status !== "sold" ? (
                                    <div className="flex  gap-2 font-['Ibarra_Real_Nova']   italic ">
                                      {product.originalPrice && (
                                        <span className="text-lg line-through text-black">
                                          ${product.originalPrice.toFixed(2)}
                                        </span>
                                      )}
                                      <span className="text-lg font-normal text-[#7c8059]">
                                        ${product.price.toFixed(2)}
                                      </span>
                                    </div>
                                  ) : (
                                    <Link
                                      href="#"
                                      className="text-lg font-normal font-['Ibarra_Real_Nova']  text-[#7c8059] hover:underline"
                                    >
                                      Read More
                                    </Link>
                                  )}
                                </div>
                                <div className=" ">
                                  {product.status !== "sold" ? (
                                    <div className="w-8 h-8 rounded-full p-0 border-none shadow-none">
                                      <svg
                                        className="list-btn-icon w-5 h-5" // Add width and height classes from Tailwind CSS
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        viewBox="0 0 17.14 18.72"
                                      >
                                        <path d="M13.43 5.99H.87v9.04c0 1.57 1.27 2.84 2.84 2.84h9.72c1.57 0 2.84-1.27 2.84-2.84V5.99h-2.84z" />
                                        <path d="M3.65 8.69c0-4.31 2.2-7.81 4.92-7.81s4.92 3.5 4.92 7.81" />
                                      </svg>
                                      <span className="sr-only">
                                        Add to Cart
                                      </span>
                                    </div>
                                  ) : (
                                    <div className="rounded-full p-0 border-none shadow-none">
                                      <svg
                                        className="list-btn-icon w-5 h-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlSpace="preserve"
                                        viewBox="0 0 16.63 16.72"
                                      >
                                        <path d="M8.32.83v15M15.82 8.33h-15" />
                                      </svg>
                                      <span className="sr-only font-['Ibarra_Real_Nova']">
                                        Read More
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </td>
                        ))}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
