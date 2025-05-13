"use client";
import React from "react";

import useEmblaCarousel from "embla-carousel-react";

import DotButton from "./DotButton/intex";
import { ArrowButtonNext, ArrowButtonPrev } from "./ArrowButton";
import Image from "next/image";
import ArrowReactIcongif from "@/arrow-react-icon.gif";
import FormLogin from "@/app/Login/components/FormLogin";

export const EmblaCarouselDesktop = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
  });

  return (
    <div className="flex flex-col gap-4 w-full items-center">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex w-[calc(100vw-64px)] max-w-[1440px] gap-6 text-[#000]">
          <div className="flex-shrink-0 w-full relative justify-items-center">
            <strong className="w-full flex p-4 justify-center text-5xl dark:text-[#fff]">
              Tecnologias Utilizadas
            </strong>
            <section className="w-full h-[calc(100vh-275px)] p-4 flex flex-col justify-center items-center gap-4 bg-[#F2ECFF]/85 border-4 border-[#8257E5] rounded-[73px]">
              <div className="gap-5 text-4xl flex w-full max-w-[1220px] h-screen max-h-[351px] justify-between">
                <section className="flex flex-col gap-2 relative w-full">
                  <span className="flex gap-2 absolute top-[43%] left-[15%] border-[#8257E5] rounded-2xl border-4 p-3">
                    Front-End
                  </span>
                  <span className="flex gap-2 absolute top-[10%] left-[5%]">
                    React
                  </span>
                  <Image
                    alt="ArrowReactIcon"
                    className="absolute top-[20%] right-[77%] w-[20%] rotate-124"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute bottom-[6%]">
                    TypeScript
                  </span>
                  <Image
                    alt="ArrowTypeScriptIcon"
                    className="absolute bottom-[16%] right-[80%] w-[20%] rotate-76 -scale-x-100"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute bottom-[5%] right-[43%]">
                    Next.js
                  </span>
                  <Image
                    alt="ArrowNextIcon"
                    className="absolute bottom-[16%] right-[41%] w-[18%] -rotate-55"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute bottom-[23%] left-[55%]">
                    TailwindCSS
                  </span>
                  <Image
                    alt="ArrowTailwindCSSIcon"
                    className="absolute top-[48%] right-[34%] w-[20%] rotate-257"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute top-[20%] left-[50%]">
                    GraphQL
                  </span>
                  <Image
                    alt="ArrowGraphQLIcon"
                    className="absolute top-[23%] right-[46%] w-[20%] rotate-190"
                    src={ArrowReactIcongif}
                  />
                </section>
                <section className="flex flex-col gap-2 relative w-full">
                  <span className="flex gap-2 absolute top-[37%] right-[30%] border-[#8257E5] rounded-2xl border-4 p-3">
                    Back-End
                  </span>
                  <span className="flex gap-2 absolute top-[7%] left-[30%]">
                    Node.js
                  </span>
                  <Image
                    alt="ArrowNodeIcon"
                    className="absolute top-[17%] left-[28%] w-[18%] rotate-135"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute bottom-[11%] left-[15%]">
                    TypeScript
                  </span>
                  <Image
                    alt="ArrowTypeScriptIcon"
                    className="absolute bottom-[21%] left-[25%] w-[20%] rotate-65 -scale-x-100"
                    src={ArrowReactIcongif}
                  />

                  <span className="flex gap-2 absolute bottom-[11%] right-[18%]">
                    Prisma
                  </span>
                  <Image
                    alt="ArrowPrismaIcon"
                    className="absolute bottom-[21%] right-[17%] w-[20%] -rotate-66"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute top-[55%] right-0">
                    Postgres
                  </span>
                  <Image
                    alt="ArrowPostgresIcon"
                    className="absolute top-[38%] right-[13%] w-[20%] rotate-260"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute top-[15%] right-[10%]">
                    GraphQL
                  </span>
                  <Image
                    alt="ArrowGraphQLIcon"
                    className="absolute top-[17%] right-[30%] w-[20%] rotate-190"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute top-[53%] left-[20%] ">
                    JWT
                  </span>
                  <Image
                    alt="ArrowJWTIcon"
                    className="absolute top-[39%] left-[22%] w-[17%] rotate-109 -scale-x-100"
                    src={ArrowReactIcongif}
                  />
                </section>
              </div>
            </section>
          </div>
          <div className="flex-shrink-0 w-full relative justify-items-center">
            <strong className="w-full flex p-4 justify-center text-5xl dark:text-[#fff]">
              O que é o Authfy?
            </strong>
            <section className="w-full h-[calc(100vh-275px)] text-line text-5xl/18 p-4 bg-[#F2ECFF]/85 border-4 border-[#8257E5] rounded-[73px]">
              <span className="w-full h-full overflow-auto flex items-center ">
                O Authfy é uma solução completa para o gerenciamento de
                usuários, oferecendo controle avançado de permissões e níveis de
                acesso. Com uma interface intuitiva e eficiente, a plataforma
                permite que administradores configurem e gerenciem facilmente os
                acessos dos usuários, garantindo segurança, organização e
                flexibilidade dentro do sistema.
              </span>
            </section>
          </div>
          <div className="flex-shrink-0 w-full relative justify-items-center">
            <strong className="w-full flex p-4 justify-center text-5xl dark:text-[#fff]">
              Funcionalidades Principais
            </strong>
            <section className="w-full h-[calc(100vh-275px)]  bg-[#F2ECFF]/85  text-4xl/11 p-8 border-4 border-[#8257E5] rounded-[73px]">
              <span className="w-full h-full overflow-auto justify-evenly items-center flex flex-col">
                <p>
                  <strong>
                    <span className="text-[#8257E5]">{"<>"}</span> Administração
                    de Usuários
                  </strong>{" "}
                  – O usuário com permissão de admin pode cadastrar novos
                  usuários e promover outros usuários a administradores.
                </p>
                <p>
                  <strong>
                    <span className="text-[#8257E5]">{"<>"}</span> Busca e
                    Listagem
                  </strong>{" "}
                  – Usuários do tipo user podem visualizar e pesquisar outros
                  usuários no sistema.
                </p>
                <p>
                  <strong>
                    <span className="text-[#8257E5]">{"<>"}</span> Edição de
                    Informações
                  </strong>{" "}
                  – Usuários com permissão de editor podem modificar
                  determinados atributos de outros usuários, como o nome.
                </p>
                <p>
                  <strong>
                    <span className="text-[#8257E5]">{"<>"}</span>{" "}
                  </strong>
                  Com o Authfy, a gestão de usuários se torna mais simples,
                  segura e organizada, garantindo um controle preciso sobre quem
                  pode acessar e modificar informações dentro do sistema.
                </p>
              </span>
            </section>
          </div>
          <div className="flex-shrink-0 w-full relative justify-items-center">
            <FormLogin />
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
