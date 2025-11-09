"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../Common/SectionTitle";

export default function PartnerSection() {
  return (
    <section id="partners" className="relative py-24 bg-white overflow-hidden">
      {/* Subtle blue background glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#94A9FF]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-100px] w-[350px] h-[350px] bg-[#4D6DE8]/15 blur-3xl rounded-full"></div>

      <div className="relative container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* LEFT IMAGE BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[600px] aspect-[25/14] rounded-3xl overflow-hidden border border-[#E6EAFF] shadow-[0_8px_25px_rgba(77,109,232,0.12)] hover:shadow-[0_10px_35px_rgba(77,109,232,0.18)] transition-all duration-300">
              <Image
                src="/images/cellAi/solutions3d.png"
                alt="Partnership Diagram"
                fill
                className="object-contain"
                priority
              />
              {/* Gentle highlight layer for a 3D glassy shine */}
              <div className="absolute inset-0 bg-gradient-radial from-white/40 to-transparent"></div>
            </div>
          </motion.div>

          {/* RIGHT TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white rounded-3xl p-10 shadow-[0_6px_20px_rgba(77,109,232,0.12)] border border-[#E6EAFF]">
              <SectionTitle
                title="Partner With Us — We are ready to help"
                paragraph="We’re actively seeking partnerships to co-create intelligent, reliable, and sustainable energy storage solutions."
                mb="32px"
                points={[
                  { title: "EV OEMs", description: "" },
                  { title: "Battery Pack Integrators", description: "" },
                  { title: "Fleet Operators", description: "" },
                  {
                    title: "Battery Swapping Infrastructure Providers",
                    description: "",
                  },
                ]}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
