import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import JoinWaitlistForm from "@/components/JoinWaitlistForm";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial-lime opacity-20" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>

      {/* Animated shapes */}
      <motion.div
        className="absolute top-1/4 left-10 w-20 h-20 border-2 border-primary/30"
        style={{ transform: "rotate(45deg)" }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-16 h-16 bg-primary/10"
        style={{ transform: "rotate(45deg)" }}
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Autonomous.</span>{" "}
            <span className="text-foreground">Transparent.</span>{" "}
            <span className="text-gradient-lime">Verifiable.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Layer VK proves humanity without tracking. Every decision is
            cryptographically verified. This is the future of ad fraud
            prevention.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="xl" className="group">
                  <Zap className="w-5 h-5" />
                  Get SDK Access
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </DialogTrigger>
              <DialogContent>
                <JoinWaitlistForm />
              </DialogContent>
            </Dialog>
            <a href="https://layervk.gitbook.io/untitled/">
              <Button variant="outline" size="xl">
                Read Whitepaper
              </Button>
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Layer VK Verified
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              On-Chain Settlement
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Privacy Preserving
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
