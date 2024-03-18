import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/header/header";
import Footer from "@/components/footer/Footer";
import Hero from "./hero/page";
import Product from "./produtos/page";

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
