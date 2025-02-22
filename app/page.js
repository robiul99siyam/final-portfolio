import About from "@/components/main/About";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Skills from "@/components/main/Skills";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
        <About />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
