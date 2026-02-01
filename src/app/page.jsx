import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Sponsors from "./components/sponsors";
import Gallery from "./components/gallery";
import Team from "./components/team";
import Impact from "./components/impact";
import Contact from "./components/contact";
import Footer from "./components/footer-new";

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <About />
      <Sponsors />
      <Gallery />
      <Team />
      <Impact />
      <Contact />
      <Footer />
    </>
  );
}
