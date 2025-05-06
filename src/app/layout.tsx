"use client";
import { Kdam_Thmor_Pro } from "next/font/google";
import { ApolloProvider } from "@apollo/client";
import "./globals.css";
import client from "@/lib/apollo";
import { ToastContextProvider } from "@/contexts/ToastfyContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import ImgeBackground from "@/components/ImgeBackground";
import { useTheme } from "@/hooks/useTheme";
import { usePathname } from "next/navigation";

const KdamThmorPro = Kdam_Thmor_Pro({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { theme, toggleTheme } = useTheme();
  const isPrivatePage = usePathname().startsWith("/private");

  return (
    <html lang="pt-BR" className={KdamThmorPro.className}>
      <body>
        <ApolloProvider client={client}>
          <ToastContextProvider>
            {!isPrivatePage && (
              <>
                <div className="absolute top-4 right-4 z-10">
                  <ToggleThemeButton toggleTheme={toggleTheme} />
                </div>
                <ImgeBackground theme={theme === "dark"} />
              </>
            )}
            {children}
            <ToastContainer theme="dark" />
          </ToastContextProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}
