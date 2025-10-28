"use client";

import { motion } from "framer-motion";

type Milestone = {
  year: string;
  title: string;
  description: string;
};

const milestones: Milestone[] = [
  {
    year: "2023",
    title: "AutoSec Audit Pipeline",
    description:
      "Launched AutoSec to deliver branded audit PDFs with trust-frequency clarity. Ritualized audit delivery as a broadcast-grade experience.",
  },
  {
    year: "2024",
    title: "BondLogix System Builder",
    description:
      "Pivoted from audit delivery to modular SaaS scaffolding. BondLogix emerged to help founders build branded platforms with mythic precision.",
  },
  {
    year: "2025",
    title: "Trust Frequency Components",
    description:
      "Released AuditSignal, branded onboarding flows, and broadcast-grade UI effects. Every deploy became a founder milestone.",
  },
  {
    year: "2026",
    title: "Founder Broadcast Network",
    description:
      "Expanding into standalone game platforms and immersive dashboards. BondLogix becomes a mythic system builder for underdog brilliance.",
  },
];

export default function Timeline() {
  return (
    <section className="px-6 py-16 max-w-4xl mx-auto text-signal">
      <h2 className="text-3xl font-broadcast text-grit mb-8">BondLogix Timeline</h2>
      <ul className="space-y-10">
        {milestones.map((m, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative pl-6 border-l-2 border-signal"
          >
            <div className="absolute left-0 top-0 w-3 h-3 bg-grit rounded-full" />
            <h3 className="text-xl font-semibold text-grit">
              {m.year} — {m.title}
            </h3>
            <p className="mt-2 text-signal/90">{m.description}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}


