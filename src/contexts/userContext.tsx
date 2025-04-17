"use client";
import { UserProps } from "@/types/generic";
import { decodeJwt } from "@/utils/generic";
import { createContext, ReactNode } from "react";

interface UserProviderProps {
  children: ReactNode;
  token: string;
}

export const UserContext = createContext<UserProps>({
  name: "",
  email: "",
  roles: [],
});

export const UserProvider = ({ children, token }: UserProviderProps) => {
  const decode = decodeJwt(token);
  const user: UserProps = decode?.user;
  return (
    <UserContext.Provider
      value={{
        ...user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
