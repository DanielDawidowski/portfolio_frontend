import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

export function useScrollAnimation(x: string) {
  const ref = useRef<HTMLDivElement | null>(null);
  const animation = useAnimation();
  const isInView = useInView(ref, { margin: x });

  useEffect(() => {
    if (isInView) {
      animation.start("visible");
    } else {
      animation.start("hidden");
    }
  }, [animation, isInView]);

  return [ref as any, animation];
}
