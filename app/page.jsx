import { Header } from "@/components/header/header";
import Hero from "@/components/hero/hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
    </main>
  );
}
