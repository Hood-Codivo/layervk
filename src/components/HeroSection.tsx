import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import GeometricShapes from "./GeometricShapes";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-radial-lime opacity-30" />

      {/* Animated geometric shapes */}
      <GeometricShapes />

      {/* Content */}
      <div className="container relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-primary/30 rounded-full bg-primary/5"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-mono text-primary">Layer VK</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">Prove Humanity.</span>
            <br />
            <span className="text-gradient-lime">Kill Bot Fraud.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Layer VK uses device physics and Zero-Knowledge proofs to
            cryptographically verify human presence. No tracking. No guessing.
            Just math.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button size="lg" className="group">
              <Zap className="w-4 h-4 mr-2" />
              Get SDK Access
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              <Shield className="w-4 h-4 mr-2" />
              View Documentation
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <StatCard value="$80B+" label="Lost to Bot Fraud Yearly" />
            <StatCard value="30%" label="Of Ad Traffic is Bots" />
            <StatCard value="<5%" label="SDK CPU Overhead" highlight />
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

const StatCard = ({
  value,
  label,
  highlight = false,
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) => (
  <div className="text-center p-6 rounded-lg border border-border/50 bg-card/50 backdrop-blur-sm">
    <div
      className={`text-3xl md:text-4xl font-bold mb-2 ${
        highlight ? "text-primary" : "text-foreground"
      }`}
    >
      {value}
    </div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

export default HeroSection;
