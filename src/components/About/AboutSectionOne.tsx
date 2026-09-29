"use client";

import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import { motion } from "framer-motion";

const AboutSectionOne = () => {
  return (
    <section id="solutions" className="relative py-24 bg-white overflow-hidden">
      {/* Subtle blue blurred glow for background depth */}
      <div className="absolute top-[-120px] left-[-80px] w-[400px] h-[400px] bg-[#94A9FF]/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-[#4D6DE8]/15 blur-3xl rounded-full"></div>

      <div className="relative container mx-auto px-6">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
          {/* === Left Content === */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 bg-white rounded-3xl p-10 shadow-[0_8px_25px_rgba(77,109,232,0.12)] hover:shadow-[0_10px_35px_rgba(77,109,232,0.18)] border border-[#E6EAFF] transition-all duration-300"
          >
            <SectionTitle
              title="Our Solutions"
              paragraph="Empowering battery innovation with our scalable, model-based solutions and advanced analytics."
              mb="32px"
              points={[
                {
                  title: "EV Battery Management —",
                  description:
                    "Scalable BMS solutions for 2W, 3W, and LCVs. Integrate SOC/SOH estimation directly into your platform.",
                },
                {
                  title: "Battery Analytics API —",
                  description:
                    "Integrate your data seamlessly with our dashboard. Gain actionable insights, alerts, and reports.",
                },
                {
                  title: "Digital Twin Consulting —",
                  description:
                    "Customize RUL prediction models and simulate real-world behavior for your specific battery chemistry.",
                },
                {
                  title: "Lab to Road —",
                  description:
                    "End-to-end validation support from cell characterization to on-road deployment.",
                },
              ]}
            />
          </motion.div>

          {/* === Right Image === */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-[600px] aspect-[25/22] rounded-3xl overflow-hidden shadow-[0_15px_40px_rgba(77,109,232,0.2)]">
              <Image
                src="/images/cellAi/solutionsCellAi3d.png"
                alt="Battery Solutions"
                fill
                className="object-contain"
                priority
              />
              {/* Soft radial light overlay for 3D shine */}
              <div className="absolute inset-0 bg-gradient-radial from-white/30 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
