import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Server, Terminal, Smartphone, Database, Globe, Languages, Workflow, CreditCard } from "lucide-react";

const services = [
  {
    title: "Web App Development",
    description: "Building responsive, modern web applications using React, Astro, and Next.js. We ensure high performance and SEO optimization.",
    icon: Monitor,
  },
  {
    title: "Android App Development",
    description: "Expert native Android development using Kotlin. We build robust, user-friendly mobile applications tailored to your needs.",
    icon: Smartphone,
  },
  {
    title: "Cloud & Serverless",
    description: "Architecting scalable serverless solutions on AWS and Google Cloud (Firebase). We focus on high availability and cost-efficiency.",
    icon: Database,
  },
  {
    title: "Payments & POS Integration",
    description: "Building custom Point of Sale systems and secure payment flows. Leveraging deep fintech experience to handle complex transaction logic.",
    icon: CreditCard,
  },
  {
    title: "Localization (i18n)",
    description: "Preparing your apps for global scale. We implement robust internationalization strategies to reach users in their native language.",
    icon: Languages,
  },
  {
    title: "DevOps & CI/CD",
    description: "Streamlining deployment with automated pipelines. We ensure reliable, frequent releases using GitHub Actions and modern CI tools.",
    icon: Workflow,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Services() {
  return (
    <section id="services" className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground text-lg">
            We provide a comprehensive range of software engineering services to help you build and scale your digital products.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover="hover"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="sticky md:relative"
              style={{ 
                top: `calc(5rem + ${index * 1}rem)`,
                zIndex: index 
              }}
            >
              <Card className="h-full hover:border-primary/50 transition-colors group cursor-default shadow-lg">
                <CardHeader>
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                    variants={{
                      visible: { scale: 1, rotate: 0 },
                      hover: {
                        scale: 1.1,
                        rotate: [0, -10, 10, -5, 5, 0],
                        transition: { duration: 0.5, ease: "easeInOut" }
                      }
                    }}
                  >
                    <item.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
