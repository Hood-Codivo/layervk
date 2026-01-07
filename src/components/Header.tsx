import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import JoinWaitlistForm from "@/components/JoinWaitlistForm";

const navLinks = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "For Advertisers", href: "#advertisers" },
  { name: "For Developers", href: "#developers" },
  { name: "Docs", href: "#docs" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Dialog>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute inset-0 bg-background/80 backdrop-blur-md border-b border-border/50" />

        <div className="container relative px-6">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img
                src="/images/LayerVK%20Wordmark%203.png"
                alt="LayerVK logo"
                className="h-6 md:h-8"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
              <DialogTrigger asChild>
                <Button>Join Waitlist</Button>
              </DialogTrigger>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-border"
            >
              <div className="container px-6 py-4">
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                  <DialogTrigger asChild>
                    <Button className="mt-2">Join Waitlist</Button>
                  </DialogTrigger>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <DialogContent>
        <JoinWaitlistForm />
      </DialogContent>
    </Dialog>
  );
};

export default Header;
