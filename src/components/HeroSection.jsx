import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";

const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.75, 0.92]);
  const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  const floatingHighlights = [
    { label: "Human Resources", icon: "👥", delay: 0.2 },
    { label: "Real Estate", icon: "🏙️", delay: 0.35 },
    { label: "Tourism", icon: "✈️", delay: 0.5 },
    { label: "AI Automation", icon: "🤖", delay: 0.65 },
  ];

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen">
      {/* Full Background Image - starts below navbar */}
      <motion.div
        className="absolute top-20 left-0 right-0 bottom-0 z-0"
        style={{
          y: backgroundY,
          backgroundImage: "url(/assets/hero3.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Overlay for better text readability */}
      <motion.div
  className="absolute top-20 left-0 right-0 bottom-0 bg-linear-to-br from-black/70 via-black/55 to-black/80 z-10"
        style={{ opacity: overlayOpacity }}
      />

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-20">
        <div className="pattern-grid opacity-20" />
        <motion.div
          className="absolute top-40 left-10 w-72 h-72 bg-orange-400/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-16 right-10 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        />
      </div>

      <motion.div style={{ y: foregroundY }} className="container mx-auto px-10 sm:px-6 lg:px-12 h-full relative z-30 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full py-32 sm:py-36 lg:pt-40 lg:pb-12">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-left order-2 lg:order-1 max-w-2xl"
          >
            {/* Badge */}
            <motion.div 
              variants={itemVariants}
              className="floating-badge mb-6 sm:mb-6 text-white/90"
            >
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
              <span className="text-xs sm:text-sm font-medium">Dubai's Premier Consultancy</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.15] mb-6 sm:mb-6"
            >
              Where{" "}
              <span className="gradient-text">People</span>
              {" "}and{" "}
              <span className="gradient-text">Properties</span>
              {" "}Align
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={itemVariants}
              className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg mb-8 sm:mb-8"
            >
              Your trusted partner for Human Resources, Real Estate, Tourism, and AI Automation solutions in Dubai. Building smarter futures together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 sm:mb-10"
            >
              <motion.a
                href="#services"
                className="btn-primary inline-flex items-center justify-center gap-2 text-center w-full sm:w-auto"
                whileHover={{ scale: 1.05, gap: "12px" }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
                <FiArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 text-sm font-semibold border-2 border-white/30 bg-transparent text-white rounded-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiPlay className="w-4 h-4" />
                Learn More
              </motion.a>
            </motion.div>

            {/* Trusted Logos */}
            <motion.div
              variants={itemVariants}
              className="mt-2 flex flex-wrap items-center gap-4 sm:gap-6 text-white/60 text-xs uppercase tracking-[0.2em]"
            >
              <span className="text-white/70 font-semibold tracking-[0.15em]">Trusted By</span>
              {["Investors", "Developers", "HR Leaders"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  {item}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Enhanced Content Area */}

        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-3 bg-orange-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
