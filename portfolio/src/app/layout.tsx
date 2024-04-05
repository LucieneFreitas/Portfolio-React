
import { Poppins } from "next/font/google";
import "./globals.scss";

const inter = Poppins({ 
  subsets: ["latin"],
  weight: ['400', '500', '600'] 
});

export const metadata = {
  title: "Luciene Freitas",
  description: "Luciene Freitas is a developer front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
