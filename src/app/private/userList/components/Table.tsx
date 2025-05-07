import React from "react";
import { UserProps } from "@/types/generic";
import EditIcon from "@/edit-icon.svg";
import Image from "next/image";
import { TableProps } from "./types";

const Table: React.FC<TableProps> = ({ users, handleUseredit }) => {
  return (
    <div className="overflow-auto w-full sm:flex sm:justify-center">
      <table className="w-full bg-[#e1e1e1] dark:bg-[#18181B] max-w-3xl text-center border-separate border-spacing-y-4 rounded-2xl p-4 pt-0 drop-shadow-xl">
        <thead className="text-[#553a93] dark:text-[#ffffff]">
          <tr>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">E-mail</th>
            <th className="px-4 py-2">Permissão</th>
            <th className="px-4 py-2">Editar</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user: UserProps, index: number) => (
            <tr className="bg-[#553a93] dark:bg-[#27272A] hover:brightness-125 " key={index}>
              <td className="px-4 py-3 rounded-l-lg overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]">
                {user.name}
              </td>
              <td className="px-4 py-3 overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px]">
                {user.email}
              </td>
              <td className="px-4 py-3">{user.roles[0].name}</td>
              <td className="px-4 py-3 rounded-r-lg ">
                <button
                  type="button"
                  className="cursor-pointer"
                  onClick={() => handleUseredit(user)}
                >
                  <Image src={EditIcon} alt="editar" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
