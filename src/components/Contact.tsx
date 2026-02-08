import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-12 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Ready to start your next project? Contact us for a free consultation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* WhatsApp Button Asset - Centered Above */}
          <div className="text-center">
            <motion.div 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="inline-block"
            >
              <a href="https://wa.me/441923549185" target="_blank" rel="noopener noreferrer" className="inline-block">
                <img 
                  src="/ChatOnWhatsAppButton/WhatsAppButtonGreenLarge.svg" 
                  alt="Chat on WhatsApp" 
                  className="h-16"
                />
              </a>
            </motion.div>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors group">
                <div className="flex items-center px-6 py-4 gap-4">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:support@aviolet.dev" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                      support@aviolet.dev
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors group">
                <div className="flex items-center px-6 py-4 gap-4">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="https://wa.me/01923549185" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors block">
                      +44 1923 549185
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors group">
                <div className="flex items-center px-6 py-4 gap-4">
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-sm text-muted-foreground">
                      Remote / Worldwide
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

           <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
               <Button variant="outline" size="icon" asChild>
                <a href="https://www.linkedin.com/in/avery-shedden-47677a92" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
           </div>
        </div>
      </div>
    </section>
  );
}
