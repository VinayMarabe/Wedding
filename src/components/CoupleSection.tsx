import { motion } from "framer-motion";
import coupleIllustration from "@/assets/couple-illustration.png";

const CoupleSection = () => {
  return (
    <section className="wedding-section bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-4">
            The Happy Couple
          </h2>
          <div className="ornate-divider">
            <span className="text-gold text-2xl">❧</span>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-right"
          >
            <h3 className="font-display text-2xl md:text-3xl text-primary mb-2">
              Shubham Saboji
            </h3>
            <p className="font-body text-gold text-lg italic mb-4">The Groom</p>
            <p className="font-body text-muted-foreground leading-relaxed max-w-sm mx-auto lg:ml-auto lg:mr-0">
              Son of Mr. & Mrs. Saboji. A kind-hearted and ambitious individual, ready to begin a new journey with his soulmate.
            </p>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative shrink-0"
          >
            <div className="relative">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border-2 border-gold/40 rounded-3xl" />
              <div className="absolute -inset-8 border border-gold/20 rounded-3xl" />
              
              <img
                src={coupleIllustration}
                alt="Couple Illustration"
                className="w-72 md:w-96 h-auto relative z-10 animate-float"
              />
            </div>
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <h3 className="font-display text-2xl md:text-3xl text-primary mb-2">
              Pooja Marabe
            </h3>
            <p className="font-body text-gold text-lg italic mb-4">The Bride</p>
            <p className="font-body text-muted-foreground leading-relaxed max-w-sm mx-auto lg:mr-auto lg:ml-0">
              Daughter of Mr. & Mrs. Marabe. A graceful and creative soul, bringing joy and warmth to everyone around her.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
