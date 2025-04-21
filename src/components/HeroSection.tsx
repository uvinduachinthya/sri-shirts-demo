
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const CAROUSEL_IMAGES = [
  {
    url: "/lovable-uploads/65472ea4-ec31-4bfd-bab4-86cc384c4a0f.png",
  },
  {
    url: "/lovable-uploads/600ed9c4-1416-4712-b91f-1b779ba6d2f2.png",
  },
  {
    url: "/lovable-uploads/3a6977fd-dada-4557-bb23-194f26345dae.png",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleShopNow = () => {
    const dropSection = document.getElementById('drop');
    dropSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      <Carousel className="w-full relative">
        <CarouselContent>
          {CAROUSEL_IMAGES.map((image, index) => (
            <CarouselItem key={index} className={`${index === currentSlide ? 'block' : 'hidden'}`}>
              <div className="relative w-full h-[80vh] overflow-hidden">
                <img
                  src={image.url}
                  alt="Hero Collection"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent flex flex-col justify-center px-8 md:px-16 lg:px-24">
                  <h1 className="text-6xl md:text-8xl font-grotesk font-bold text-white max-w-md">
                    <span className="block">MARCH DROP</span>
                  </h1>
                  <p className="text-xl text-white max-w-lg mt-4 mb-8 font-inter">
                    The reaper is back. Get this month's exclusive collection now.
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={handleShopNow}
                      className="px-7 py-2 bg-white text-black rounded-none font-grotesk font-semibold text-lg hover:bg-black hover:text-white transition-colors border border-white"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute bottom-8 right-8 flex space-x-2">
          {CAROUSEL_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-opacity ${
                currentSlide === index ? 'bg-white opacity-100' : 'bg-white opacity-40'
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSection;

