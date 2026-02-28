"use client";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import Image from "next/image";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { AnimatedText } from "@/components/ui/animated-heading";
import { useState, useEffect } from "react";

// Logo component wrapper for images
function LogoImage({ src, name }) {
  return (
    <img
      src={src}
      alt={name}
      className="h-32 w-32 max-h-[90%] max-w-[90%] object-contain md:h-48 md:w-48 lg:h-64 lg:w-64"
    />
  );
}

export default function Sponsors() {
  const [columnCount, setColumnCount] = useState(5);

  useEffect(() => {
    const updateColumnCount = () => {
      setColumnCount(window.innerWidth < 768 ? 2 : 5);
    };

    updateColumnCount();
    window.addEventListener("resize", updateColumnCount);
    return () => window.removeEventListener("resize", updateColumnCount);
  }, []);

  const sponsorLogos = [
    {
      name: "5Monkey",
      id: 1,
      img: () => <LogoImage src="/sponsors/5Monkey.png" name="5Monkey" />,
    },
    {
      name: "AIESEC",
      id: 2,
      img: () => <LogoImage src="/sponsors/AIESEC.png" name="AIESEC" />,
    },
    {
      name: "Adobe",
      id: 3,
      img: () => <LogoImage src="/sponsors/Adobe.png" name="Adobe" />,
    },
    {
      name: "Apple",
      id: 4,
      img: () => <LogoImage src="/sponsors/Apple.svg" name="Apple" />,
    },
    {
      name: "BR",
      id: 5,
      img: () => <LogoImage src="/sponsors/BR.png" name="BR" />,
    },
    {
      name: "BluePrint",
      id: 6,
      img: () => <LogoImage src="/sponsors/BluePrint.svg" name="BluePrint" />,
    },
    {
      name: "BlueTurtle",
      id: 7,
      img: () => <LogoImage src="/sponsors/BlueTurtle.png" name="BlueTurtle" />,
    },
    {
      name: "CosaNostra",
      id: 8,
      img: () => <LogoImage src="/sponsors/CosaNostra.svg" name="CosaNostra" />,
    },
    {
      name: "Cut&Style",
      id: 9,
      img: () => <LogoImage src="/sponsors/Cut&Style.png" name="Cut&Style" />,
    },
    {
      name: "Domino's",
      id: 10,
      img: () => <LogoImage src="/sponsors/Domino's.png" name="Domino's" />,
    },
    {
      name: "Elica",
      id: 11,
      img: () => <LogoImage src="/sponsors/Elica.png" name="Elica" />,
    },
    {
      name: "Farmley",
      id: 12,
      img: () => <LogoImage src="/sponsors/Farmley.png" name="Farmley" />,
    },
    {
      name: "Ganpati",
      id: 13,
      img: () => <LogoImage src="/sponsors/Ganpati.png" name="Ganpati" />,
    },
    {
      name: "Google",
      id: 14,
      img: () => <LogoImage src="/sponsors/Google.png" name="Google" />,
    },
    {
      name: "Haldiram",
      id: 15,
      img: () => <LogoImage src="/sponsors/Haldiram.png" name="Haldiram" />,
    },
    {
      name: "Jrny",
      id: 16,
      img: () => <LogoImage src="/sponsors/Jrny.png" name="Jrny" />,
    },
    {
      name: "KPMG",
      id: 17,
      img: () => <LogoImage src="/sponsors/KPMG.png" name="KPMG" />,
    },
    {
      name: "Krafton",
      id: 18,
      img: () => <LogoImage src="/sponsors/Krafton.png" name="Krafton" />,
    },
    {
      name: "MatarMedia",
      id: 19,
      img: () => <LogoImage src="/sponsors/MatarMedia.svg" name="MatarMedia" />,
    },
    {
      name: "Nestle",
      id: 20,
      img: () => <LogoImage src="/sponsors/Nestle.png" name="Nestle" />,
    },
    {
      name: "Pizzahut",
      id: 21,
      img: () => <LogoImage src="/sponsors/Pizzahut.png" name="Pizzahut" />,
    },
    {
      name: "RedBull",
      id: 22,
      img: () => <LogoImage src="/sponsors/RedBull.png" name="RedBull" />,
    },
    {
      name: "SSDiamonds",
      id: 23,
      img: () => <LogoImage src="/sponsors/SSDiamonds.png" name="SSDiamonds" />,
    },
    {
      name: "Snacks",
      id: 24,
      img: () => <LogoImage src="/sponsors/Snacks.png" name="Snacks" />,
    },
    {
      name: "Stock",
      id: 25,
      img: () => <LogoImage src="/sponsors/Stock.png" name="Stock" />,
    },
    {
      name: "Varsity",
      id: 26,
      img: () => <LogoImage src="/sponsors/Varsity.png" name="Varsity" />,
    },
    {
      name: "Unstop",
      id: 27,
      img: () => <LogoImage src="/sponsors/unstop.png" name="Unstop" />,
    },
  ];

  // Split logos into two groups for the two rows
  const firstRowLogos = sponsorLogos.filter((_, index) => index % 2 === 0);
  const secondRowLogos = sponsorLogos.filter((_, index) => index % 2 === 1);

  return (
    <section
      id="sponsors"
      className="relative w-screen min-h-screen bg-black flex flex-col justify-center items-center py-20 overflow-hidden"
    >
      <div className="absolute inset-0">
        <FallingPattern
          color="#ffffff"
          backgroundColor="#000000"
          duration={150}
          blurIntensity="1em"
          density={1}
        />
      </div>
      <div className="relative z-10 w-full flex flex-col items-center">
        <AnimatedText
          className="text-white text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-center mb-16"
          highlightColor="linear-gradient(135deg, #18181b 0%, #3f3f46 50%, #71717a 100%)"
        >
          OUR SPONSORS
        </AnimatedText>
        <LogoCarousel columnCount={columnCount} logos={firstRowLogos} />
        <div className="mt-8">
          <LogoCarousel columnCount={columnCount} logos={secondRowLogos} />
        </div>
      </div>
    </section>
  );
}
