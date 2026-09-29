"use client";

import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-20 bg-white overflow-hidden"
    >
      {/* Soft blurred background accents */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-[#4D6DE8]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-80 h-80 bg-[#A4B6FF]/20 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-6">
        <SectionTitle
          title="Our Technology"
          paragraph="We leverage advanced model-based control, digital twin technology, and analytics to redefine modern battery intelligence."
          center
          points={[]}
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14"
        >
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
