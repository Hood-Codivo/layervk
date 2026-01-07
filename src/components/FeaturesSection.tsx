import { motion } from "framer-motion";
import { Smartphone, Cpu, Shield, Coins, ChevronRight } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Device Physics",
    description: "Captures accelerometer data at 50Hz. Humans have micro-tremors that bots cannot replicate.",
  },
  {
    icon: Cpu,
    title: "ZK Circuit",
    description: "SP1-powered circuit calculates variance and FFT to detect human jitter without revealing raw data.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Raw sensor data never leaves the device. Only the cryptographic proof is shared.",
  },
  {
    icon: Coins,
    title: "Premium Inventory",
    description: "Game devs earn 2x CPM by proving their users are real humans holding phones.",
  },
];

const FeaturesSection = () => {
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
            How It Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proof of Physics
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A lightweight SDK that captures sensor data, processes it locally, 
            and generates a ZK-Receipt proving device authenticity.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Smartphone;
  title: string;
  description: string;
}) => (
  <div className="group relative p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-all duration-300">
    <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative">
      <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
      <ChevronRight className="w-4 h-4 mt-4 text-primary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
    </div>
  </div>
);

export default FeaturesSection;
