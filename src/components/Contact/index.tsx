"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 bg-white overflow-hidden"
    >
      {/* Subtle blue lighting background */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#94A9FF]/25 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-100px] w-[350px] h-[350px] bg-[#4D6DE8]/15 blur-3xl rounded-full"></div>

      <div className="relative container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl bg-white border border-[#E6EAFF] rounded-3xl shadow-[0_8px_25px_rgba(77,109,232,0.12)] hover:shadow-[0_12px_35px_rgba(77,109,232,0.18)] p-10 sm:p-14 transition-all duration-300"
        >
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E2A78] mb-6 text-center">
            Contact Us
          </h2>

          {/* Paragraph */}
          <p className="text-lg md:text-xl text-[#374151] leading-relaxed text-center mb-10">
            <strong>We’d love to hear from you!</strong>  
            Whether you’re an EV OEM, battery pack developer,  
            energy storage integrator, or investor — let’s explore how we can collaborate  
            to shape the future of battery intelligence.
          </p>

          {/* Email highlight box */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-gradient-to-r from-[#4D6DE8] to-[#94A9FF] text-white py-6 px-8 rounded-2xl shadow-[0_5px_20px_rgba(77,109,232,0.3)]"
          >
            <p className="text-lg md:text-xl font-medium text-center sm:text-left">
              📧 Connect with us at
            </p>
            <Link
              href="mailto:tech@cellai.in"
              className="text-lg md:text-xl font-semibold underline underline-offset-4 hover:text-[#E6EAFF] transition"
            >
              tech@cellai.in
            </Link>
          </motion.div>

          {/* Optional CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <Link
              href="#partners"
              className="rounded-xl border border-[#4D6DE8] text-[#4D6DE8] px-8 py-3 text-lg font-medium hover:bg-[#4D6DE8] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Become a Partner
            </Link>
            <Link
              href="#solutions"
              className="rounded-xl bg-[#4D6DE8] text-white px-8 py-3 text-lg font-medium hover:bg-[#3b5cdc] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Explore Solutions
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
