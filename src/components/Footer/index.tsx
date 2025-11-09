"use client";

import React from "react";
import Link from "next/link";
import { footerLinks2, socialLinks } from "@/app/data/footerLinks";

export default function Footer6() {
  return (
    <footer className="site-footer font-sans relative overflow-hidden">
      {/* ===== Background Gradient ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#94A9FF] via-[#C5D0FF] to-[#E6EAFF]" />
      <div className="absolute inset-0 bg-[url('/images/footer-bg.jpg')] bg-cover bg-center opacity-[0.08] animate-slowZoom" />

      {/* ===== Contact Info Cards ===== */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-center text-[#1E2A78] text-2xl sm:text-3xl font-bold mb-12">
            Get in Touch With Us
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* === Card Template === */}
            {[
              {
                title: "Company Address",
                icon: "ti-location-pin",
                content: (
                  <>
                    EV COE, JSSATE-B Campus,Dr.Vishnuvardhan Rd,
                    Uttarahalli-Kengeri Main Road, Srinivaspura, <br /> Bengaluru - 560060, India
                  </>
                ),
              },
              {
                title: "E-mail",
                icon: "ti-email",
                content: (
                  <>
                    <a
                      href="mailto:tech@cellai.in"
                      className="hover:text-[#4D6DE8] transition"
                    >
                      tech@cellai.in
                    </a>
                  </>
                ),
              },
              {
                title: "Phone Numbers",
                icon: "ti-mobile",
                content: (
                  <>
                    <a href="tel:+919980755835" className="hover:text-[#4D6DE8] transition">
                      +91 99807 55835
                    </a>
                    <br />
                    <a href="tel:+919731095791" className="hover:text-[#4D6DE8] transition">
                      +91 97310 95791
                    </a>
                  </>
                ),
              },
              {
                title: "Office Hours",
                icon: "ti-alarm-clock",
                content: (
                  <>
                    Mon – Sat: 08:00 – 18:00
                    <br />
                    Sunday: Closed
                  </>
                ),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-left shadow-[0_6px_25px_rgba(77,109,232,0.15)] hover:shadow-[0_8px_30px_rgba(77,109,232,0.25)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <i className={`${item.icon} text-2xl text-[#4D6DE8]`} />
                  <h5 className="font-semibold text-lg text-[#1E2A78]">{item.title}</h5>
                </div>
                <p className="text-[#374151] text-sm leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Divider Line ===== */}
      <div className="relative z-10 border-t border-[#B4C3FF]/60"></div>

      {/* ===== Footer Bottom ===== */}
      <div className="relative z-10 py-6 text-center text-[#1E2A78]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2 text-sm">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-[#4D6DE8]">CellAI Technologies</span>.
            All rights reserved.
          </p>
          <span className="hidden md:inline mx-2 text-[#4D6DE8]">|</span>
          {/* <p>
            <Link href="/privacy-policy" className="hover:text-[#4D6DE8] transition">
              Privacy Policy
            </Link>{" "}
            /{" "}
            <Link href="/help-desk" className="hover:text-[#4D6DE8] transition">
              Help Desk
            </Link>
          </p> */}
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="w-9 h-9 flex items-center justify-center rounded-full bg-[#4D6DE8]/10 text-[#4D6DE8] hover:bg-[#4D6DE8] hover:text-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              <i className={link.iconClass}></i>
            </a>
          ))}
        </div>
      </div>

      {/* ===== Background Animation ===== */}
      <style jsx>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-slowZoom {
          animation: slowZoom 25s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}
