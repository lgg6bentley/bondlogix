export default function PrivacyPage() {
  return (
    <main className="px-6 py-16 max-w-3xl mx-auto text-signal">
      <h1 className="text-4xl font-broadcast text-grit mb-6">Privacy & Data Clarity</h1>
      <p className="text-lg leading-7 mb-8">
        BondLogix is built for founders. We honor your data with broadcast-grade transparency and mythic intent. This page outlines how we handle information, protect your platform, and encode trust into every interaction.
      </p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-grit mb-2">What We Collect</h2>
        <ul className="list-disc list-inside text-signal/90">
          <li>Platform usage data to improve founder experience</li>
          <li>Audit delivery metadata for AutoSec integrations</li>
          <li>Optional contact info for onboarding and support</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-grit mb-2">How We Use It</h2>
        <ul className="list-disc list-inside text-signal/90">
          <li>To personalize your build arc and dashboard flow</li>
          <li>To deliver branded audits with precision</li>
          <li>To support your founder journey with clarity</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-grit mb-2">Your Control</h2>
        <ul className="list-disc list-inside text-signal/90">
          <li>You can request data deletion or export anytime</li>
          <li>We never sell or share your data with third parties</li>
          <li>All audit artifacts are encrypted and founder-owned</li>
        </ul>
      </section>

      <p className="text-sm text-signal/70 mt-12">
        For legal details, refer to our full policy or reach out via the Contact page. BondLogix is built on trust, and your data is part of that legacy.
      </p>
    </main>
  );
}
