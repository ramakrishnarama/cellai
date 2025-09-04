import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cell AI | Battery Intelligence & Digital Twin for EVs & IoT",
  description:
    "Cell AI revolutionizes EV and IoT batteries with advanced SOC/SOH estimation, digital twins, and scalable BMS for energy storage.",
  keywords: [
    "battery intelligence",
    "BMS software",
    "digital twin battery",
    "SOC estimation",
    "SOH estimation",
    "EV battery monitoring",
    "IoT energy storage",
    "battery lifetime prediction",
  ],
  openGraph: {
    title: "Cell AI | Battery Intelligence for EVs & IoT",
    description:
      "Next-gen battery intelligence — SOC/SOH estimation, model-based BMS, and digital twins for EVs and IoT.",
    url: "https://www.cellai.in",
    siteName: "Cell AI",
    images: [
      {
        url: "https://www.cellai.in/images/logo/cellAi.svg",
        width: 800,
        height: 800,
        alt: "Cell AI Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@your_handle", // if you have Twitter
    title: "Cell AI | Battery Intelligence & Digital Twin",
    description:
      "Scalable BMS, SOC/SOH estimation, and battery digital twins for EVs, IoT, and energy storage.",
    images: ["https://www.cellai.in/images/logo/cellAi.svg"],
  },
  icons: {
    icon: "/images/logo/cellAi.svg",
  },
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
