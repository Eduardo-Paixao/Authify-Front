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
            <section className="w-full h-[calc(100vh-275px)] p-4 flex flex-col items-center gap-4 bg-[#F2ECFF]/85 border-4 border-[#8257E5] rounded-[73px]">
              <div className="gap-5 text-4xl flex w-full max-w-[1220px] h-screen max-h-[647px] justify-between">
                <section className="flex flex-col gap-2 relative w-full">
                  <span className="flex gap-2 absolute top-[50%] left-[15%] border-[#8257E5] rounded-2xl border-4 p-3">
                    Front-End
                  </span>
                  <span className="flex gap-2 absolute top-[30%] left-[5%]">
                    React
                  </span>
                  <Image
                    alt="ArrowReactIcon"
                    className="absolute top-[36%] right-[77%] w-[20%] rotate-124"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute bottom-[20%]">
                    TypeScript
                  </span>
                  <Image
                    alt="ArrowTypeScriptIcon"
                    className="absolute bottom-[26%] right-[80%] w-[20%] rotate-76 -scale-x-100"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute bottom-[20%] right-[45%]">
                    Next.js
                  </span>
                  <Image
                    alt="ArrowNextIcon"
                    className="absolute bottom-[26%] right-[44%] w-[18%] -rotate-55"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute top-[59%] left-[55%]">
                    TailwindCSS
                  </span>
                  <Image
                    alt="ArrowTailwindCSSIcon"
                    className="absolute top-[48%] right-[35%] w-[20%] rotate-257"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute top-[38%] left-[50%]">
                    GraphQL
                  </span>
                  <Image
                    alt="ArrowGraphQLIcon"
                    className="absolute top-[38%] right-[46%] w-[20%] rotate-190"
                    src={ArrowReactIcongif}
                  />
                </section>
                <section className="flex flex-col gap-2 relative w-full">
                  <span className="flex gap-2 absolute top-[30%] right-[30%] border-[#8257E5] rounded-2xl border-4 p-3">
                    Back-End
                  </span>
                  <span className="flex gap-2 absolute top-[10%] left-[30%]">
                    Node.js
                  </span>
                  <Image
                    alt="ArrowNodeIcon"
                    className="absolute top-[17%] left-[30%] w-[18%] rotate-135"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute bottom-[40%] left-[15%]">
                    TypeScript
                  </span>
                  <Image
                    alt="ArrowTypeScriptIcon"
                    className="absolute bottom-[46%] left-[27%] w-[20%] rotate-65 -scale-x-100"
                    src={ArrowReactIcongif}
                  />

                  <span className="flex gap-2 absolute bottom-[40%] right-[18%]">
                    Prisma
                  </span>
                  <Image
                    alt="ArrowPrismaIcon"
                    className="absolute bottom-[46%] right-[17%] w-[20%] -rotate-66"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute top-[37%] right-0">
                    Postgres
                  </span>
                  <Image
                    alt="ArrowPostgresIcon"
                    className="absolute top-[28%] right-[12%] w-[20%] rotate-250"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute top-[18%] right-[10%]">
                    GraphQL
                  </span>
                  <Image
                    alt="ArrowGraphQLIcon"
                    className="absolute top-[18%] right-[30%] w-[20%] rotate-190"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute top-[40%] left-[20%] ">
                    JWT
                  </span>
                  <Image
                    alt="ArrowJWTIcon"
                    className="absolute top-[31%] left-[22%] w-[17%] rotate-120 -scale-x-100"
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
            <section className="w-full h-[calc(100vh-275px)] flex items-center text-line text-5xl/18 p-4 bg-[#F2ECFF]/85 border-4 border-[#8257E5] rounded-[73px]">
              <span>
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
            <section className="w-full h-[calc(100vh-275px)] justify-evenly items-center text-4xl/11 p-8  flex flex-col bg-[#F2ECFF]/85 border-4 border-[#8257E5] rounded-[73px]">
              <p>
                <strong>
                  <span className="text-[#8257E5]">{"<>"}</span> Administração
                  de Usuários
                </strong>{" "}
                – O usuário com permissão de admin pode cadastrar novos usuários
                e promover outros usuários a administradores.
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
                – Usuários com permissão de editor podem modificar determinados
                atributos de outros usuários, como o nome.
              </p>
              <p>
                <strong>
                  <span className="text-[#8257E5]">{"<>"}</span>{" "}
                </strong>
                Com o Authfy, a gestão de usuários se torna mais simples, segura
                e organizada, garantindo um controle preciso sobre quem pode
                acessar e modificar informações dentro do sistema.
              </p>
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
