import React from "react";
import Image from "next/image";
import BackgroundHomeDark from "@/background-home-dark.svg";
import BackgroundHome from "@/background-home.svg";

interface ImgeBackgroundProps {
  theme: boolean;
}

const ImgeBackground: React.FC<ImgeBackgroundProps> = ({ theme }) => {
  return (
    <div className="bg-[#09090a] w-full h-screen  absolute -z-10">
      <Image
        src={theme ? BackgroundHomeDark : BackgroundHome}
        alt=""
        className="opacity-80 dark:opacity-50 object-cover w-full h-screen"
      />
    </div>
  );
};

export default ImgeBackground;
