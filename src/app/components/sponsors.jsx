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
      name: "Coolberg",
      id: 1,
      img: () => <LogoImage src="/sponsors/logos/Coolberg Logo_white (1) 1.png" name="Coolberg" />,
    },
    {
      name: "FAST-&-UP",
      id: 2,
      img: () => <LogoImage src="/sponsors/logos/FAST-&-UP-LOGO-White 1.png" name="FAST-&-UP" />,
    },
    {
      name: "Adobe",
      id: 3,
      img: () => <LogoImage src="/sponsors/logos/Group 102.png" name="Adobe" />,
    },
    {
      name: "Apple",
      id: 4,
      img: () => <LogoImage src="/sponsors/logos/Frame.png" name="Apple" />,
    },
    {
      name: "BR",
      id: 5,
      img: () => <LogoImage src="/sponsors/logos/Group 104.png" name="BR" />,
    },
    {
      name: "BluePrint",
      id: 6,
      img: () => <LogoImage src="/sponsors/logos/Mask group-5.png" name="BluePrint" />,
    },
    {
      name: "BlueTurtle",
      id: 7,
      img: () => <LogoImage src="/sponsors/logos/image 43.png" name="BlueTurtle" />,
    },
    {
      name: "CosaNostra",
      id: 8,
      img: () => <LogoImage src="/sponsors/logos/Mask group-4.png" name="CosaNostra" />,
    },
    {
      name: "Domino's",
      id: 10,
      img: () => <LogoImage src="/sponsors/logos/Group 110.png" name="Domino's" />,
    },
    {
      name: "Farmley",
      id: 12,
      img: () => <LogoImage src="/sponsors/logos/Group 105.png" name="Farmley" />,
    },
    {
      name: "Ganpati",
      id: 13,
      img: () => <LogoImage src="/sponsors/logos/Group 107.png" name="Ganpati" />,
    },
    {
      name: "Google Cloud",
      id: 14,
      img: () => <LogoImage src="/sponsors/logos/Group 101.png" name="Google Cloud" />,
    },
    {
      name: "Haldiram",
      id: 15,
      img: () => <LogoImage src="/sponsors/logos/Group 108.png" name="Haldiram" />,
    },
    {
      name: "Jrny",
      id: 16,
      img: () => <LogoImage src="/sponsors/logos/image 51.png" name="Jrny" />,
    },
    {
      name: "KPMG",
      id: 17,
      img: () => <LogoImage src="/sponsors/logos/Group 103.png" name="KPMG" />,
    },
    {
      name: "Krafton",
      id: 18,
      img: () => <LogoImage src="/sponsors/logos/Group 111.png" name="Krafton" />,
    },
    {
      name: "MatarMedia",
      id: 19,
      img: () => <LogoImage src="/sponsors/logos/Frame-1.png" name="MatarMedia" />,
    },
    {
      name: "Nestle",
      id: 20,
      img: () => <LogoImage src="/sponsors/logos/image 39.png" name="Nestle" />,
    },
    {
      name: "Pizzahut",
      id: 21,
      img: () => <LogoImage src="/sponsors/logos/Group 106.png" name="Pizzahut" />,
    },
    {
      name: "RedBull",
      id: 22,
      img: () => <LogoImage src="/sponsors/logos/image 58.png" name="RedBull" />,
    },
    {
      name: "SSDiamonds",
      id: 23,
      img: () => <LogoImage src="/sponsors/logos/image 46.png" name="SSDiamonds" />,
    },
    {
      name: "Snacks",
      id: 24,
      img: () => <LogoImage src="/sponsors/logos/image 50.png" name="Snacks" />,
    },
    {
      name: "Stock",
      id: 25,
      img: () => <LogoImage src="/sponsors/logos/Group 100.png" name="Stock" />,
    },
    {
      name: "Varsity",
      id: 26,
      img: () => <LogoImage src="/sponsors/logos/Group 109.png" name="Varsity" />,
    },
    {
      name: "Unstop",
      id: 27,
      img: () => <LogoImage src="/sponsors/logos/Frame 2.png" name="Unstop" />,
    },
    {
      name: "SNPPNP",
      id: 28,
      img: () => <LogoImage src="/sponsors/logos/i 3.png" name="SNPPNP" />,
    },
    {
      name: "AIESEC",
      id: 29,
      img: () => <LogoImage src="/sponsors/logos/image 33.png" name="AIESEC" />,
    },
    {
      name: "Qelica",
      id: 30,
      img: () => <LogoImage src="/sponsors/logos/image 44.png" name="Qelica" />,
    },
    {
      name: "Ease My Trip",
      id: 31,
      img: () => <LogoImage src="/sponsors/logos/image 116.png" name="Ease My Trip" />,
    },
    {
      name: "Jimmy's",
      id: 32,
      img: () => <LogoImage src="/sponsors/logos/image 167.png" name="Jimmy's" />,
    },
    {
      name: "One Prastha",
      id: 33,
      img: () => <LogoImage src="/sponsors/logos/Mask group-1.png" name="One Prastha" />,
    },
    {
      name: "Plum",
      id: 34,
      img: () => <LogoImage src="/sponsors/logos/Mask group-2.png" name="Plum" />,
    },
    {
      name: "Ramada",
      id: 35,
      img: () => <LogoImage src="/sponsors/logos/Mask group-3.png" name="Ramada" />,
    },
    {
      name: "Kronus",
      id: 36,
      img: () => <LogoImage src="/sponsors/logos/realme P3 Ultra_Black 1.png" name="Kronus" />,
    },
    {
      name: "Realme",
      id: 36,
      img: () => <LogoImage src="/sponsors/logos/Mask group.png" name="Kronus" />,
    },
    {
      name: "Monkey",
      id: 37,
      img: () => <LogoImage src="/sponsors/logos/Screenshot 2025-03-01 at 10.52.35 PM 1.png" name="Monkey" />,
    },
  ];

  // Split logos into two groups for the two rows
  const firstRowLogos = sponsorLogos.filter((_, index) => index % 2 === 0);
  const secondRowLogos = sponsorLogos.filter((_, index) => index % 2 === 1);

  return (
    <section
      id="sponsors"
      className="relative w-full min-h-screen bg-black flex flex-col justify-center items-center overflow-hidden"
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
          className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-center mb-16"
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
