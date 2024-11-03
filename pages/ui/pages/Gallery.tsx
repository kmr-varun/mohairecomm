import Image from "next/image";

export default function Gallery() {
  const images = [
    {
      src: "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-3.jpg",
      alt: "Tailoring craftsmanship",
    },
    {
      src: "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-4.jpg",
      alt: "Fashion design showcase",
    },
    {
      src: "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-5.jpg",
      alt: "Thread collection",
    },
    {
      src: "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-6.jpg",
      alt: "Fabric detail",
    },
    {
      src: "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-7.jpg",
      alt: "Pattern making",
    },
    {
      src: "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-8.jpg",
      alt: "Modern tailoring",
    },
    {
      src: "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-9.jpg",
      alt: "Measurement process",
    },
    {
      src: "https://mohair.qodeinteractive.com/wp-content/uploads/2023/04/home2-img-10.jpg",
      alt: "Sewing craftsmanship",
    },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform scale-105 duration-300 group-hover:scale-105 group-hover:translate-x-2"
            />
            {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">
                {image.alt}
              </span>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
