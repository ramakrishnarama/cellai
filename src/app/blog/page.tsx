import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
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


const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Blog Grid"
        description=""
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData.map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="bg-body-color/15 text-body-color flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md px-4 text-sm">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="bg-body-color/15 text-body-color hover:bg-primary flex h-9 min-w-[36px] items-center justify-center rounded-md px-4 text-sm transition hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
