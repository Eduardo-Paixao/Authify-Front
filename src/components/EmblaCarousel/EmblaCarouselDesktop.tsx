"use client";
import React from "react";

import useEmblaCarousel from "embla-carousel-react";

import Autoplay from "embla-carousel-autoplay";
import DotButton from "./DotButton/intex";
import { ArrowButtonNext, ArrowButtonPrev } from "./ArrowButton";
import Image from "next/image";
import BannerFirst from "@/banner-first.svg";
import BannerSecond from "@/banner-second.svg";
import BannerThird from "@/banner-third.svg";
import ReactIcon from "@/react-icon.svg";
import TypeScriptIcon from "@/type-script-icon.svg";
import NextIcon from "@/next-icon.svg";
import TailwindCSSIcon from "@/tailwind-icon.svg";
import GraphQLIcon from "@/graphql-icon.svg";
import NodeIcon from "@/node-icon.svg";
import PrismaIcon from "@/prisma-icon.svg";
import SQLiteIcon from "@/sqlite-icon.svg";
import JWTIcon from "@/jwt-icon.svg";

export const EmblaCarouselDesktop = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
  });

  return (
    <div className=" flex flex-col gap-4 w-full items-center">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 max-w-[879px]">
          <div className="flex-shrink-0 w-full relative">
            <Image alt="banner-first" src={BannerFirst} />
            <section className="bg-[#fff]/8 max-w-[379px] p-4 rounded-[12px] absolute left-4 top-[77px] text-2xl">
              <p>
                Olá, eu sou o <strong>Eduardo Paixão</strong>.
              </p>
              <br />
              Criei o Authfy com o objetivo de aprimorar meus conhecimentos
              tanto no desenvolvimento Front-End quanto no Back-End.
            </section>

            <section className="bg-[#fff]/8 max-w-[379px] p-4 rounded-[12px] absolute right-4 top-3.5 text-2xl flex flex-col items-center gap-4">
              <strong>Tecnologias Utilizadas:</strong>
              <div className="grid grid-cols-[170px_1fr] gap-5 text-xl">
                <section className="flex flex-col gap-2">
                  Front-End:
                  <span className="flex gap-2">
                    <Image alt="React" src={ReactIcon} /> React,
                  </span>
                  <span className="flex gap-2">
                    <Image alt="TypeScript" src={TypeScriptIcon} /> TypeScript,
                  </span>
                  <span className="flex gap-2">
                    <Image alt="Next.js" src={NextIcon} /> Next.js,
                  </span>
                  <span className="flex gap-2">
                    <Image alt="TailwindCSS" src={TailwindCSSIcon} />
                    TailwindCSS,
                  </span>
                  <span className="flex gap-2">
                    <Image alt="GraphQL" src={GraphQLIcon} /> GraphQL.
                  </span>
                </section>
                <section className="flex flex-col gap-2">
                  Back-End:
                  <span className="flex gap-2">
                    <Image alt="Node.js" src={NodeIcon} /> Node.js,
                  </span>
                  <span className="flex gap-2">
                    <Image alt="TypeScript" src={TypeScriptIcon} /> TypeScript,
                  </span>
                  <span className="flex gap-2">
                    <Image alt="Next.js" src={NextIcon} /> Next.js,
                  </span>
                  <span className="flex gap-2">
                    <Image alt="Prisma" src={PrismaIcon} /> Prisma,
                  </span>
                  <span className="flex gap-2">
                    <Image alt="SQLite" src={SQLiteIcon} /> SQLite,
                  </span>
                  <span className="flex gap-2">
                    <Image alt="GraphQL" src={GraphQLIcon} /> GraphQL,
                  </span>
                  <span className="flex gap-2">
                    <Image alt="JWT" src={JWTIcon} /> JWT.
                  </span>
                </section>
              </div>
            </section>
          </div>
          <div className="flex-shrink-0 w-full relative">
            <Image alt="banner-second" src={BannerSecond} />
            <section className="bg-[#fff]/8 p-4 rounded-[12px] max-w-[509px] flex flex-col gap-4 absolute right-10 top-[80px] text-2xl">
              <strong>O que é o Authfy?</strong>
              <span>
                O Authfy é um sistema completo de gerenciamento de usuários com
                permissões avançadas. Ele permite que administradores controlem
                o acesso dos usuários dentro da plataforma de forma intuitiva e
                eficiente.
              </span>
            </section>
          </div>
          <div className="flex-shrink-0 w-full relative">
            <Image alt="banner-third" src={BannerThird} />
            <section className="bg-[#fff]/8 p-4 rounded-[12px] max-w-[841px] flex flex-col gap-4 absolute right-[19px] top-[30px] text-[18px] items-center">
              <strong>Funcionalidades principais</strong>
              <p>
                <strong>Administração de Usuários</strong> – O usuário com
                permissão de admin pode cadastrar novos usuários e promover
                outros usuários a administradores.
              </p>
              <p>
                <strong>Busca e Listagem</strong> – Usuários do tipo user podem
                visualizar e pesquisar outros usuários no sistema.
              </p>
              <p>
                <strong>Edição de Informações</strong> – Usuários com permissão
                de editor podem modificar determinados atributos de outros
                usuários, como o nome.
              </p>
              <strong>
                Com o Authfy, a gestão de usuários se torna mais simples, segura
                e organizada, garantindo um controle preciso sobre quem pode
                acessar e modificar informações dentro do sistema.
              </strong>
            </section>
          </div>
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center">
        <ArrowButtonPrev emblaApi={emblaApi} />
        <DotButton emblaApi={emblaApi} />
        <ArrowButtonNext emblaApi={emblaApi} />
      </div>
    </div>
  );
};
