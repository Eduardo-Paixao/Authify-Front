import { ReactNode } from "react";

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


