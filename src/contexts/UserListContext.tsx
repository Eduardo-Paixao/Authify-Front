"use client";
import { GET_USERS } from "@/graphql/queries/userQueries";
import {
  UserPaginationContextProps,
  UserPaginationProps,
  UserProps,
} from "@/types/generic";
import { decodeJwt } from "@/utils/generic";
import { useLazyQuery, useQuery } from "@apollo/client";
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

export const UserListContext = createContext<UserPaginationContextProps>(
  {} as UserPaginationContextProps
);

export const UserListProvider = ({ children }: UserProviderProps) => {
  const [page, setPage] = useState(1);
  const limit = 3;
  const { data, loading, refetch } = useQuery(GET_USERS,{
    variables: { page, limit },
  });

  
  const totalPages = Math.ceil(data?.paginatedUsers?.totalCount / limit);
  const hasMore = page < totalPages;
  const hasPrevious = page > 1;

  useEffect(() => {
    refetch({
      variables: { page, limit },
    });
  }, [page]);

  return (
    <UserListContext.Provider
      value={{
        page,
        hasMore,
        totalPages,
        hasPrevious,
        setPage,
        refetch,
        data: data?.paginatedUsers,
        loading,
      }}
    >
      {children}
    </UserListContext.Provider>
  );
};
