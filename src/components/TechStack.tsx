import React from "react";
import { motion } from "framer-motion";

const technologies = [
  "React", "Astro", "TypeScript", "Tailwind CSS", "Kotlin", "Firebase", 
  "AWS", "Node.js", "PostgreSQL", "Google Cloud", "Framer Motion", "Docker"
];

export function TechStack() {
  return (
    <section className="py-20 bg-muted/20 border-y border-border/50 overflow-hidden">
      <div className="container mx-auto px-6 mb-6 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Powered By Modern Tech</p>
      </div>
      <div className="flex relative">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 bg-opacity-50">
                {tech}
              </span>
            </div>
          ))}
        </motion.div>
        
        <div className="absolute top-0 left-0 w-[35%] h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[35%] h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
