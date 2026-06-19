import Navbar from "@/components/ui/navbar/Navbar";
import Hero from "@/components/sections/hero/Hero";
import About from "@/components/sections/about/About";
import Skills from "@/components/sections/skills/Skills";
import Experience from "@/components/sections/experience/Experience";
import Projects from "@/components/sections/projects/Projects";
import Contact from "@/components/sections/contact/Contact";
import Footer from "@/components/sections/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </>
  );
}
