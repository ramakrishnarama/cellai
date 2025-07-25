import { Feature } from "@/types/feature";
import Image from 'next/image';

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <Image
      src="/images/cellAi/image1.png" // <-- Make sure this file exists in /public/images/
      alt="SOC and SOH Estimation Icon"
      width={60}
      height={60}
    />
      // <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
      //   <path
      //     opacity="0.5"
      //     d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
      //   />
      //   <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z" />
      // </svg>
    ),
    title: "State of Charge & State of Health Estimation.",
    paragraph:
      "Accurate battery monitoring is the cornerstone of safe and efficient energy systems.",
      points:[{
        title: 'Kalman Filter-Based Algorithms: ',
        description : "Developed in MATLAB/Simulink, our adaptive filtering techniques ensure high-accuracy SOC and SOH estimation under dynamic load profiles."
      },
      {
        title: 'Robust across chemistries: ',
        description : "Tuned for LFP, NMC, and other popular lithium-ion cells."
      }]
  },
  {
    id: 2,
    icon: (
      <Image
      src="/images/cellAi/image2.png" // <-- Make sure this file exists in /public/images/
      alt="SOC and SOH Estimation Icon"
      width={60}
      height={60}
    />
      // <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
      //   <path
      //     opacity="0.5"
      //     d="M20.5914 34.2584C20.2394 34.5172 19.7603 34.5175 19.408 34.2593L4.19163 23.1079C3.8395 22.8498 3.36065 22.85 3.00873 23.1084L1.09802 24.5111C0.553731 24.9107 0.553731 25.7237 1.09802 26.1233L19.4082 39.5655C19.7604 39.824 20.2396 39.824 20.5918 39.5655L38.9029 26.1226C39.4469 25.7232 39.4473 24.9107 38.9036 24.5109L36.9701 23.0889C36.6177 22.8298 36.1378 22.8297 35.7854 23.0888L20.5914 34.2584Z"
      //   />
      //   <path d="M19.408 28.931C19.7603 29.1896 20.2396 29.1894 20.5918 28.9306L36.3556 17.3466L38.8979 15.4883C39.4437 15.0894 39.4446 14.275 38.8996 13.8749L20.5918 0.43445C20.2396 0.175911 19.7604 0.175913 19.4082 0.434452L1.09706 13.8774C0.553051 14.2767 0.552712 15.0892 1.09638 15.4891L3.62222 17.3466L19.408 28.931Z" />
      // </svg>
    ),
    title: "Model-Based BMS Architecture.",
    paragraph:
      "We’ve designed a modular, scalable Battery Management System using model-based development principles: ",
      points:[{
        title: '',
        description : "Deployment ready application code in embedded c language, supporting cell monitoring, protection, state estimation, and communication with other vehicle systems"
      },
      {
        title: '',
        description : "ASIL (Automotive Safety Integrity Level) compliance Support for multiple cell chemistries and hardware e.g. NXP, TI"
      },
      // {
      //   title: 'Thermal modeling',
      //   description : ""
      // },
      // {
      //   title: 'CAN-ready embedded deployment',
      //   description : ""
      // }
      ]
  },
  {
    id: 3,
    icon: (
      <Image
      src="/images/cellAi/image3.png" // <-- Make sure this file exists in /public/images/
      alt="SOC and SOH Estimation Icon"
      width={60}
      height={60}
    />
      // <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
      //   <path
      //     opacity="0.5"
      //     d="M20 30C22.75 30 25 32.25 25 35C25 37.75 22.75 40 20 40C17.25 40 15 37.75 15 35C15 32.25 17.25 30 20 30ZM35 30C37.75 30 40 32.25 40 35C40 37.75 37.75 40 35 40C32.25 40 30 37.75 30 35C30 32.25 32.25 30 35 30ZM35 15C37.75 15 40 17.25 40 20C40 22.75 37.75 25 35 25C32.25 25 30 22.75 30 20C30 17.25 32.25 15 35 15Z"
      //   />
      //   <path d="M20 15C22.75 15 25 17.25 25 20C25 22.75 22.75 25 20 25C17.25 25 15 22.75 15 20C15 17.25 17.25 15 20 15ZM20 0C22.75 0 25 2.25 25 5C25 7.75 22.75 10 20 10C17.25 10 15 7.75 15 5C15 2.25 17.25 0 20 0ZM5 30C7.75 30 10 32.25 10 35C10 37.75 7.75 40 5 40C2.25 40 0 37.75 0 35C0 32.25 2.25 30 5 30ZM5 15C7.75 15 10 17.25 10 20C10 22.75 7.75 25 5 25C2.25 25 0 22.75 0 20C0 17.25 2.25 15 5 15ZM5 0C7.75 0 10 2.25 10 5C10 7.75 7.75 10 5 10C2.25 10 0 7.75 0 5C0 2.25 2.25 0 5 0ZM35 0C37.75 0 40 2.25 40 5C40 7.75 37.75 10 35 10C32.25 10 30 7.75 30 5C30 2.25 32.25 0 35 0Z" />
      // </svg>
    ),
    title: "Battery Digital Twin.",
    paragraph:
      "Combining electrochemical understanding with real-world data: ",
      points:[{
        title: 'Built on calendar and cycling aging datasets',
        description : ""
      },
      {
        title: 'Predicts remaining useful life (RUL)',
        description : ""
      },
      {
        title: 'Enables virtual validation and warranty analytics',
        description : ""
      }]
    },
  ];
export default featuresData;
