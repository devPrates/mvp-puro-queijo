import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";
import Product from "../components/produtos/page";
import Hero from "@/components/hero/page";
import './globals.css'

export default function Home() {
  return (
    <ThemeProvider attribute='class' defaltTheme='light'>
        <Header />
          <Hero />
          <Product />
        <Footer />
      </ThemeProvider>  
  );
}
