import { motion } from "framer-motion";

const techStack = [
  { name: "Mobile Core", tech: "Rust (.so / .a), JNI", status: "Ready" },
  { name: "ZK Prover", tech: "SP1 (Rust)", status: "Ready" },
  { name: "Verifier", tech: "Solana / zkVerify", status: "In Development" },
  { name: "Ad Standard", tech: "OpenRTB / IAB", status: "Planned" },
];

const TechSection = () => {
  return (
    <section className="relative py-24 bg-background">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-mono text-primary border border-primary/30 rounded-full">
            Architecture
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built on battle-tested cryptographic primitives and optimized for mobile performance.
          </p>
        </motion.div>

        {/* Tech table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="rounded-xl border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 p-4 bg-surface-dark border-b border-border">
              <span className="text-sm font-semibold text-muted-foreground">Component</span>
              <span className="text-sm font-semibold text-muted-foreground">Tech Stack</span>
              <span className="text-sm font-semibold text-muted-foreground text-right">Status</span>
            </div>

            {/* Rows */}
            {techStack.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="grid grid-cols-3 gap-4 p-4 border-b border-border last:border-b-0 hover:bg-surface-dark/50 transition-colors"
              >
                <span className="text-sm font-medium">{item.name}</span>
                <span className="text-sm font-mono text-muted-foreground">{item.tech}</span>
                <div className="text-right">
                  <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                    item.status === "Ready" 
                      ? "bg-primary/10 text-primary" 
                      : item.status === "In Development"
                      ? "bg-yellow-500/10 text-yellow-500"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {item.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;
