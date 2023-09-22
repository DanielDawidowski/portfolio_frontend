import React, { useState, useEffect, useRef } from "react";
import { DotStyles, ScrollbarStyles } from "./ScrollbarStyles";

const MiniScroll: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);
  const scrollbarContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollHeight = document.documentElement.scrollHeight - windowHeight;
      const currentPosition = window.scrollY;
      const percentage = (currentPosition / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollbarStyles
      ref={scrollbarContainerRef}
      initial={{ opacity: 0, y: 20, height: "0%" }}
      animate={{ opacity: 1, y: 0, height: "10%", transition: { duration: 2.5, delay: 1 } }}
    >
      <DotStyles
        top={scrollPercentage}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 2.5, delay: 1 }, scale: [1, 1.5, 1] }}
      />
    </ScrollbarStyles>
  );
};

export default MiniScroll;
