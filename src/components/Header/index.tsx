"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BarIcon from "@/bar-icon.svg";
import AddUserIcon from "@/add-user-icon.svg";
import LogOut from "@/log-out-icon.svg";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const isPageBackgroud = pathname?.startsWith("/private/userList");
  
  return (
    <header className=" bg-[#27272A] w-full flex justify-between px-6 items-end">
      <strong className="text-2xl py-6">Authfy</strong>
      <div className="flex gap-4">
        <section className={`${isPageBackgroud?'bg-[#52525B]':'bg-[#27272A]'} p-4 rounded-t-xl flex gap-4 hover:brightness-120`}>
          <Link href={"/private/userList"} className="text-2xl">
            Lista de usuários
          </Link>
          <Image alt="" src={BarIcon} />
        </section>
        
        <section className={`${!isPageBackgroud?'bg-[#52525B]':'bg-[#27272A]'} p-4 rounded-t-xl flex gap-4 hover:brightness-120 `}>
          <Link href={"/private/addUser"} className="text-2xl">
            Cadastro de usuários
          </Link>
          <Image alt="" src={AddUserIcon} />
        </section>
      </div>
      <strong className="text-2xl py-6 flex gap-4 items-center">
        Sair <Image alt="" src={LogOut} />
      </strong>
    </header>
  );
};

export default Header;
