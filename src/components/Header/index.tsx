"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BarIcon from "@/bar-icon.svg";
import AddUserIcon from "@/add-user-icon.svg";
import LogOut from "@/log-out-icon.svg";
import { usePathname } from "next/navigation";
import { useMutation } from "@apollo/client";
import { LOGOUT_USER } from "@/graphql/mutation/userMutation";
import ToggleThemeButton from "../ToggleThemeButton";
import { useTheme } from "@/hooks/useTheme";

const Header = () => {
  const pathname = usePathname();
  const { toggleTheme } = useTheme();
  const [logOutUser] = useMutation(LOGOUT_USER, {
    onError(error) {
      console.log(error);
    },
  });

  const isPageBackgroud = pathname?.startsWith("/private/userList");

  return (
    <header className="bg-[#6141ad] dark:bg-[#27272A] w-full flex justify-between px-6 items-end">
      <strong className="text-sm md:text-xl lg:text-2xl py-6">Authfy</strong>
      <div className="flex gap-4">
        <Link
          href={"/private/userList"}
          className={`${
            isPageBackgroud ? "bg-[#553a93] dark:bg-[#52525B]" : "bg-[#6141ad] dark:bg-[#27272A]"
          } p-4 rounded-t-xl flex gap-4 hover:brightness-120`}
        >
          <p
            className={`${
              isPageBackgroud ? "hidden xs:flex" : "hidden"
            } sm:flex text-sm md:text-xl lg:text-2xl`}
          >
            Lista de usuários
          </p>
          <Image alt="" src={BarIcon} />
        </Link>

        <Link
          href={"/private/addUser"}
          className={`${
            !isPageBackgroud ? "bg-[#553a93] dark:bg-[#52525B]" : "bg-[#6141ad] dark:bg-[#27272A]"
          } p-4 rounded-t-xl flex gap-4 hover:brightness-120`}
        >
          <p
            className={`${
              isPageBackgroud ? "hidden" : "hidden xs:flex"
            } sm:flex text-sm md:text-xl lg:text-2xl`}
          >
            Cadastro de usuários
          </p>
          <Image alt="" src={AddUserIcon} />
        </Link>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <Link
          className="text-sm md:text-xl lg:text-2xl py-6 flex gap-4 items-center cursor-pointer"
          onClick={() => logOutUser()}
          href="/"
        >
          <p className="hidden xs:flex">Sair</p>{" "}
          <Image
            alt=""
            src={LogOut}
            className="max-w-8 md:max-w-10 lg:max-w-11"
          />
        </Link>
        <ToggleThemeButton toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};

export default Header;
