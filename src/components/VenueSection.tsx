import { motion } from "framer-motion";
import { MapPin, Clock, Calendar } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const VenueSection = () => {
  return (
    <section className="wedding-section bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 border-2 border-gold rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border-2 border-gold rounded-full translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl text-cream mb-4">
            Save The Date
          </h2>
          <div className="ornate-divider">
            <span className="text-gold text-2xl">✧</span>
          </div>
        </motion.div>

        <CountdownTimer />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <h3 className="font-display text-2xl md:text-3xl text-gold mb-6">
            Venue Details
          </h3>
          <div className="flex flex-row justify-center items-start gap-4 flex-wrap md:grid md:grid-cols-3 md:gap-8 md:px-8">
            <div className="flex flex-col items-center min-w-[90px]">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-gold flex items-center justify-center mb-2 md:mb-4">
                <Calendar className="w-5 h-5 md:w-7 md:h-7 text-gold" />
              </div>
              <p className="font-display text-xs md:text-xl text-cream">22nd February 2026</p>
              <p className="font-body text-[10px] md:text-base text-cream/70">Sunday</p>
            </div>
            <div className="flex flex-col items-center min-w-[90px]">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-gold flex items-center justify-center mb-2 md:mb-4">
                <Clock className="w-5 h-5 md:w-7 md:h-7 text-gold" />
              </div>
              <p className="font-display text-xs md:text-xl text-cream">12:12 PM</p>
              <p className="font-body text-[10px] md:text-base text-cream/70">Wedding Muhurat</p>
            </div>
            <div className="flex flex-col items-center min-w-[90px]">
              <div className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-gold flex items-center justify-center mb-2 md:mb-4">
                <MapPin className="w-5 h-5 md:w-7 md:h-7 text-gold" />
              </div>
              <p className="font-display text-xs md:text-xl text-cream">Valasang Wada</p>
              <p className="font-body text-[10px] md:text-base text-cream/70">Solapur</p>
            </div>
          </div>

          <motion.a
            href="https://www.google.com/maps/place/Valsang+Vaada+Pure+Vegetarian+Family+Restaurant+%26+Banquet+Hall+%7C+Marriage+Lawns+%26+Yatri+Niwas,+in+Valsang+Solapur/@17.595879,76.0630299,17z/data=!4m9!3m8!1s0x3bc5dfcb2a3aa087:0x7cbfefe10f58466d!5m2!4m1!1i2!8m2!3d17.595879!4d76.0656048!16s%2Fg%2F11cn2txqc1?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mt-10 btn-wedding"
          >
            View on Map
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
