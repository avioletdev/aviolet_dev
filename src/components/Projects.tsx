import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronLeft, ChevronRight, X } from "lucide-react";

export interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  desktopImage: string;
  mobileImages: string[];
}

interface ProjectsSectionProps {
  projects: ProjectProps[];
}

export function Projects({ projects }: ProjectsSectionProps) {
  const [activeIndices, setActiveIndices] = React.useState<number[]>(projects.map(() => 0));
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    images: string[];
    currentIndex: number;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndices(prev => prev.map((current, i) => (current + 1) % projects[i].mobileImages.length));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightbox.isOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  const openLightbox = (projectImages: string[], index: number) => {
    setLightbox({
      isOpen: true,
      images: projectImages,
      currentIndex: index,
    });
  };

  const closeLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  return (
    <section id="projects" className="py-32 bg-muted/20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground text-lg">
            Selected projects that demonstrate my expertise in building complex, user-centric applications.
          </p>
        </div>

        <div className="grid gap-32">
          {projects.map((project, index) => {
            const allProjectImages = [project.desktopImage, ...project.mobileImages];
            
            return (
            <div key={index} className="flex flex-col lg:flex-row gap-12 items-center">
              
              {/* Text Content */}
              <div className={`flex-1 space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''} z-10`}>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold font-heading">{project.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 pt-4">
                    {project.link && (
                      <Button asChild>
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <ExternalLink className="h-4 w-4" /> Visit Site
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <Github className="h-4 w-4" /> View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Visual Showcase */}
              <div className={`flex-1 relative w-full max-w-2xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative w-full aspect-[16/10] perspective-1000">
                  
                  {/* Desktop Image (Base) */}
                  <motion.div
                     initial={{ opacity: 0, scale: 0.95, y: 20 }}
                     whileInView={{ opacity: 1, scale: 1, y: 0 }}
                     transition={{ duration: 0.5 }}
                     viewport={{ once: true }}
                     className="absolute inset-0 rounded-lg shadow-2xl overflow-hidden border border-border/50 bg-background z-0 cursor-zoom-in"
                     onClick={() => openLightbox(allProjectImages, 0)}
                     whileHover={{ scale: 1.02 }}
                  >
                    <img 
                      src={project.desktopImage} 
                      alt={`${project.title} Desktop View`}
                      className="w-full h-full object-cover object-top"
                    />
                  </motion.div>

                  {/* Floating Mobile Stack */}
                  <div className="absolute -bottom-10 -right-4 md:-right-12 w-32 md:w-48 aspect-[9/19]">
                    {project.mobileImages.map((img, i) => {
                      // Calculate position based on active index
                      const total = project.mobileImages.length;
                      const activeIndex = activeIndices[index];
                      let position = (i - activeIndex + total) % total;
                      
                      return (
                        <motion.div
                          key={i}
                          className="absolute inset-0 rounded-xl border-4 border-background shadow-xl overflow-hidden bg-background cursor-zoom-in"
                          animate={{
                            zIndex: 10 - position,
                            y: position * -15, 
                            x: position * -15, 
                            scale: 1 - (position * 0.05),
                            rotate: position === 0 ? 0 : (i % 2 === 0 ? 4 : -4),
                            opacity: position < 3 ? 1 : 0 
                          }}
                          transition={{ 
                            duration: 0.5,
                            ease: "easeInOut"
                          }}
                          onClick={() => openLightbox(allProjectImages, i + 1)} // +1 because desktop is 0
                          whileHover={{ scale: 1.05 }}
                        >
                          <img 
                            src={img} 
                            alt={`${project.title} Mobile View ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      );
                    })}
                  </div>

                </div>
              </div>

            </div>
          );
          })}
        </div>

        {/* Lightbox Overlay */}
        <AnimatePresence>
          {lightbox.isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button 
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Arrow */}
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-8 z-50 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors backdrop-blur-md hidden md:block"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
               {/* Right Arrow */}
               <button
                onClick={nextImage}
                className="absolute right-4 md:right-8 z-50 p-3 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full transition-colors backdrop-blur-md hidden md:block"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <motion.div
                key={lightbox.currentIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative max-w-full max-h-full flex items-center justify-center"
                onClick={(e) => e.stopPropagation()} 
              >
                  <img 
                    src={lightbox.images[lightbox.currentIndex]} 
                    alt="Project Details" 
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                  />
                  
                  {/* Mobile Navigation Overlay (Tap areas) */}
                  <div className="absolute inset-y-0 left-0 w-1/4 md:hidden" onClick={prevImage} />
                  <div className="absolute inset-y-0 right-0 w-1/4 md:hidden" onClick={nextImage} />
                  
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
