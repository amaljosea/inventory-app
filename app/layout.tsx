import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { InventoryProvider } from "@/context/InventoryContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Inventory App",
  description: "Generated by Amal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <InventoryProvider>{children}</InventoryProvider>
      </body>
    </html>
  );
}
