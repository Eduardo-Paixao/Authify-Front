import React, { useCallback } from "react";
import Image from "next/image";
import ArrowPrevCircle from "@/arrow-prev-circle.svg";
import ArrowNextCircle from "@/arrow-next-circle.svg";
import { EmblaCarouselType } from "embla-carousel";
import Button from "@/components/Button";

interface ArrowButtonProps {
  emblaApi: EmblaCarouselType | undefined;
}
export const ArrowButtonPrev = ({ emblaApi }: ArrowButtonProps) => {
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  return (
    <>
      <Button
        title="arrow-prev-circle"
        className="cursor-pointer hover:brightness-120 bg-transparent"
        onClick={scrollPrev}
      >
        <Image alt="arrow-prev-circle" src={ArrowPrevCircle} />
      </Button>
    </>
  );
};

export const ArrowButtonNext = ({ emblaApi }: ArrowButtonProps) => {
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <>
      <Button
        title="arrow-next-circle "
        className="cursor-pointer hover:brightness-120 bg-transparent"
        onClick={scrollNext}
      >
        <Image alt="arrow-next-circle" src={ArrowNextCircle} />
      </Button>
    </>
  );
};
