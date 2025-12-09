import { motion } from "framer-motion";
import { FiFacebook, FiLinkedin, FiInstagram, FiChevronUp } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { TbStairs } from "react-icons/tb";

const footerLinks = {
  services: [
    { name: "Human Resources", href: "#services" },
    { name: "Real Estate", href: "#services" },
    { name: "AI Automation", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Mission", href: "#mission" },
    { name: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: FiFacebook, href: "#", label: "Facebook" },
  { icon: FaXTwitter, href: "#", label: "Twitter" },
  { icon: FiLinkedin, href: "#", label: "LinkedIn" },
  { icon: FiInstagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-footer pt-20 pb-8">
      {/* Scroll to Top */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-primary/30 transition-all cursor-pointer"
        whileHover={{ y: -3 }}
      >
        <FiChevronUp className="w-6 h-6 cursor-pointer" />
      </motion.button>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <a href="#home" className="flex items-center gap-4 mb-6 group">
              <div className="w-11 h-11 bg-primary rounded-sm flex items-center justify-center shadow-sm shadow-primary/20 transition-shadow group-hover:shadow-primary/40">
                {/* <TbStairs className="w-6 h-6 text-primary-foreground" /> */}
              <img src="/logo2.png" alt="Lasha Consultancy Logo" className="w-12 h-12" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-xl font-semibold text-footer-foreground">
                  Lasha Consultancy
                </span>
                <span className="text-xs uppercase tracking-[0.35em] text-footer-foreground/40">
                  Dubai • UAE
                </span>
              </div>
            </a>
            <p className="text-footer-foreground/60 leading-relaxed max-w-md mb-6">
              Your trusted partner in Human Resources, Real Estate, and AI Automation. Building smarter futures in Dubai.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-footer-foreground/60">
              <p>+971 506244352</p>
              <p>info@lashaconsultancy.com</p>
              <p>Dubai Silicon Oasis, UAE</p>
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-lg font-semibold text-footer-foreground mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-footer-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-lg font-semibold text-footer-foreground mb-6">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-footer-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-footer-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-footer-foreground/40 text-sm">
              © {new Date().getFullYear()} Lasha Consultancy. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-footer-foreground/10 rounded-full flex items-center justify-center text-footer-foreground/60 hover:bg-primary hover:text-primary-foreground transition-all"
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
