import React, { useCallback, useEffect, useState } from "react";
import { EmblaCarouselType } from "embla-carousel";

interface DotButtonProps {
  emblaApi: EmblaCarouselType | undefined;
}

const DotButton = ({ emblaApi }: DotButtonProps) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slides, setSlides] = useState<number[]>([]);

  useEffect(() => {
    if (!emblaApi) return;

    setSlides([...Array(emblaApi.slideNodes().length).keys()]);

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi && emblaApi.scrollTo(index);
    },
    [emblaApi]
  );
  return (
    <div className="flex gap-2">
      {slides.map((_, index) => (
        <button
          title="dotButton"
          type="button"
          key={index}
          className={`w-3 h-3 rounded-full cursor-pointer ${
            selectedIndex === index ? "bg-[#8257E5]" : "bg-[#FFF]"
          }`}
          onClick={() => scrollTo(index)}
        />
      ))}
    </div>
  );
};

export default DotButton;
