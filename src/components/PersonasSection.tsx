import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, DollarSign } from "lucide-react";

const PersonasSection = () => {
  return (
    <section className="relative py-24 bg-surface-dark">
      <div className="container px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-primary border border-primary/30 rounded-full">
            Who Benefits
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for Both Sides
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Layer VK creates a win-win marketplace where verified inventory
            commands premium prices.
          </p>
        </motion.div>

        {/* Persona cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Advertiser Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative p-8 rounded-2xl border border-border bg-card overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <DollarSign className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">The Advertiser</h3>
                  <p className="text-sm text-muted-foreground">The Buyer</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <p className="text-sm font-medium text-destructive">
                    Pain Point
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Wasting budget on programmatic ads shown to emulators and
                    bot farms.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm font-medium text-primary">Solution</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    "I will pay 2x CPM, but ONLY for sessions with a valid Layer
                    VK Proof."
                  </p>
                </div>
              </div>

              <Button variant="outline" className="group/btn">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </motion.div>

          {/* Game Dev Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative p-8 rounded-2xl border border-border bg-card overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Code className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">The Game Developer</h3>
                  <p className="text-sm text-muted-foreground">The Supplier</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                  <p className="text-sm font-medium text-destructive">
                    Pain Point
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Low eCPM because mobile traffic is considered "low quality"
                    by default.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm font-medium text-primary">Solution</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    "My users are real humans holding phones, and I can prove it
                    cryptographically. Pay me more."
                  </p>
                </div>
              </div>

              <Button variant="outline" className="group/btn">
                Get SDK
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PersonasSection;
