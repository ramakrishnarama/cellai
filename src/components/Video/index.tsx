"use client";

import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="py-4 md:py-8 lg:py-12">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[550px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/cellAi/ourTechnology.png"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              {/* <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              /> */}
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
              <div className="container">
                <SectionTitle
                  title="Partner With Us - We are ready to help"
                  paragraph="We’re actively seeking partnerships with : Let’s co-create intelligent, reliable, and sustainable energy storage solutions."
                  center
                  mb="80px"
                  points={[{
                    title: 'EV OEMs',
                    description : ""
                  },
                  {
                    title: 'Battery Pack Integrators',
                    description : ""
                  },
                  {
                    title: 'Fleet Operators',
                    description : ""
                  },
                  {
                    title: 'Battery Swapping Infrastructure Providers',
                    description : ""
                  }]}
                />
              </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  // return (
  //   <>
  //     <section className="relative z-10 py-4 md:py-8 lg:py-12">
  //       <div className="container">
  //         <SectionTitle
  //           title="Partner With Us - We are ready to help"
  //           paragraph="We are a team of passionate engineers dedicated to transforming battery technology through cutting-edge algorithms and digital twin innovation. Our solutions unlock new levels of performance, safety, and longevity for electric vehicles, energy storage systems, and more."
  //           center
  //           mb="80px"
  //           points={[]}
  //         />
  //       </div>
  //       <div className="relative overflow-hidden">
  //         <div className="-mx-4 flex flex-wrap">
  //           <div className="w-full px-4">
  //             <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
  //               <div className="relative aspect-77/40 items-center justify-center">
  //                 <Image
  //                   src="/images/cellAi/ourTechnology.png"
  //                   alt="video image"
  //                   className="object-cover"
  //                   fill
  //                 />
  //                 {/* <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
  //                   <button
  //                     aria-label="video play button"
  //                     onClick={() => setOpen(false)}
  //                     className="text-primary flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/75 transition hover:bg-white"
  //                   >
  //                     <svg
  //                       width="16"
  //                       height="18"
  //                       viewBox="0 0 16 18"
  //                       className="fill-current"
  //                     >
  //                       <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
  //                     </svg>
  //                   </button>
  //                 </div> */}
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         <div className="absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat">
  //           {/* <div className="absolute bottom-0 left-0 right-0 z-[-1] "> */}
  //           {/* <img src="/images/video/shape.svg" alt="shape" className="w-full" /> */}
  //         </div>
  //       </div>
  //     </section>

  //     <VideoModal
  //       isOpen={isOpen}
  //       onClose={() => setOpen(false)}
  //       channel="youtube"
  //       videoId="L61p2uyiMSo"
  //     />
  //   </>
  // );
};
