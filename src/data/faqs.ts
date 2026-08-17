export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export const FAQS: FaqItem[] = [
  {
    id: "timeline",
    question: "What is your typical project timeline?",
    answer:
      "Our average engagement spans 4 to 12 weeks depending on scope and complexity. Sprint 1 is dedicated to Discovery & Strategy, followed by rapid 2-week agile design and engineering iterations with continuous stakeholder demos.",
    defaultOpen: true,
  },
  {
    id: "pricing",
    question: "How do you structure your pricing?",
    answer:
      "We operate on fixed-scope project milestones for well-defined builds, or dedicated monthly retainer sprints for ongoing product engineering. Every engagement receives a transparent, line-item proposal before kickoff.",
  },
  {
    id: "support",
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Every build includes 30 days of post-launch hypercare and bug-fix warranty. We also offer dedicated ongoing growth retainers for continuous feature shipping and optimization.",
  },
  {
    id: "technologies",
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern frontend and full-stack architectures: Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Node.js, and headless CMS/API integrations.",
  },
  {
    id: "ownership",
    question: "Who owns the code and design assets?",
    answer:
      "You retain 100% intellectual property ownership of all Figma design systems, tokens, code repositories, and brand assets upon project completion.",
  },
];
