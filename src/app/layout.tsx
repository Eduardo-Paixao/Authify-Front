"use client";
import { ApolloProvider } from "@apollo/client";
import "./globals.css";
import client from "@/lib/apollo";
import { ToastContextProvider } from "@/contexts/ToastfyContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 
// import "../src/styles/toastify-custom.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ApolloProvider client={client}>
          <ToastContextProvider>{children}
          <ToastContainer theme="dark"/>
          </ToastContextProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
