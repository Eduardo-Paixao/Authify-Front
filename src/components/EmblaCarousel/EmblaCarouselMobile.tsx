"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
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

export const EmblaCarouselMobile = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
  });

  return (
    <div className=" flex flex-col gap-4 w-full items-center">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 w-full ">
          <div className="flex-shrink-0 w-full relative ">
            <Image
              alt="banner-first"
              src={BannerFirst}
              className="w-full min-h-[358px] object-cover"
            />
            <section className="bg-[#fff]/8 w-full xs:max-w-[379px] p-4 rounded-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl">
              <p>
                Olá, eu sou o <strong>Eduardo Paixão</strong>.
              </p>
              <br />
              Criei o Authfy com o objetivo de aprimorar meus conhecimentos
              tanto no desenvolvimento Front-End quanto no Back-End.
            </section>
          </div>
          <div className="flex-shrink-0 w-full relative">
            <Image
              alt="banner-first"
              src={BannerFirst}
              className="w-full min-h-[358px] object-cover"
            />

            <section className="bg-[#fff]/8 w-full flex flex-col items-center xs:max-w-[379px] p-4 rounded-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl xs:text-2xl">
              <strong>Tecnologias Utilizadas:</strong>
              <div className="grid grid-cols-[1fr_1fr] gap-5 text-sm xs:text-xl">
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
            <Image
              alt="banner-second"
              src={BannerSecond}
              className="w-full min-h-[358px] object-cover"
            />
            <section className="bg-[#fff]/8 w-full xs:max-w-[379px] p-4 rounded-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl">
              <strong>O que é o Authfy?</strong>
              <span>
                O Authfy é um sistema completo de gerenciamento de usuários com
                permissões avançadas. Ele permite que administradores controlem
                o acesso dos usuários dentro da plataforma de forma intuitiva e
                eficiente.
              </span>
            </section>
          </div>
          <div className="flex-shrink-0 w-full relative ">
            <Image
              alt="banner-third"
              src={BannerThird}
              className="w-full min-h-[358px] object-cover"
            />
            <section className="bg-[#fff]/8 w-full xs:max-w-5/6 p-4 rounded-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] xs:text-xl">
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
            </section>
          </div>
          <div className="flex-shrink-0 w-full relative ">
            <Image
              alt="banner-third"
              src={BannerThird}
              className="w-full min-h-[358px] object-cover"
            />
            <section className="bg-[#fff]/8 w-full xs:max-w-5/6 p-4 rounded-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] xs:text-xl">
              <strong>Funcionalidades principais</strong>
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
