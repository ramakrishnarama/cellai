import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div
      className="react-parallax "
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* <Image
        className="react-parallax-bgimage"
        src="/images/cellAi/image.png"
        alt=""
        width={1920}
        height={1024}
        style={{
          position: "absolute",
          bottom: "0", // ✅ Stick to bottom
          right: "0", // ✅ Stick to right
          width: "40%", // ✅ Adjust size (tweak as needed)
          height: "auto", // ✅ Maintain aspect ratio
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
          filter: "none",
          objectFit: "contain", // ✅ Prevent distortion
        }}

      /> */}
      <div
        className="hero-sec react-parallax-content"
        style={{ position: "relative" }}
      >
        <div className="hero-section overlay2 relative home-slider-11">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="content-wrapper height-70">
                  <div className="hero-content text-center content-center">
                    <div className="banner-contant">
                      <h1 className="dz-title">Powering the Future of Battery Intelligence.</h1>
                        <p>
                          We are a deep-tech startup revolutionizing battery intelligence with advanced modeling, estimation, and digital twin technologies. From real-time SOC/SOH estimation to lifetime prediction, we bring precision and reliability to battery management systems (BMS) across electric vehicles, energy storage, and beyond.
                        </p>
                    </div>
                    <div className="subtitle style3" style={{ color: "#155dfc" }}>
                      
                    </div>

                    <div className="subtitle fs-16" style={{ color: "#000000" }}>
                    </div>
                    {/* <Link className="site-button" href="/services-1">
                      our services
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
