import Header from "@/components/Header";
import { CurrentUserProvider } from "@/contexts/CurrentUserContext";
import { UserListProvider } from "@/contexts/UserListContext";
import { cookies } from "next/headers";
import React, { ReactNode } from "react";

const PrivateLayout = async ({ children }: { children: ReactNode }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || "";
  return (
    <>
      <CurrentUserProvider token={token}>
        <UserListProvider>
          <Header />
          <main>{children}</main>
        </UserListProvider>
      </CurrentUserProvider>
    </>
  );
};

export default PrivateLayout;
