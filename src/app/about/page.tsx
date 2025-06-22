import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Cell AI",
  description: "Cell AI",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="We are a passionate team of engineers and researchers specializing in model-based battery intelligence. With core expertise in MATLAB/Simulink and battery aging science, we are building cutting-edge solutions to power the next generation of energy systems."
      />
      {/* <AboutSectionOne /> */}
      {/* <AboutSectionTwo /> */}
    </>
  );
};

export default AboutPage;
