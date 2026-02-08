import React from "react";

export function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} A Violet Tech LTD. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Built with Astro, React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
