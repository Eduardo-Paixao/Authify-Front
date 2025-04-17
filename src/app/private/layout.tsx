import Header from "@/components/Header";
import { UserProvider } from "@/contexts/userContext";
import { cookies } from "next/headers";
import React, { ReactNode } from "react";

const PrivateLayout =  async({ children }: { children: ReactNode }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value || '';
  return (
    <>
      <UserProvider token={token}>
        <Header />
        <main>{children}</main>
      </UserProvider>
    </>
  );
};

export default PrivateLayout;
