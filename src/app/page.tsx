"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

import LogoDev from "@/logo-dev.svg";
import ArrowNextCircle from "@/arrow-next-circle.svg";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import ImgeBackground from "@/components/ImgeBackground";
import { useTheme } from "@/hooks/useTheme";

export default function Home() {
  const { push } = useRouter();
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <ToggleThemeButton toggleTheme={toggleTheme} />
      <ImgeBackground theme={theme === "dark"} />
      <div className="flex w-full md:h-screen  justify-center items-center flex-col p-4">
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row max-h-[calc(100vh-88px)] items-center bg-[#F2ECFF]/85 border-4 border-[#8257E5] rounded-[73px]">
          <Image
            alt="banner-second"
            src={LogoDev}
            className="w-[200px] sm:w-[300px]"
          />
          <section className="p-4 mb-8 w-full flex flex-col gap-4 xs:text-xl sm:text-2xl text-[#000] overflow-auto text-ellipsis ">
            <strong>
              Olá, eu sou o{" "}
              <span className="text-[#8257E5]">Eduardo Paixão.</span>
            </strong>
            <span>
              Graduado em Ciência da Computação pela Unigrande (Centro
              Universitário da Grande Fortaleza). Atuo como Desenvolvedor
              Front-End com mais de quatro anos de experiência, especializado em
              React, TypeScript, Next.js, GraphQL, Prisma e Node.js.
            </span>
            <span>
              Tenho foco em criar interfaces performáticas, acessíveis e
              escaláveis. Sou proativo, comunicativo e colaborativo, sempre
              buscando aprimorar minhas habilidades e contribuir efetivamente em
              equipes de desenvolvimento. Atualmente, estou estudando inglês
              para expandir minhas oportunidades profissionais.
            </span>
          </section>
        </div>
        <Button
          title="arrow-prev-circle"
          className="cursor-pointer hover:brightness-120 bg-transparent"
          onClick={() => push("Login")}
        >
          <Image
            alt="arrow-prev-circle"
            src={ArrowNextCircle}
            className="xs:w-10"
          />
        </Button>
      </div>
    </div>
  );
}
