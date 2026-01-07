import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Smartphone, Activity, Cpu, Shield, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Smartphone,
      title: "SDK Integration",
      description:
        "Game developers integrate our lightweight SDK into their Unity, Unreal, or native mobile applications.",
      tech: "Rust (.so / .a), JNI",
    },
    {
      number: "02",
      icon: Activity,
      title: "Sensor Capture",
      description:
        "During an ad impression, the SDK captures 3-axis accelerometer data at 50Hz for 2 seconds.",
      tech: "50Hz sampling, 100 data points",
    },
    {
      number: "03",
      icon: Cpu,
      title: "Local ZK Processing",
      description:
        "The Rust-based logic gate calculates variance and FFT locally, then generates a ZK proof using SP1.",
      tech: "SP1 (Succinct), Zero-Knowledge",
    },
    {
      number: "04",
      icon: Shield,
      title: "Proof Verification",
      description:
        "The ZK-Receipt is verified on-chain, proving human presence without revealing raw sensor data.",
      tech: "Solana, zkVerify",
    },
  ];

  const techStack = [
    {
      component: "Mobile Core",
      tech: "Rust (.so / .a), JNI",
      status: "Android ✓",
    },
    { component: "ZK Prover", tech: "SP1 (Rust)", status: "Active" },
    { component: "Verifier", tech: "Solana / zkVerify", status: "Testnet" },
    { component: "Ad Standard", tech: "OpenRTB / IAB", status: "Spec Ready" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-mono text-sm mb-6">
              THE TECHNOLOGY
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              How <span className="text-primary">Proof of Physics</span> Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A deep dive into the cryptographic pipeline that proves human
              presence through device physics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start"
              >
                {/* Number */}
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 border border-primary/30 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary font-mono">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <step.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-lg mb-3">
                    {step.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-muted rounded-full text-sm font-mono text-muted-foreground">
                    {step.tech}
                  </span>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-px h-12 bg-border hidden md:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Science */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Science of Micro-Tremors
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Humans exhibit involuntary "physiological tremor" - subtle
              oscillations in the 8-12Hz range caused by motor unit firing. Bots
              can't replicate this biological signature.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Variance Analysis",
                description:
                  "We calculate the statistical variance of accelerometer readings. Real humans show consistent micro-movements.",
              },
              {
                title: "FFT Detection",
                description:
                  "Fast Fourier Transform reveals frequency signatures unique to human motor control systems.",
              },
              {
                title: "Anti-Replay",
                description:
                  "Session-bound proofs prevent recorded data from being reused in future ad impressions.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card border border-border rounded-xl"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Technology Stack
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">
                    Component
                  </th>
                  <th className="text-left py-4 px-4 font-semibold">
                    Technology
                  </th>
                  <th className="text-left py-4 px-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {techStack.map((row, index) => (
                  <motion.tr
                    key={row.component}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-border/50"
                  >
                    <td className="py-4 px-4 font-medium">{row.component}</td>
                    <td className="py-4 px-4 font-mono text-sm text-muted-foreground">
                      {row.tech}
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-flex items-center gap-1 text-primary">
                        <CheckCircle className="w-4 h-4" />
                        {row.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;
