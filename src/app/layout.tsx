"use client";
import { Kdam_Thmor_Pro } from "next/font/google";
import { ApolloProvider } from "@apollo/client";
import "./globals.css";
import client from "@/lib/apollo";
import { ToastContextProvider } from "@/contexts/ToastfyContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const KdamThmorPro = Kdam_Thmor_Pro({
  weight:"400",
  subsets:["latin"]
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR" className={KdamThmorPro.className}>
      <body>
        <ApolloProvider client={client}>
          <ToastContextProvider>
            
            {children}
            <ToastContainer theme="dark" />
          </ToastContextProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
