"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { lavorazioni } from "@/data/lavorazioni";

export default function LavorazioniSection() {
  const autoplayDelay = 4000;
  const [progress, setProgress] = useState(0);
  const [api, setApi] = useState<any>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  const duplicatedLavorazioni = [...lavorazioni, ...lavorazioni, ...lavorazioni];

  const startProgress = () => {
    setProgress(0);
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
    const startTime = Date.now();
    progressInterval.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / autoplayDelay) * 100, 100);
      setProgress(newProgress);
      if (newProgress >= 100) {
        clearInterval(progressInterval.current!);
      }
    }, 50);
  };

  useEffect(() => {
    startProgress();
    return () => {
      if (progressInterval.current) clearInterval(progressInterval.current);
    };
  }, []);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => startProgress();

    const onSettle = () => {
      const selectedIndex = api.selectedScrollSnap();
      const totalSlides = duplicatedLavorazioni.length;
      const originalLength = lavorazioni.length;
      if (selectedIndex >= totalSlides - originalLength) {
        setTimeout(() => {
          api.scrollTo(originalLength, false);
        }, 50);
      }
    };

    api.on("select", onSelect);
    api.on("settle", onSettle);

    return () => {
      api.off("select", onSelect);
      api.off("settle", onSettle);
    };
  }, [api, duplicatedLavorazioni.length, lavorazioni.length]);

  useEffect(() => {
    if (api) {
      api.scrollTo(lavorazioni.length, false);
    }
  }, [api, lavorazioni.length]);

  return (
    <section className="max-w-6xl mx-auto px-8 py-8 space-y-8 mt-10">
      <h2 className="text-3xl font-tanker font-bold text-center text-black">
        LE NOSTRE LAVORAZIONI
      </h2>

      <div className="px-12 sm:px-20 lg:px-24 pb-8">
        <Carousel
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: autoplayDelay,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
            }),
          ]}
          opts={{
            align: "center",
            loop: false,
            slidesToScroll: 1,
            skipSnaps: false,
            dragFree: false,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-8 overflow-visible">
            {duplicatedLavorazioni.map((lavorazione, index) => {
              const Icon = lavorazione.icona;
              return (
                <CarouselItem
                  key={`${lavorazione.slug}-${index}`}
                  className="pl-8 pb-8 basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div
                    className="
                      bg-white
                      rounded-lg
                      shadow-lg
                      aspect-[4/3]
                      p-5
                      flex
                      flex-col
                      justify-between
                      w-full
                      hover:shadow-xl
                      transition-all
                      duration-300
                    "
                    style={{ minHeight: 220 }}
                  >
                    <div className="flex justify-between items-start mb-3 ">
                      <div className="max-w-[60%]">
                        <h3 className="text-2xl font-tanker font-bold text-black leading-tight">
                          {lavorazione.titolo}
                        </h3>
                        <p
                          className="text-sm text-muted-foreground mt-1"
                          style={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                            minHeight: "4.5rem",
                          }}
                          title={lavorazione.descrizione}
                        >
                          {lavorazione.descrizione}
                        </p>
                      </div>
                      <div className="flex-shrink-0 text-indigo-600">
                        <Icon className="w-12 h-12 sm:w-14 sm:h-14" />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Link href={`/lavorazioni/${lavorazione.slug}`}>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="transition-all duration-300 hover:scale-105 hover:shadow-md"
                        >
                          SCOPRI
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselNext className="hidden sm:flex -right-12 lg:-right-16" />
          <CarouselPrevious className="hidden sm:flex -left-12 lg:-left-16" />
        </Carousel>

        <div className="mt-4 flex justify-center">
          <Progress
            value={progress}
            className="h-1 w-24 transition-all duration-75 ease-linear"
          />
        </div>
      </div>
    </section>
  );
}
