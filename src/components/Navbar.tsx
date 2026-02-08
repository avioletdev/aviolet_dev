import { useState, useEffect } from "react";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

interface NavbarProps {
  /** The logo URL to display in the navbar */
  logo: string;
}

export function Navbar({ logo }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isOpen, setIsOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 md:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <motion.div 
            className="bg-primary/10 p-1.5 rounded-lg transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img src={logo} alt="Logo" className="h-7 w-7 rounded-sm object-cover" />
          </motion.div>
          <span className="font-heading font-bold text-xl tracking-tight transition-colors">A Violet Tech</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:underline underline-offset-4"
            >
              {link.name}
            </a>
          ))}
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button asChild className="rounded-full px-6">
            <a href="#contact">Hire Me</a>
          </Button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
           <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-10 px-6">
                <a href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsOpen(false)}>
                  <div className="bg-primary/10 p-1.5 rounded-lg">
                    <img src={logo} alt="Logo" className="h-7 w-7 rounded-sm object-cover" />
                  </div>
                  <span className="font-heading font-bold text-xl">A Violet Tech</span>
                </a>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium hover:text-primary transition-colors py-2 border-b border-border/50"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button asChild className="mt-4 w-full rounded-full" onClick={() => setIsOpen(false)}>
                    <a href="#contact">Hire Me</a>
                  </Button>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
