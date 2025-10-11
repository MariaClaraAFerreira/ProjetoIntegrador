"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function BannerCarousel() {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
    })
  );

  const slides = [
    {
      src: "/bolo3.jpeg",
      title: "Bolos Personalizados",
      description: "Criamos o bolo dos seus sonhos",
    },
    {
      src: "/bolo1.jpeg",
      title: "Bolos Prontos",
      description: "Feitos com chocolate belga",
    },
    {
      src: "/cupcake.jpeg",
      title: "Cupcakes Deliciosos",
      description: "Sabores únicos e especiais",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <Carousel
        opts={{ align: "center", loop: true }}
        plugins={[plugin.current]}
        className="w-full rounded-xl overflow-hidden"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="basis-full">
              <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh]">
                <Image
                  src={slide.src}
                  alt={slide.title}
                  fill
                  className="object-cover brightness-75"
                />
                {/* Texto sobreposto no canto inferior esquerdo */}
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-left">
                  <h2 className="text-white text-3xl md:text-5xl font-bold drop-shadow-lg">
                    {slide.title}
                  </h2>
                  <p className="text-gray-200 text-sm md:text-lg mt-2 drop-shadow-md">
                    {slide.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navegação visível apenas no desktop */}
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
}
