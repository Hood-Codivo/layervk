import { Github, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 bg-surface-darker border-t border-border">
      <div className="container px-6">
        <div className="mb-8">
          {/* Brand */}
          <div className="mb-8">
            <a href="/" className="flex items-center gap-2 mb-4">
              <img
                src="/images/LayerVK%20Wordmark%203.png"
                alt="LayerVK logo"
                className="h-6 md:h-8"
              />
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Decentralized ad-fraud prevention using Layer VK proofs.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2026 Layer VK. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://x.com/layervk?s=21&t=v9j8Pe2NAq4Us2JVlOBNsw"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Layer-VK"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
