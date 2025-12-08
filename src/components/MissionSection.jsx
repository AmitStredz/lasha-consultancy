import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiTarget, FiTrendingUp, FiZap, FiHeart } from "react-icons/fi";

const values = [
  {
    icon: FiTarget,
    title: "Data-Driven",
    description: "Insights that power smarter decisions",
  },
  {
    icon: FiTrendingUp,
    title: "Scale Smarter",
    description: "Growth strategies that work",
  },
  {
    icon: FiZap,
    title: "Operate Faster",
    description: "Efficiency through automation",
  },
  {
    icon: FiHeart,
    title: "Personalized",
    description: "Support tailored to your needs",
  },
];

const MissionSection = () => {
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
    <section id="mission" className="relative bg-mission py-24 lg:py-32">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="pattern-grid opacity-20" />
        <motion.div
          className="absolute top-0 right-0 h-full w-1/2 bg-linear-to-l from-primary/6 via-transparent to-transparent"
          animate={{ opacity: [0.25, 0.35, 0.25] }}
          transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-15%] left-[-10%] w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left - Content */}
          <div>
            <motion.span
              variants={itemVariants}
              className="floating-badge mb-4 text-mission-foreground/80"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
              <span>Our Purpose</span>
            </motion.span>
            
            <motion.h2 
              variants={itemVariants}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-mission-foreground mb-8 leading-[1.1]"
            >
              Our <span className="gradient-text">Mission</span>
            </motion.h2>

            <motion.p 
              variants={itemVariants}
              className="text-mission-foreground/70 text-lg md:text-xl leading-relaxed mb-8"
            >
              Lasha Consultancy strives to redefine professional services in Dubai by uniting Human Resources excellence, real estate intelligence, and AI-powered automation.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="text-mission-foreground/70 text-lg leading-relaxed mb-10"
            >
              Our mission is to help our clients scale smarter, operate faster, and unlock opportunities through data-driven insights, seamless technology, and personalized support.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="btn-secondary inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Partner With Us
              </motion.a>
              <motion.a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary border border-primary/40 rounded-sm transition-all duration-300 hover:bg-primary/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </motion.a>
            </motion.div>
          </div>

          {/* Right - Values Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 gap-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="group relative bg-background/80 p-6 lg:p-8 rounded-2xl shadow-lg border border-border hover:border-primary/40 transition-all duration-300 card-hover overflow-hidden"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-foreground/60 text-sm">
                  {value.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-8 h-8 bg-primary/10 transform rotate-45 translate-x-4 -translate-y-4 group-hover:bg-primary/20 transition-colors" />
                </div>
                <motion.div
                  className="pointer-events-none absolute inset-x-0 -bottom-10 h-28 rounded-full bg-primary/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-32 bg-foreground rounded-3xl p-8 lg:p-12 overflow-hidden relative"
        >
          <motion.div
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at top right, rgba(255,189,88,0.12), transparent 55%)" }}
            animate={{ opacity: [0.25, 0.35, 0.25] }}
            transition={{ repeat: Infinity, duration: 24, ease: "easeInOut" }}
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative">
            {[
              { value: "3", label: "Core Services", suffix: "" },
              { value: "100", label: "Expert Team", suffix: "+" },
              { value: "24/7", label: "Support Available", suffix: "" },
              { value: "50", label: "Partner Companies", suffix: "+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-background/70 text-sm">{stat.label}</div>
                <motion.div
                  className="absolute inset-x-6 -bottom-5 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent"
                  animate={{ opacity: [0.2, 0.6, 0.2] }}
                  transition={{ repeat: Infinity, duration: 4, delay: index * 0.15 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;

