import React from "react";
import { Layout, Palette, TrendingUp, PenTool } from "lucide-react";

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    icon: <Layout className="w-5 h-5" />,
    title: "Web Design",
    description:
      "We build fast, responsive, and aesthetically striking websites that command attention. Our designs are rooted in modern principles, ensuring a flawless experience across all devices.",
    tags: ["React", "Tailwind", "Next.js"],
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Branding",
    description:
      "We forge memorable brand identities that resonate deeply with your audience. From logo design to comprehensive brand guidelines, we establish your unique voice in the market.",
    tags: ["Identity", "Strategy", "Guidelines"],
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Digital Strategy",
    description:
      "We map out comprehensive digital roadmaps to achieve your business objectives. Our data-driven approach ensures every initiative delivers measurable impact and ROI.",
    tags: ["SEO", "Analytics", "Growth"],
  },
  {
    icon: <PenTool className="w-5 h-5" />,
    title: "UI/UX Design",
    description:
      "We design intuitive, user-centric interfaces that engage and convert. We focus on seamless interactions and elegant visual hierarchies to elevate the user journey.",
    tags: ["Wireframing", "Prototyping", "Testing"],
  },
];

export const INQUIRY_OPTIONS = [
  "New Project Inquiry",
  "UI/UX & Product Design",
  "Web Development & Architecture",
  "Brand Identity & Strategy",
  "General Question",
] as const;
