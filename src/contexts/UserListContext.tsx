"use client";
import { GET_USERS } from "@/graphql/queries/userQueries";
import { UserPaginationContextProps, UserPaginationProps, UserProps } from "@/types/generic";
import { decodeJwt } from "@/utils/generic";
import { useQuery } from "@apollo/client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface UserProviderProps {
  children: ReactNode;
}

export const UserListContext = createContext<UserPaginationContextProps>({} as UserPaginationContextProps);

export const UserListProvider = ({ children }: UserProviderProps) => {
  const [page, setPage] = useState(1);
  const { data, refetch } = useQuery(GET_USERS, {
    variables: {
      page: page,
      limit: 3,
    },
  });

  return (
    <UserListContext.Provider
      value={{
        setPage,
        refetch,
        data: data.paginatedUsers,
      }}
    >
      {children}
    </UserListContext.Provider>
  );
};
