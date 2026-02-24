import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Highlights from "@/components/Highlights";
import Gallery from "@/components/Gallery";
import Experiences from "@/components/Experiences";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Highlights />
      <section id="gallery">
        <Gallery />
      </section>
      <Experiences />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
