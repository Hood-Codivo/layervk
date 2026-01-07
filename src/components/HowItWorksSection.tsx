import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "SDK Integration",
    description:
      "Game developer installs the LayerVK SDK into their Unity/Unreal project. Takes 5 minutes.",
    tech: "Rust JNI Bridge",
  },
  {
    number: "02",
    title: "Sensor Capture",
    description:
      "During an ad impression, the SDK captures 3-axis accelerometer data at 50Hz for 2 seconds.",
    tech: "50Hz × 2s = 100 samples",
  },
  {
    number: "03",
    title: "Local Processing",
    description:
      "Variance and FFT calculations happen on-device. Raw data never leaves the phone.",
    tech: "SP1 ZK Circuit",
  },
  {
    number: "04",
    title: "Proof Generation",
    description:
      "A ZK-Receipt is generated proving human presence. Attached to the ad request via OpenRTB.",
    tech: "is_human: true",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      </div>

      <div className="container px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-primary border border-primary/30 rounded-full">
            The Flow
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            From Sensor to Settlement
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Every step is designed for speed, privacy, and cryptographic
            certainty.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-8 items-start"
              >
                {/* Number bubble */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                    <span className="text-lg font-mono font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-3">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <span className="inline-flex items-center px-3 py-1 text-xs font-mono text-primary bg-primary/10 rounded-full">
                        {step.tech}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
