import React from "react";
import Image from "next/image";
import BackgroundHomeDark from "@/background-home-dark.svg";
import BackgroundHome from "@/background-home.svg";

interface ImgeBackgroundProps {
  theme: boolean;
}

const ImgeBackground: React.FC<ImgeBackgroundProps> = ({ theme }) => {
  return (
    <Image
      src={theme ? BackgroundHomeDark : BackgroundHome}
      alt=""
      className="opacity-80 dark:opacity-50 absolute -z-10 object-cover w-full h-screen"
    />
  );
};

export default ImgeBackground;
