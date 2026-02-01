"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const section1Ref = useRef(null);
  const section2ContainerRef = useRef(null);
  const section2Ref = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const section1 = section1Ref.current;
    const section2Container = section2ContainerRef.current;
    const section2 = section2Ref.current;

    const textContents = document.querySelectorAll(".panel-text");
    const images = document.querySelectorAll(".panel-image");

    // Set initial state for text animations (only 2nd and 4th panels)
    gsap.set([textContents[1], textContents[3]], {
      y: 50,
      opacity: 0,
    });

    // Set 1st and 3rd panels visible from start
    gsap.set([textContents[0], textContents[2]], {
      y: 0,
      opacity: 1,
    });

    // First horizontal scroll (2 panels)
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: `+=${window.innerWidth * 2}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl1.to(section1, {
      x: -window.innerWidth,
      ease: "none",
    }, 0);

    // Scale up and move first image down
    if (images[0]) {
      tl1.to(images[0], {
        scale: 1.2,
        y: 100,
        ease: "none",
      }, 0);
    }
   
    // Animate second panel text
    tl1.to(textContents[1], {
      y: 0,
      opacity: 1,
      ease: "power2.out",
    }, 0.3);

    // Second horizontal scroll (2 panels)
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: section2Container,
        start: "top top",
        end: `+=${window.innerWidth * 2}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl2.to(section2, {
      x: -window.innerWidth,
      ease: "none",
    }, 0);

    // Scale up and move third image down
    if (images[2]) {
      tl2.to(images[2], {
        scale: 1.2,
        y: 100,
        ease: "none",
      }, 0);
    }

    // Animate fourth panel text
    tl2.to(textContents[3], {
      y: 0,
      opacity: 1,
      ease: "power2.out",
    }, 0.3);

    return () => ScrollTrigger.killAll();
  }, []);

  return (
    <>
      {/* First Horizontal Section */}
      <section
        ref={containerRef}
        id="about"
        className="relative h-screen w-full overflow-hidden bg-black text-white"
      >
        <div
          ref={section1Ref}
          className="relative flex h-full"
          style={{ width: "200vw"}}

        >
          <Panel title="What we are doing" image="/Dummy.jpg">
            Developing reversible cryopreservation systems to eliminate donor
            organ time constraints.
          </Panel>
          <Panel title="Why it matters now" image="/Dummy.jpg">
            Nearly one million people die annually due to organ shortages.
            Logistics — not science — is the bottleneck.
          </Panel>
        </div>
      </section>

      {/* Second Horizontal Section */}
      <section
        ref={section2ContainerRef}
        className="relative h-screen w-full overflow-hidden bg-black text-white"
      >
        <div ref={section2Ref} className="relative flex h-full" style={{ width: "200vw" }}>
          <Panel title="The problem today" image="/Dummy.jpg">
            Hearts and lungs survive only hours. Every delay costs lives.
          </Panel>

          <Panel title="Our approach" image="/Dummy.jpg">
            Cryopreservation turns time from a constraint into a tool.
          </Panel>

          
        </div>
      </section>
    </>
  );
}

function Panel({ title, children, image }) {
  return (
    <div className="panel relative w-screen h-full flex items-center justify-between bg-black px-32 gap-16">
      <div className="panel-text max-w-xl">
        <h2 className="text-7xl font-bold mb-6">{title}</h2>
        <p className="text-md text-gray-300 leading-relaxed">{children}</p>
      </div>
      {image && (
        <div className="relative w-[600px] h-[550px] flex-shrink-0 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="panel-image w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}
