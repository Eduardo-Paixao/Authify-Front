import React, { useCallback } from "react";
import Image from "next/image";
import ArrowPrevCircle from "../../../../public/arrow-prev-circle.svg";
import ArrowNextCircle from "../../../../public/arrow-next-circle.svg";
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
        title="arrow-left-circle"
        className="cursor-pointer hover:brightness-120"
        onClick={scrollPrev}
      >
        <Image alt="arrow-left-circle" src={ArrowPrevCircle} />
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
        className="cursor-pointer hover:brightness-120"
        onClick={scrollNext}
      >
        <Image alt="arrow-next-circle" src={ArrowNextCircle} />
      </Button>
    </>
  );
};
