import React from "react";
import { motion } from "framer-motion";

interface AboutProps {
  profileImage: string;
}

export function About({ profileImage }: AboutProps) {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
           <div className="relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square bg-gradient-to-r from-primary to-purple-600 rounded-[56%_44%_71%_29%_/_55%_58%_42%_45%] md:rounded-3xl opacity-20 blur-2xl"></div>
              <img 
                src={profileImage}
                width={500}
                height={500}
                alt="A Violet Tech Profile" 
                className="relative rounded-[56%_44%_71%_29%_/_55%_58%_42%_45%] md:rounded-[9rem] shadow-lg w-1/2 md:w-full max-w-md mx-auto transition-all duration-500 object-cover aspect-square md:aspect-auto"
              />
           </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold">About A Violet Tech</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At A Violet Tech LTD, we are dedicated to crafting exceptional digital experiences. As a freelance software engineering consultancy, we bridge the gap between complex backend systems and intuitive user interfaces.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded by a former <strong>SumUp</strong> engineer, we bring fintech-grade quality, security, and scalability to every project. With specialized experience in <strong>POS & Payment Systems</strong>, combined with <strong>Web</strong> and <strong>Android Engineering</strong>, we deliver robust solutions for your business.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
