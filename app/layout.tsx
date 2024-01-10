import "./globals.css";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { Inter } from "next/font/google";
import Navbar from "./navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          appearance="light"
          accentColor="gray"
          grayColor="sage"
          radius="large"
          scaling="105%"
        >
          <Navbar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
