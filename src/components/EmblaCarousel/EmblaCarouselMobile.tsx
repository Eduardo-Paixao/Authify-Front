"use client";
import React from "react";

import useEmblaCarousel from "embla-carousel-react";

import DotButton from "./DotButton/intex";
import { ArrowButtonNext, ArrowButtonPrev } from "./ArrowButton";
import Image from "next/image";
import ArrowReactIcongif from "@/arrow-react-icon.gif";
import FormLogin from "@/app/Login/components/FormLogin";

export const EmblaCarouselMobile = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
  });

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 text-[#000]">
          <div className="flex-shrink-0 w-full justify-items-center">
            <strong className="w-full flex p-4 justify-center text-xl dark:text-[#fff]">
              Tecnologias Utilizadas
            </strong>
            <section className="w-screen h-[calc(100vh-182px)] max-w-[535px] p-4 flex flex-col items-center justify-center gap-4 bg-[#F2ECFF]/85 border-4 border-[#8257E5] rounded-[24px]">
              <div className="text-base w-screen h-screen relative max-w-[335px] max-h-[485px]">
                <section>
                  <span className="flex gap-2 absolute top-[15%] left-[15%] border-[#8257E5] rounded-2xl border-3 p-3">
                    Front-End
                  </span>
                  <span className="flex gap-2 absolute top-0 left-[5%]">
                    React
                  </span>
                  <Image
                    alt="ArrowReactIcon"
                    className="absolute top-[5%] left-[3%] w-[20%] rotate-124"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute left-0 top-[35%]">
                    TypeScript
                  </span>
                  <Image
                    alt="ArrowTypeScriptIcon"
                    className="absolute top-[26%] left-0 w-[20%] rotate-76 -scale-x-100"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute top-[35%] right-[45%]">
                    Next.js
                  </span>
                  <Image
                    alt="ArrowNextIcon"
                    className="absolute top-[27%] right-[44%] w-[18%] -rotate-55"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute top-[26%] left-[55%]">
                    TailwindCSS
                  </span>
                  <Image
                    alt="ArrowTailwindCSSIcon"
                    className="absolute top-[18%] right-[35%] w-[20%] rotate-257"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute top-[4%] left-[51%]">
                    GraphQL
                  </span>
                  <Image
                    alt="ArrowGraphQLIcon"
                    className="absolute top-[5%] right-[46%] w-[20%] rotate-190"
                    src={ArrowReactIcongif}
                  />
                </section>
                <section >
                  <span className="flex gap-2 absolute bottom-[15%] right-[30%] border-[#8257E5] rounded-2xl border-3 p-3">
                    Back-End
                  </span>
                  <span className="flex gap-2 absolute bottom-[36%] right-[52%]">
                    Node.js
                  </span>
                  <Image
                    alt="ArrowNodeIcon"
                    className="absolute bottom-[27%] right-[51%] w-[18%] rotate-134"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute bottom-[1%] left-[27%]">
                    TypeScript
                  </span>
                  <Image
                    alt="ArrowTypeScriptIcon"
                    className="absolute bottom-[5%] right-[52%] w-[20%] rotate-65 -scale-x-100"
                    src={ArrowReactIcongif}
                  />

                  <span className="flex gap-2 absolute bottom-[1%] right-[15%]">
                    Prisma
                  </span>
                  <Image
                    alt="ArrowPrismaIcon"
                    className="absolute bottom-[6%] right-[17%] w-[20%] -rotate-66"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute bottom-[11%] right-[1%]">
                    Postgres
                  </span>
                  <Image
                    alt="ArrowPostgresIcon"
                    className="absolute bottom-[15%] right-[13%] w-[20%] rotate-269"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute bottom-[32%] right-[13%]">
                    GraphQL
                  </span>
                  <Image
                    alt="ArrowGraphQLIcon"
                    className="absolute bottom-[27%] right-[28%] w-[20%] rotate-190"
                    src={ArrowReactIcongif}
                  />
                  <span className="flex gap-2 absolute bottom-[15%] left-[17%] ">
                    JWT
                  </span>
                  <Image
                    alt="ArrowJWTIcon"
                    className="absolute bottom-[17%] left-[24%] w-[17%] rotate-120 -scale-x-100"
                    src={ArrowReactIcongif}
                  />
                </section>
              </div>
            </section>
          </div>
          <div className="flex-shrink-0 w-full relative justify-items-center">
            <strong className="w-full flex p-4 justify-center text-xl dark:text-[#fff]">
              O que é o Authfy?
            </strong>
            <section className="w-screen h-[calc(100vh-182px)] max-w-[535px] text-xl/8 p-4 flex flex-col justify-center gap-4 bg-[#F2ECFF]/85 border-4 border-[#8257E5] rounded-[24px]">
              <span>
                <p>O Authfy é uma solução completa para o gerenciamento de
                usuários, oferecendo controle avançado de permissões e níveis de
                acesso.</p><br />
                <p>Com uma interface intuitiva e eficiente, a plataforma
                permite que administradores configurem e gerenciem facilmente os
                acessos dos usuários, garantindo segurança, organização e
                flexibilidade dentro do sistema.</p>
              </span>
            </section>
          </div>
          <div className="flex-shrink-0 w-full relative justify-items-center">
            <strong className="w-full flex p-4 justify-center text-xl dark:text-[#fff]">
              Funcionalidades Principais
            </strong>
            <section className="w-screen h-[calc(100vh-182px)] max-w-[535px] text-lg/8 p-4 flex flex-col justify-center gap-4 bg-[#F2ECFF]/85 border-4 border-[#8257E5] rounded-[24px]">
            <div className="overflow-auto">
              <p>
                <strong>
                  <span className="text-[#8257E5]">{"<>"}</span> Administração
                  de Usuários
                </strong>{" "}
                – O usuário com permissão de admin pode cadastrar novos usuários
                e promover outros usuários a administradores.
              </p><br />
              <p>
                <strong>
                  <span className="text-[#8257E5]">{"<>"}</span> Busca e
                  Listagem
                </strong>{" "}
                – Usuários do tipo user podem visualizar e pesquisar outros
                usuários no sistema.
              </p><br />
              <p>
                <strong>
                  <span className="text-[#8257E5]">{"<>"}</span> Edição de
                  Informações
                </strong>{" "}
                – Usuários com permissão de editor podem modificar determinados
                atributos de outros usuários, como o nome.
              </p><br />
              <p>
                <strong>
                  <span className="text-[#8257E5]">{"<>"}</span>{" "}
                </strong>
                Com o Authfy, a gestão de usuários se torna mais simples, segura
                e organizada, garantindo um controle preciso sobre quem pode
                acessar e modificar informações dentro do sistema.
              </p>
            </div>
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
