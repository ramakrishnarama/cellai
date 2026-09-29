"use client";

import { motion } from "framer-motion";
import { Feature } from "@/types/feature";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { title, paragraph, points } = feature;

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -6 }}
      className="group bg-white rounded-3xl p-10 border border-[#E6EAFF]
                 shadow-[0_6px_20px_rgba(77,109,232,0.12)]
                 hover:shadow-[0_14px_35px_rgba(77,109,232,0.25)]
                 transition-all duration-300"
    >
      {/* Title */}
      <h3 className="mb-6 text-2xl sm:text-3xl font-bold text-[#1E2A78] leading-snug">
        {title}
      </h3>

      {/* Paragraph */}
      {paragraph && (
        <p className="mb-6 text-base sm:text-lg text-[#374151] leading-relaxed">
          {paragraph}
        </p>
      )}

      {/* Bullet Points */}
      {points && points.length > 0 && (
        <ul className="space-y-3 text-[#1E2A78] text-base sm:text-lg">
          {points.map((point, index) => (
            <li key={index} className="flex items-start gap-2 leading-relaxed">
              <span className="text-[#4D6DE8] font-bold mt-[2px]">•</span>
              <span>
                <b>{point.title}</b> {point.description}
              </span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

export default SingleFeature;
