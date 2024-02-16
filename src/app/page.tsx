import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main className="bg-white">
      <Hero/>
      <About/>
      <Approach/>     
      <FAQ/>
    </main>
  );
}
