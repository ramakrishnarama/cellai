import type { JSX } from "react";
export type Feature = {
  id: number;
  icon: JSX.Element;
  title: string;
  paragraph: string;
  points: Array<{ title: string; description: string }>;
};
