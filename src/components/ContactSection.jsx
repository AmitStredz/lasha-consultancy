import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import { toast } from "@/hooks/use-toast";
import Mailgun from 'mailgun.js';
import FormData from 'form-data';

const contactInfo = [
  { icon: FiPhone, label: "Phone", value: "+971 506244352", href: "tel:+971506244352" },
  { icon: FiMail, label: "Email", value: "info@lashaconsultancy.com", href: "mailto:info@lashaconsultancy.com" },
  { icon: FiMapPin, label: "Location", value: "Dubai Silicon Oasis, UAE", href: "#" },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
  const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({ 
        title: "Invalid Email", 
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    // Get API key from environment
    const apiKey = import.meta.env.VITE_MAILGUN_API_KEY;
    const domain = import.meta.env.VITE_MAILGUN_DOMAIN;

    if (!apiKey || !domain) {
      console.error("Mailgun credentials not configured");
      toast({ 
        title: "Configuration Error", 
        description: "Email service is not properly configured. Please contact support.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      const mailgun = new Mailgun(FormData);
      const mg = mailgun.client({
        username: "api",
        key: apiKey,
      });

      const response = await mg.messages.create(domain, {
        from: `Contact Form <${formData.email}>`,
        to: ["ajeebsha2010@gmail.com", "ponnan2112@gmail.com"],
        "h:Reply-To": formData.email,
        "h:X-Priority": "1",
        "h:Importance": "high",
        subject: `[Lasha Consultancy] New Inquiry: ${formData.subject}`,
        text: `
            Name: ${formData.name}
            Email: ${formData.email}
            Subject: ${formData.subject}

            Message:
            ${formData.message}

            ---
            This message was sent from the Lasha Consultancy contact form.
        `,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f4f4f4;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px 0;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background-color: #ffbd58; padding: 30px; text-align: center;">
                        <img src="https://lashaconsultancy.com/logo2.webp" alt="Lasha Consultancy" style="width: 60px; height: 60px; margin-bottom: 10px;">
                        <h1 style="margin: 0; color: #1a1a1a; font-size: 24px; font-weight: 600;">Lasha Consultancy</h1>
                        <p style="margin: 5px 0 0; color: #333; font-size: 12px;">New Contact Form Submission</p>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 30px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding-bottom: 20px;">
                              <p style="margin: 0 0 5px; color: #666; font-size: 12px; font-weight: 600; text-transform: uppercase;">Name</p>
                              <p style="margin: 0; color: #1a1a1a; font-size: 16px;">${formData.name}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom: 20px;">
                              <p style="margin: 0 0 5px; color: #666; font-size: 12px; font-weight: 600; text-transform: uppercase;">Email</p>
                              <p style="margin: 0;"><a href="mailto:${formData.email}" style="color: #ffbd58; text-decoration: none; font-size: 16px;">${formData.email}</a></p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom: 20px;">
                              <p style="margin: 0 0 5px; color: #666; font-size: 12px; font-weight: 600; text-transform: uppercase;">Subject</p>
                              <p style="margin: 0; color: #1a1a1a; font-size: 16px;">${formData.subject}</p>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding-bottom: 20px;">
                              <p style="margin: 0 0 10px; color: #666; font-size: 12px; font-weight: 600; text-transform: uppercase;">Message</p>
                              <div style="background-color: #f9f9f9; border-left: 3px solid #ffbd58; padding: 15px; border-radius: 4px;">
                                <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="background-color: #f9f9f9; padding: 20px; text-align: center; border-top: 1px solid #eee;">
                        <p style="margin: 0 0 5px; color: #666; font-size: 13px;">Lasha Consultancy</p>
                        <p style="margin: 0 0 5px; color: #666; font-size: 12px;">Dubai Silicon Oasis, UAE</p>
                        <p style="margin: 0 0 10px; color: #666; font-size: 12px;">+971 506244352 • info@lashaconsultancy.com</p>
                        <p style="margin: 0; color: #999; font-size: 11px;">This email was sent from lashaconsultancy.com contact form</p>
                      </td>
                    </tr>
                    
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
        `,
      });

      console.log('Email sent successfully:', response);
      
      toast({ 
        title: "Message Sent!", 
        description: "We'll get back to you within 24 hours." 
      });
      
      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });

    } catch (error) {
      console.error('Error sending email:', error);
      toast({ 
        title: "Error", 
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-contact py-24 lg:py-32">
      <div className="absolute inset-0">
        <div className="pattern-grid opacity-20" />
        <motion.div
          className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/8 rounded-full blur-3xl"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="floating-badge mb-4 text-contact-foreground/80">
            <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
            <span>Get In Touch</span>
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-contact-foreground mb-6">
            Contact <span className="gradient-text">Us</span>
          </h2>
          <p className="text-contact-foreground/60 text-lg max-w-2xl mx-auto">
            Ready to transform your business? Let's start a conversation.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-5 gap-12 lg:gap-16"
        >
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

            {/* <div className="bg-white/60 rounded-2xl border border-white/40 backdrop-blur-xl p-6 shadow-lg shadow-primary/10">
              <p className="text-xs uppercase tracking-[0.4em] text-primary/70 mb-3">Why businesses choose us</p>
              <ul className="space-y-3 text-sm text-contact-foreground/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Dedicated strategic partners
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Expertise in HR, real estate, tourism & AI automation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Tailored solutions for Dubai's market
                </li>
              </ul>
            </div> */}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 rounded-3xl border border-border/70 bg-white/60 shadow-xl shadow-primary/10 backdrop-blur-xl p-8 lg:p-10"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <p className="text-sm uppercase tracking-[0.4em] text-primary/70">Response Time</p>
                <p className="text-xl font-semibold text-contact-foreground">Under 24 Hours</p>
              </div>
              <div className="flex items-center justify-end gap-4 text-xs uppercase tracking-[0.3em] text-contact-foreground/50">
                {"HR • Tourism • Real Estate • AI".split(" • ").map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/60" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-inner shadow-white/10"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-inner shadow-white/10"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-inner shadow-white/10"
                  placeholder="How can we help?"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none shadow-inner shadow-white/10"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
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