"use client";
import Image from "next/image";
import { EmblaCarouselDesktop } from "@/components/EmblaCarousel/EmblaCarouselDesktop";
import { EmblaCarouselMobile } from "@/components/EmblaCarousel/EmblaCarouselMobile";
import React from "react";
import ArrowPrevCircle from "@/arrow-prev-circle.svg";
import Link from "next/link";

const login:React.FC = () => {

  return (
    <div className="flex h-screen flex-col items-center relative justify-center">
      <Link
        title="arrow-prev-circle"
        className="bg-transparent absolute top-3 left-4 !w-auto"
        href='/'
      >
        <Image
          alt="arrow-prev-circle"
          src={ArrowPrevCircle}
          className="xs:w-10"
        />
      </Link>
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
