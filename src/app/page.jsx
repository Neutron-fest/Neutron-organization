import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Sponsors from "./components/sponsors";
import Gallery from "./components/gallery";
import Team from "./components/team";
import Impact from "./components/impact";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Navbar />
      <Sponsors />
      <Gallery />
      <Team />
      <Impact />
      <Contact />
      <Footer />
    </>
  );
}
