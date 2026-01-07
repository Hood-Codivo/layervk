import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Shield, TrendingUp, Eye, Lock, CheckCircle, X } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import JoinWaitlistForm from "@/components/JoinWaitlistForm";
const ForAdvertisers = () => {
  const stats = [
    { value: "$80B+", label: "Lost to ad fraud annually" },
    { value: "30%", label: "Of impressions are bots" },
    { value: "0%", label: "Bot traffic with LayerVK" },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Cryptographic Proof",
      description:
        "No more 'trust scores.' Get mathematical proof that a human viewed your ad.",
    },
    {
      icon: TrendingUp,
      title: "Premium Inventory",
      description:
        "Access verified human impressions willing to pay premium rates.",
    },
    {
      icon: Eye,
      title: "Full Transparency",
      description: "Every proof is verifiable on-chain. No black boxes.",
    },
    {
      icon: Lock,
      title: "Privacy Preserved",
      description:
        "Users' raw data never leaves their device. Only the proof does.",
    },
  ];

  const comparison = [
    {
      feature: "Verification Method",
      legacy: "IP Blacklists, Scoring",
      LayerVK: "ZK Physics Proofs",
    },
    { feature: "False Positive Rate", legacy: "5-15%", LayerVK: "<0.1%" },
    {
      feature: "Bot Detection",
      legacy: "Probabilistic",
      LayerVK: "Deterministic",
    },
    {
      feature: "Data Privacy",
      legacy: "Invasive Tracking",
      LayerVK: "Zero-Knowledge",
    },
    {
      feature: "Proof Transparency",
      legacy: "Black Box",
      LayerVK: "On-Chain Verifiable",
    },
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
              FOR ADVERTISERS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Stop Paying for
              <span className="text-primary block">Robot Eyeballs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              30% of your ad impressions are bots. With LayerVK, you only pay
              for cryptographically verified human views.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Request Demo
              </Button>
              <a href="https://layervk.gitbook.io/untitled/">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30"
                >
                  View Documentation
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="text-center p-6 bg-card border border-border rounded-xl"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Why Advertisers Choose LayerVK
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors"
              >
                <benefit.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Legacy vs. LayerVK
          </motion.h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-left py-4 px-4 font-semibold text-muted-foreground">
                    Legacy Solutions
                  </th>
                  <th className="text-left py-4 px-4 font-semibold text-primary">
                    LayerVK
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-border/50"
                  >
                    <td className="py-4 px-4 font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-muted-foreground flex items-center gap-2">
                      <X className="w-4 h-4 text-destructive" />
                      {row.legacy}
                    </td>
                    <td className="py-4 px-4 text-primary flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      {row.LayerVK}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Seamless DSP Integration
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                LayerVK verification tokens integrate directly with OpenRTB bid
                requests. Filter for "LayerVK Verified" inventory in your
                existing DSP.
              </p>
              <ul className="space-y-4">
                {[
                  "OpenRTB 2.6 compliant extension",
                  "Works with major DSPs (The Trade Desk, DV360)",
                  "Real-time proof verification",
                  "Custom CPM bidding for verified inventory",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-card border border-border rounded-xl"
            >
              <div className="font-mono text-sm space-y-2 text-muted-foreground">
                <div className="text-foreground">
                  // OpenRTB Bid Request Extension
                </div>
                <div>{`{`}</div>
                <div className="pl-4">"ext": {`{`}</div>
                <div className="pl-8">"LayerVK": {`{`}</div>
                <div className="pl-12">
                  "proof_required": <span className="text-primary">true</span>,
                </div>
                <div className="pl-12">
                  "min_cpm_premium": <span className="text-primary">2.0</span>
                </div>
                <div className="pl-8">{`}`}</div>
                <div className="pl-4">{`}`}</div>
                <div>{`}`}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Stop Wasting Budget?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join the waitlist to get early access to verified human ad
              inventory.
            </p>
            <div className="flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Join Waitlist</Button>
                </DialogTrigger>
                <DialogContent>
                  <JoinWaitlistForm />
                </DialogContent>
              </Dialog>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForAdvertisers;
