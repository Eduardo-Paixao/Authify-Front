import React, { useContext } from "react";
import { UserProps } from "@/types/generic";
import EditIcon from "@/edit-icon.svg";
import Image from "next/image";
import { TableProps } from "./types";
import { PaginationComponent } from "@/components/Pagination";
import { userListContext } from "@/contexts/userListContext";

const Table: React.FC<TableProps> = ({ handleUseredit }) => {
  const { data, loading } = useContext(userListContext);
  return (
    <div className="overflow-auto text-center max-w-3xl flex-col rounded-2xl bg-[#f1f1f1] dark:bg-[#18181B] w-full flex drop-shadow-xl  p-4 pt-0 min-h-[334px] justify-between">
      <table className="w-full border-separate border-spacing-y-4 ">
        <thead className="text-[#553a93] dark:text-[#ffffff]">
          <tr>
            <th className="px-4 py-2">Nome</th>
            <th className="px-4 py-2">E-mail</th>
            <th className="px-4 py-2">Permissão</th>
            <th className="px-4 py-2">Editar</th>
          </tr>
        </thead>
        <tbody>
          {data?.users?.map((user: UserProps, index: number) => (
            <tr
              className="bg-[#553a93] dark:bg-[#27272A] hover:brightness-125 "
              key={index}
            >
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
      {loading && !data?.users.length && (
        <div className="flex items-center justify-center gap-4 w-full mb-4">
          <div className="w-8 h-8 border-3 border-[#553a93]/30 border-t-[#553a93] dark:border-white/30 dark:border-t-white rounded-full animate-spin" />
          <p className="text-[#553a93] dark:text-[#ffffff] animate-pulse">
            Carregando...
          </p>
        </div>
      )}
      <PaginationComponent />
    </div>
  );
};

export default Table;
