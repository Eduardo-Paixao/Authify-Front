"use client";
import { GET_USERS } from "@/graphql/queries/userQueries";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import AddUserIcon from "@/undraw_updates_wm27.svg";

import { useEffect, useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { UserProps } from "@/types/generic";
import Table from "./components/Table";
import EditUserModal from "./components/EditUserModal";

export default function userList() {
  const { data, refetch } = useQuery(GET_USERS);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<UserProps | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  useClickOutside(modalRef, () => setIsOpen(false), isOpen);

  const handleUseredit = (user: UserProps) => {
    setUser(user);
    setIsOpen(true);
  };

  useEffect(() => {
    refetch()
  }, []);

  if (!data) {
    return (
      <div className="flex flex-col justify-center items-center gap-5 mt-5">
        <strong className="text-3xl">
          Adicione usuários no sistema para poder gerencialos
        </strong>
        <Image src={AddUserIcon} alt="lista de usuários vazia" />
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-center w-full mt-5 relative">
        <Table handleUseredit={handleUseredit} users={data.users} />
        <EditUserModal
          isOpen={isOpen}
          refetch={refetch}
          setIsOpen={setIsOpen}
          user={user}
        />
      </div>
    </>
  );
}
