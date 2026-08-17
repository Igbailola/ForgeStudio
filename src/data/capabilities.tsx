import React from "react";
import { Wrench, Code2, Sparkles, Smartphone } from "lucide-react";

export interface CapabilityItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: "light" | "dark";
}

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: "product-design",
    icon: <Wrench className="w-5 h-5" />,
    title: "Digital Product Design",
    description:
      "End-to-end UI/UX design focusing on intuitive user flows, high-fidelity prototyping, and rigorous design systems that scale.",
  },
  {
    id: "front-end",
    icon: <Code2 className="w-5 h-5" />,
    title: "Front-End Engineering",
    description:
      "Performant, accessible, and responsive code architectures tailored for fast interactions and modern user experiences.",
  },
  {
    id: "brand-strategy",
    icon: <Sparkles className="w-5 h-5" />,
    title: "Brand Strategy",
    description:
      "Positioning, messaging, and visual identity systems tailored for the modern digital realm.",
  },
  {
    id: "mobile",
    icon: <Smartphone className="w-5 h-5" />,
    title: "Mobile Architecture",
    description:
      "Native and cross-platform applications forged for optimal performance and native feel across mobile ecosystems.",
    variant: "dark",
  },
];
