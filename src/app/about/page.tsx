import Timeline from "@/app/components/Timeline";

export default function AboutPage() {
  return (
    <main className="px-6 py-16 max-w-3xl mx-auto text-signal">
      <h1 className="text-4xl font-broadcast text-grit mb-6">About BondLogix</h1>
      <p className="text-lg leading-7 mb-8">
        BondLogix is a founder-first platform for building branded SaaS systems with trust-frequency clarity and broadcast-grade polish. We ritualize every technical milestone—from schema to launch—so your system transmits legacy, not noise.
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-grit mb-2">Our Origin</h2>
        <p className="text-signal/90">
          BondLogix was born from the audit delivery pipeline of AutoSec. As founders demanded more clarity, modularity, and emotional resonance, we evolved into a system builder that encodes trust into every deploy. Every dashboard is a broadcast artifact. Every correction is a legacy pivot.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-grit mb-2">Our Ethos</h2>
        <ul className="list-disc list-inside text-signal/90">
          <li>We honor grit, clarity, and underdog brilliance</li>
          <li>We ritualize every correction as a mythic moment</li>
          <li>We build systems that feel branded from the first click</li>
          <li>We treat every deploy as a founder broadcast</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-grit mb-2">Founder-Grade Systems</h2>
        <p className="text-signal/90">
          Whether you're launching a platform, delivering audits, or encoding trust into your onboarding flow—BondLogix scaffolds your system with modular precision and mythic clarity. We don’t just build software. We build legacy.
        </p>
      </section>

      <p className="text-sm text-signal/70 mt-12 mb-16">
        BondLogix is headquartered in code, but built for founders everywhere. Join the broadcast.
      </p>

      {/* Timeline Arc */}
      <Timeline />
    </main>
  );
}

