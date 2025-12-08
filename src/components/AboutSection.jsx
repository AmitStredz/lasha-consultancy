import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiCheck } from "react-icons/fi";

const highlights = [
  "Full-service real estate and HR consulting",
  "Predictive modeling and strategic planning",
  "Talent solutions and workforce development",
  "Market analysis and property valuation",
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section id="about" className="relative bg-background py-24 lg:py-32">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="pattern-grid opacity-20" />
        <motion.div
          className="absolute -left-10 top-1/3 w-36 h-36 rounded-full bg-primary/8 blur-3xl"
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-0 h-full w-1/3 bg-linear-to-l from-primary/4 via-transparent to-transparent"
          animate={{ opacity: [0.25, 0.35, 0.25] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left Column - Heading & Image */}
          <motion.div variants={itemVariants} className="relative">
            <span className="floating-badge mb-4 text-foreground/80">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
              <span>Who We Are</span>
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1]">
              About <span className="gradient-text">Us</span>
            </h2>

            {/* Decorative Block */}
            <div className="relative mt-10 glass-panel p-8 lg:p-10 text-foreground/90">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-sm" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-secondary rounded-sm" />
              <blockquote className="font-display text-2xl md:text-3xl font-medium italic leading-relaxed">
                "Empowering businesses to navigate real estate and organizational challenges with confidence."
              </blockquote>
              <div className="mt-6 flex flex-wrap gap-4 text-xs uppercase tracking-[0.4em] text-foreground/50">
                {["People", "Property", "Automation"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/60" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <p className="text-foreground/70 text-lg leading-relaxed">
              At Lasha Consultancy, we are a full-service real estate and HR consulting agency dedicated to providing top-notch services in market analysis, property valuation, investor consulting, and talent solutions.
            </p>

            <p className="text-foreground/70 text-lg leading-relaxed">
              With a focus on predictive modeling, strategic planning, and effective HR practices such as recruitment, workforce planning, and performance management, we empower our clients to navigate both real estate and organizational challenges with confidence and clarity.
            </p>

            {/* Highlights */}
            <div className="space-y-4 pt-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 rounded-lg border border-border/60 bg-white/50 px-4 py-3 shadow-sm shadow-primary/5 backdrop-blur"
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <FiCheck className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/80">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              href="#contact"
              className="btn-primary inline-block mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Discover More
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
