"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryBoxes } from "@/data/gallery";

import GallaryWrapper from "@/components/common/GallaryWrapper";
export default function ProjectGallery() {
  return (
    <div className="section-full">
      <div className="row m-lr0">
        <div
          className="col-xl-6 col-lg-12 p-lr0 d-flex dis-tbl latest-project-info bg-primary wow fadeInLeft"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          <div className="text-white align-self-center">
            <h2>Our Solutions</h2>
            <p>
              <b>EV Battery Management</b> — Scalable BMS solutions for 2W, 3W, and LCVs. Or integrate our SOC/SOH estimation into your platform.
            </p>
            <p>
              <b>Battery Analytics API</b> — Integrate your data with our dashboard. Receive insights, alerts and alarms.
            </p>
            <p>
              <b>Digital Twin Consulting</b> — Customize RUL prediction models for your battery chemistry.
            </p>
            <p>
              <b>Lab to Road</b> —  End-to-end support from cell characterization to vehicle validation.
            </p>
            {/* <Link
              href={`/portfolio-grid-2`}
              className="site-button btnhover15 white"
            >
              View Project
            </Link> */}
          </div>
        </div>
        <div
          className="col-xl-6 col-lg-12 p-lr0 wow fadeInRight"
          data-wow-duration="2s"
          data-wow-delay="0.3s"
        >
          {" "}
          <GallaryWrapper>
            <div className="row m-a0 lightgallery">
              {galleryBoxes.map((box, i) => (
                <div key={i} className={box.colClass}>
                  <div className="dlab-box overlay-gallery-bx1">
                    <div className="dlab-thum dlab-img-overlay1 primary">
                      <a>
                        <Image
                          className="img-cover"
                          alt=""
                          src={box.imgSrc}
                          width={box.imgWidth}
                          height={box.imgHeight}
                        />
                      </a>
                      <div className="overlay-bx">
                        <div className="overlay-icon">
                          <a
                            data-exthumbimage={box.imgSrc}
                            data-src={box.imgSrc}
                            title={box.title}
                          >
                            <i className="fas fa-play icon-bx-xs" />
                          </a>
                          <span className="check-km">
                            <i className="fas fa-search icon-bx-xs" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
          </GallaryWrapper>
        </div>
      </div>
    </div>
  );
}
