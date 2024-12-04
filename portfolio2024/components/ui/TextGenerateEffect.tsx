"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate]);

  const renderWords = () => {
    const lines = words.split("\n");

    return (
      <motion.div ref={scope}>
        {lines.map((line, lineIdx) => (
          <div key={`line-${lineIdx}`} className="leading-relaxed whitespace-pre-wrap">
            {line.split(" ").map((word, wordIdx) => (
              <motion.span
                key={`word-${lineIdx}-${wordIdx}`}
                className={` ${
                  word === "Extraordinary"
                  ? "text-purple"
                  : wordIdx > 3
                  ? "text-purple" 
                  : "dark:text-white text-black"
                } opacity-0`}
              >
                {word}{" "}
              </motion.span>
            ))}
          </div>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
