import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Cell AI Battery Intelligence",
  description:
    "Explore Cell AI's solutions for EV battery management, SOC/SOH estimation, digital twin, and IoT battery analytics.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Us"
        description="We are a team of passionate engineers dedicated to transforming battery technology through cutting-edge algorithms and digital twin innovation. Our solutions unlock new levels of performance, safety, and longevity for electric vehicles, energy storage systems, and more."
      />
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
