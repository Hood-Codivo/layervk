import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import JoinWaitlistForm from "@/components/JoinWaitlistForm";
import {
  Code,
  DollarSign,
  Shield,
  Zap,
  CheckCircle,
  Terminal,
} from "lucide-react";

const ForDevelopers = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "2x Higher eCPM",
      description:
        "Verified human impressions command premium rates from advertisers.",
    },
    {
      icon: Zap,
      title: "<5% CPU Overhead",
      description: "Lightweight SDK that won't impact your game's performance.",
    },
    {
      icon: Shield,
      title: "Anti-Tamper Built-In",
      description:
        "Detects rooted devices, emulators, and sensor injection attacks.",
    },
    {
      icon: Code,
      title: "Simple Integration",
      description: "Drop-in SDK for Unity, Unreal, and native Android/iOS.",
    },
  ];

  const codeExample = `// Unity Integration Example
using LayerVK;

public class AdManager : MonoBehaviour
{
    private LayerVKSDK sdk;

    void Start()
    {
        sdk = new LayerVKSDK("YOUR_API_KEY");
        sdk.Initialize();
    }

    public async void ShowVerifiedAd()
    {
        var proof = await sdk.GenerateProof();
        if (proof.IsValid)
        {
            AdNetwork.ShowAd(proof.Token);
        }
    }
}`;

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
              FOR GAME DEVELOPERS
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Prove Your Users Are
              <span className="text-primary block">Real Humans</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Stop being treated like criminals. Cryptographically prove your
              traffic is human and command premium ad rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="hero" size="lg">
                    Get SDK Access
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <JoinWaitlistForm />
                </DialogContent>
              </Dialog>
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
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Why Developers Choose LayerVK
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

      {/* Code Example */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Integration in Minutes
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our SDK handles all the complexity. Just initialize, generate
                proof, and attach to your ad request.
              </p>
              <ul className="space-y-4">
                {[
                  "Drop-in Unity & Unreal plugins",
                  "Native Android (Kotlin/Java) support",
                  "iOS Swift SDK coming Q2 2026",
                  "Automatic sensor calibration",
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
              className="relative"
            >
              <div className="bg-card border border-border rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                  <Terminal className="w-4 h-4 text-primary" />
                  <span className="text-sm font-mono text-muted-foreground">
                    AdManager.cs
                  </span>
                </div>
                <pre className="p-4 overflow-x-auto text-sm">
                  <code className="font-mono text-foreground/80">
                    {codeExample}
                  </code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDK Features */}
      <section className="py-20 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            SDK Specifications
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: "Sensor Sample Rate",
                value: "50Hz",
                desc: "High-fidelity data capture",
              },
              {
                label: "Capture Window",
                value: "2 sec",
                desc: "Minimal user friction",
              },
              {
                label: "Library Size",
                value: "<500KB",
                desc: "Lightweight footprint",
              },
            ].map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-card border border-border rounded-xl"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {spec.value}
                </div>
                <div className="text-lg font-semibold mb-1">{spec.label}</div>
                <div className="text-sm text-muted-foreground">{spec.desc}</div>
              </motion.div>
            ))}
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
              Ready to Monetize Better?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Join the early access program and start earning premium rates for
              your verified traffic.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="hero" size="lg">
                  Request SDK Access
                </Button>
              </DialogTrigger>
              <DialogContent>
                <JoinWaitlistForm />
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForDevelopers;
