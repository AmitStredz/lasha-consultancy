import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiUsers, FiHome, FiCpu, FiArrowRight, FiGlobe } from "react-icons/fi";

const services = [
  {
    icon: FiUsers,
    title: "Human Resources",
    description: "Comprehensive HR solutions including talent acquisition, workforce planning and employee development strategies.",
    image: '/assets/hr.webp',
    // features: ["Talent Acquisition", "Workforce Planning"],
  },
  {
    icon: FiHome,
    title: "Real Estate",
    description: "Expert real estate services covering market analysis, property valuation, investment consulting, and strategic property management.",
    image: '/assets/real.webp',
    // features: ["Market Analysis", "Property Valuation", "Investment Consulting"],
  },
  {
    icon: FiCpu,
    title: "AI Automation",
    description: "Cutting-edge AI-powered automation solutions to streamline operations, enhance productivity, and drive data-driven decision making.",
    image: '/assets/ai.webp',
    // features: ["Process Automation", "Data Analytics", "Smart Solutions"],
  },
  {
    icon: FiGlobe,
    title: "Tourism",
    description: "Premium tourism services offering curated travel experiences, destination management, tour planning, and hospitality consulting across UAE.",
    image: '/assets/tourism.webp',
    // features: ["Destination Management", "Tour Planning", "Hospitality Consulting"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section
      id="services"
      className="relative bg-services py-24 lg:py-32"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="pattern-grid opacity-20" />
        <motion.div
          className="absolute inset-0"
          style={{ background: "radial-gradient(circle at top, rgba(255, 189, 88, 0.08), transparent 55%)" }}
          animate={{ opacity: [0.25, 0.35, 0.25] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-[-10%] right-[10%] w-56 h-56 rounded-full bg-primary/8 blur-3xl"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-15%] left-[5%] w-72 h-72 rounded-full bg-secondary/10 blur-3xl"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-services-foreground mb-6">
            Our <span className="gradient-text drop-shadow-[0_10px_40px_rgba(255,189,88,0.35)]">Services</span>
          </h2>
          <p className="text-services-foreground/70 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored to elevate your business in Dubai's dynamic market.
            From HR and real estate to AI automation and tourism, each engagement blends human expertise with forward-looking innovation.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs uppercase tracking-[0.3em] text-services-foreground/50">
            {"Strategy • Execution • Growth".split(" • ").map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-primary/60" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white shadow-lg p-0 card-hover"
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-lg">
                  <service.icon className="w-6 h-6 text-primary-foreground text-white" />
                </div>

                {/* Number */}
                <div className="absolute top-4 right-4 text-6xl font-display font-bold text-white/60">
                  0{index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 bg-white">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                {/* <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div> */}

                {/* CTA */}
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-primary font-medium text-sm group/link"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <FiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </motion.a>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-linear-to-t from-primary/5 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-1/2 h-32 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
