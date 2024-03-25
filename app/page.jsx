import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";
import Product from "../components/produtos/Products";
import Hero from "@/components/hero/page";
import './globals.css'
import About from "@/components/about/About";

export default function Home() {
  return (
    <ThemeProvider attribute='class' defaltTheme='light'>
        <Header />
          <Hero />
          <About />
          <Product />
        <Footer />
      </ThemeProvider>  
  );
}
