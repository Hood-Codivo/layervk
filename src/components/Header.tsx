import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import JoinWaitlistForm from "@/components/JoinWaitlistForm";

const navLinks = [
  { name: "How It Works", href: "/how-it-works" },
  { name: "For Advertisers", href: "/for-advertisers" },
  { name: "For Developers", href: "/for-developers" },
  { name: "Docs", href: "https://layervk.gitbook.io/untitled/" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 shadow-md"
      >
        <nav className="container mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2">
              <img
                src="/images/LayerVK%20Wordmark%203.png"
                alt="LayerVK logo"
                className="h-6 md:h-8"
              />
            </a>

            {/* Desktop Navigation (centered) */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center gap-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.05 }}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* CTA Button (Dialog root scoped to trigger + content) */}
            <div className="hidden md:flex items-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Join Waitlist</Button>
                </DialogTrigger>
                <DialogContent>
                  <JoinWaitlistForm />
                </DialogContent>
              </Dialog>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white z-50 relative"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ scale: 1.1 }}
                  className="text-2xl text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="mt-2">Join Waitlist</Button>
                </DialogTrigger>
                <DialogContent>
                  <JoinWaitlistForm />
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
