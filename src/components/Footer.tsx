import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background relative">
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 animate-pulse" />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">Portal 360</span>
            </div>
            <p className="text-muted-foreground">
              Your unified workspace for everything your business runs on.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#features" className="footer-link text-muted-foreground hover:text-primary transition-colors relative inline-block group">
                  Features
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="/#pricing" className="footer-link text-muted-foreground hover:text-primary transition-colors relative inline-block group">
                  Pricing
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="/#integrations" className="footer-link text-muted-foreground hover:text-primary transition-colors relative inline-block group">
                  Integrations
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="#docs" className="footer-link text-muted-foreground hover:text-primary transition-colors relative inline-block group">
                  Documentation
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="footer-link text-muted-foreground hover:text-primary transition-colors relative inline-block group">
                  About Us
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="#careers" className="footer-link text-muted-foreground hover:text-primary transition-colors relative inline-block group">
                  Careers
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="#blog" className="footer-link text-muted-foreground hover:text-primary transition-colors relative inline-block group">
                  Blog
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-link text-muted-foreground hover:text-primary transition-colors relative inline-block group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="#twitter" className="footer-link text-muted-foreground hover:text-primary transition-all relative inline-block group hover:scale-105">
                  Twitter
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="#linkedin" className="footer-link text-muted-foreground hover:text-primary transition-all relative inline-block group hover:scale-105">
                  LinkedIn
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="#facebook" className="footer-link text-muted-foreground hover:text-primary transition-all relative inline-block group hover:scale-105">
                  Facebook
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
              <li>
                <a href="#github" className="footer-link text-muted-foreground hover:text-primary transition-all relative inline-block group hover:scale-105">
                  GitHub
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 animate-fade-in">
          <p className="text-muted-foreground text-sm">
            © 2025 Portal 360 – All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors relative inline-block group">
              Privacy Policy
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#terms" className="text-sm text-muted-foreground hover:text-primary transition-colors relative inline-block group">
              Terms of Service
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
