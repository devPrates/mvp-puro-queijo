import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Puro Queijo",
  description: "Website Puro Queijo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" suppressContentEditableWarning>
      <body className={inter.className}>   
      <ThemeProvider attribute='class' defaltTheme='light'>
        {children}
      </ThemeProvider>  
      </body>
    </html>
  );
}
