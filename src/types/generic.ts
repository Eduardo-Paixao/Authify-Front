import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { Dispatch, ReactNode, SetStateAction } from "react";

export type ProviderProps = {
  children: ReactNode;
};

export interface UserProps {
  name: string;
  email: string;
  roles: {
    name: "admin" | "write" | "read";
    id: number;
  }[];
}
export interface UserPaginationProps {
  users: UserProps[];
  hasMore: boolean;
  totalCount: number;
}

export interface UserPaginationContextProps{
  refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<any>>
  setPage: Dispatch<SetStateAction<number>>
  data:UserPaginationProps
}