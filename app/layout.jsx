import { Outfit } from "next/font/google";
import "./globals.css";
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Puro Queijo",
  description: "Website Puro Queijo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressContentEditableWarning>
      <body className={outfit.className}>   
        {children}
      </body>
    </html>
  );
}
