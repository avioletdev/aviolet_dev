import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Smartphone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </div>
          
          <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
            Building Robust <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Web & Backend</span> Solutions
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
            A Violet Tech LTD. Freelance Software Engineer specializing in modern Web Apps, Kotlin, and scalable Backend systems.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8 text-base" asChild>
              <a href="#contact">
                Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base" asChild>
               <a href="#services">
                View Services
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 flex flex-col gap-6 max-w-sm mx-auto">
              <motion.a 
                href="#services"
                className="p-6 bg-card border border-border rounded-2xl shadow-lg flex items-center gap-4 text-left mr-12 cursor-pointer block"
                whileHover={{ x: 5 }}
              >
                 <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                   <Code className="h-6 w-6" />
                 </div>
                 <div>
                    <h3 className="font-bold">Web Apps</h3>
                    <p className="text-sm text-muted-foreground">React, Astro, Next.js</p>
                 </div>
              </motion.a>

              <motion.a 
                href="#services"
                className="p-6 bg-card border border-border rounded-2xl shadow-lg flex items-center gap-4 text-left ml-16 cursor-pointer block"
                 whileHover={{ x: 5 }}
              >
                 <div className="p-3 bg-secondary text-secondary-foreground rounded-full shrink-0">
                   <Database className="h-6 w-6" />
                 </div>
                 <div>
                    <h3 className="font-bold">Backend</h3>
                    <p className="text-sm text-muted-foreground">Node.js, Postgres, Redis</p>
                 </div>
              </motion.a>

               <motion.a 
                href="#services"
                className="p-6 bg-card border border-border rounded-2xl shadow-lg flex items-center gap-4 text-left ml-4 mr-8 cursor-pointer block"
                 whileHover={{ x: 5 }}
              >
                 <div className="p-3 bg-accent text-accent-foreground rounded-full shrink-0">
                   <Smartphone className="h-6 w-6" />
                 </div>
                 <div>
                    <h3 className="font-bold">Kotlin</h3>
                    <p className="text-sm text-muted-foreground">Android, App Development</p>
                 </div>
              </motion.a>
          </div>

          {/* Decorative shapes behind */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full filter blur-3xl -z-10 scale-150" />
        </motion.div>
      </div>
    </section>
  );
}
