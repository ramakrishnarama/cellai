"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden bg-white pb-16 pt-[140px] md:pb-[140px] md:pt-[180px] xl:pb-[160px] xl:pt-[200px] 2xl:pb-[180px] 2xl:pt-[220px]"
    >
      <div className="container relative">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mx-auto max-w-[850px] text-center"
            >
              {/* Headline */}
              <h1 className="mb-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-[#1E2A78] dark:text-white">
                Powering the Future of{" "}
                <span className="bg-gradient-to-r from-[#4D6DE8] to-[#94A9FF] bg-clip-text text-transparent">
                  Battery Intelligence
                </span>
              </h1>

              {/* Paragraph */}
              <p className="mb-12 text-lg sm:text-xl md:text-2xl text-[#374151] dark:text-gray-300 leading-relaxed max-w-[800px] mx-auto">
                We are a deep-tech startup revolutionizing battery intelligence
                with advanced modeling, estimation, and digital twin
                technologies. From real-time SOC/SOH estimation to lifetime
                prediction, we bring precision and reliability to battery
                management systems (BMS) across electric vehicles, energy
                storage, and beyond.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link
                  href="#solutions"
                  className="rounded-xl bg-gradient-to-r from-[#4D6DE8] to-[#94A9FF] text-white px-10 py-4 text-lg font-semibold shadow-[0_6px_25px_rgba(77,109,232,0.4)] hover:scale-105 transition-transform duration-300"
                >
                  Explore Solutions
                </Link>
                <Link
                  href="#partners"
                  className="rounded-xl border border-[#4D6DE8] text-[#4D6DE8] px-10 py-4 text-lg font-semibold hover:bg-[#4D6DE8]/10 hover:scale-105 transition-all duration-300"
                >
                  Partner With Us
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Keep your SVG background EXACTLY as it is */}
      <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" />
          <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)" />
          <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)" />
          <circle
            cx="325.486"
            cy="302.87"
            r="180"
            transform="rotate(-37.6852 325.486 302.87)"
            fill="url(#paint3_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="184.521"
            cy="315.521"
            r="132.862"
            transform="rotate(114.874 184.521 315.521)"
            stroke="url(#paint4_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="356"
            cy="290"
            r="179.5"
            transform="rotate(-30 356 290)"
            stroke="url(#paint5_linear_25:217)"
          />
          <circle
            opacity="0.8"
            cx="191.659"
            cy="302.659"
            r="133.362"
            transform="rotate(133.319 191.659 302.659)"
            fill="url(#paint6_linear_25:217)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_25:217"
              x1="-54.5003"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4D6DE8" />
              <stop offset="1" stopColor="#4D6DE8" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
            >
              <stop offset="0.145833" stopColor="#4D6DE8" stopOpacity="0" />
              <stop offset="1" stopColor="#4D6DE8" stopOpacity="0.08" />
            </radialGradient>
            <radialGradient
              id="paint2_radial_25:217"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
            >
              <stop offset="0.145833" stopColor="#4D6DE8" stopOpacity="0" />
              <stop offset="1" stopColor="#4D6DE8" stopOpacity="0.08" />
            </radialGradient>
            <linearGradient
              id="paint3_linear_25:217"
              x1="226.775"
              y1="-66.1548"
              x2="292.157"
              y2="351.421"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4D6DE8" />
              <stop offset="1" stopColor="#4D6DE8" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_25:217"
              x1="184.521"
              y1="182.159"
              x2="184.521"
              y2="448.882"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4D6DE8" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_25:217"
              x1="356"
              y1="110"
              x2="356"
              y2="470"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4D6DE8" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear_25:217"
              x1="118.524"
              y1="29.2497"
              x2="166.965"
              y2="338.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4D6DE8" />
              <stop offset="1" stopColor="#4D6DE8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Bottom SVG stays same */}
      <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
        {/* ...keep your second SVG unchanged */}
      </div>
    </section>
  );
};

export default Hero;
