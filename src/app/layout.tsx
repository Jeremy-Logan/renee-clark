import type { Metadata } from "next";
import { Inter, Crimson_Text } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

export const metadata: Metadata = {
  title: "Renee Clark - Ecotherapy and Ecopsychology",
  description: "Transforming Lives Through Ecopsychology and Ecotherapy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[{'sans': inter.className}, {'serif': crimsonText.className}].join(' ')}>
        <Nav />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
