"use client";
import { GET_USERS } from "@/graphql/queries/userQueries";
import {
  UserPaginationContextProps,
} from "@/types/generic";
import { useQuery } from "@apollo/client";
import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface UserProviderProps {
  children: ReactNode;
}

export const userListContext = createContext<UserPaginationContextProps>(
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
    <userListContext.Provider
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
    </userListContext.Provider>
  );
};
