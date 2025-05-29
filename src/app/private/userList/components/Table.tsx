import React, { useContext } from "react";
import { UserProps } from "@/types/generic";
import EditIcon from "@/edit-icon.svg";
import Image from "next/image";
import { TableProps } from "./types";
import { PaginationComponent } from "@/components/Pagination";
import { UserListContext } from "@/contexts/userListContext";

const Table: React.FC<TableProps> = ({ handleUseredit }) => {

    const {data, refetch} = useContext(UserListContext)

  return (
    <div className="overflow-auto text-center max-w-3xl flex-col rounded-2xl bg-[#f1f1f1] dark:bg-[#18181B] w-full sm:flex sm:justify-center drop-shadow-xl  p-4 pt-0">
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
          {data.users?.map((user: UserProps, index: number) => (
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
      <PaginationComponent />
    </div>
  );
};

export default Table;
