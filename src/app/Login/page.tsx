"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { EmblaCarouselDesktop } from "@/components/EmblaCarousel/EmblaCarouselDesktop";
import { EmblaCarouselMobile } from "@/components/EmblaCarousel/EmblaCarouselMobile";
import React from "react";
import { useRouter } from "next/navigation";
import ArrowPrevCircle from "@/arrow-prev-circle.svg";

const login:React.FC = () => {
  const { push } = useRouter();

  return (
    <div className="flex h-screen flex-col items-center relative justify-center">
      <Button
        title="arrow-prev-circle"
        className="bg-transparent absolute top-1 left-4 !w-auto"
        onClick={() => push("/")}
      >
        <Image
          alt="arrow-prev-circle"
          src={ArrowPrevCircle}
          className="xs:w-10"
        />
      </Button>
      <div className="hidden xl:flex">
        <EmblaCarouselDesktop />
      </div>
      <div className="flex xl:hidden w-full h-screen items-end">
        <EmblaCarouselMobile />
      </div>
    </div>
  );
};

export default login;
