import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { toast } from "@/hooks/use-toast";

const contactInfo = [
  { icon: FiPhone, label: "Phone", value: "+971 506244352", href: "tel:+971506244352" },
  { icon: FiMail, label: "Email", value: "info@lashaconsultancy.com", href: "mailto:info@lashaconsultancy.com" },
  { icon: FiMapPin, label: "Location", value: "Dubai Silicon Oasis, UAE", href: "#" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } };

  return (
    <section id="contact" className="relative bg-contact py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase mb-4">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-contact-foreground mb-6">Contact <span className="gradient-text">Us</span></h2>
          <p className="text-contact-foreground/60 text-lg max-w-2xl mx-auto">Ready to transform your business? Let's start a conversation.</p>
        </motion.div>

        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-contact-foreground mb-4">Let's Connect</h3>
              <p className="text-contact-foreground/60 leading-relaxed">Have a project in mind? We'd love to hear from you.</p>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <motion.a key={info.label} href={info.href} className="flex items-center gap-4 group" whileHover={{ x: 5 }}>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-contact-foreground/50">{info.label}</div>
                    <div className="text-contact-foreground font-medium group-hover:text-primary transition-colors">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:col-span-3 bg-background p-8 lg:p-10 rounded-2xl shadow-xl border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="John Doe" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="john@example.com" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input type="text" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" placeholder="How can we help?" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={5} className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none" placeholder="Tell us about your project..." required />
              </div>
              <motion.button type="submit" disabled={isSubmitting} className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                {isSubmitting ? <span className="animate-pulse">Sending...</span> : (<>Send Message <FiSend className="w-4 h-4" /></>)}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
