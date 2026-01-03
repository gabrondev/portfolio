import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import IrAoTopo from "@/components/shared/IrAoTopo";


export const metadata: Metadata = {
  title: "GabronDEV",
  description: "Portfólio GabronDEV",
};

const fonte = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fonte.className} antialiased`}>
        {children}
        <IrAoTopo/>
      </body>
    </html>
  );
}
