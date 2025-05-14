"use client";
import Image from "next/image";

import LogoDev from "@/logo-dev.svg";
import ArrowNextCircle from "@/arrow-next-circle.svg";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <div className="flex w-full md:h-screen  justify-center items-center flex-col p-4">
        <div className="w-full max-w-[1440px] flex flex-col md:flex-row h-[calc(100vh-275px)] items-center bg-[#F2ECFF]/85 border-4 border-[#8257E5] rounded-[73px]">
          <Image
            alt="banner-second"
            src={LogoDev}
            className="w-[200px] sm:w-[300px]"
          />
          <section className="p-4 max-h-[500px] w-full flex flex-col gap-4 xs:text-xl sm:text-3xl/10 text-[#000] overflow-auto text-ellipsis">
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
        <Link
          title="arrow-prev-circle"
          className="cursor-pointer hover:brightness-120 bg-transparent mt-4"
          href='Login'
        >
          <Image
            alt="arrow-prev-circle"
            src={ArrowNextCircle}
            className="xs:w-10"
          />
        </Link>
      </div>
    </div>
  );
}
