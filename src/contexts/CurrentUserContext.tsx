"use client";
import { UserProps } from "@/types/generic";
import { decodeJwt } from "@/utils/generic";
import { createContext, ReactNode } from "react";

interface UserProviderProps {
  children: ReactNode;
  token: string;
}

export const currentUserContext = createContext<UserProps>({
  name: "",
  email: "",
  roles: [],
});

export const CurrentUserProvider = ({ children, token }: UserProviderProps) => {
  const decode = decodeJwt(token);
  const user: UserProps = decode?.user;
  return (
    <currentUserContext.Provider
      value={{
        ...user,
      }}
    >
      {children}
    </currentUserContext.Provider>
  );
};
