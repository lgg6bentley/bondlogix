import Image from "next/image";
import Link from "next/link";
import Footer from "@/app/components/Footer";
import PricingDropDown from "@/app/components/PricingDropDown";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-trust text-signal font-sans">
      {/* Top Nav Bar */}
      <header className="flex items-center justify-between px-6 py-4 text-sm font-medium">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/bondlogix_logo.png"
            alt="BondLogix Logo"
            width={64}
            height={64}
            priority
          />
          <span className="text-lg font-broadcast tracking-wide">BondLogix</span>
        </div>

        {/* Right: Pricing + Auth */}
        <div className="flex items-center gap-4">
          <PricingDropDown />
          <Link href="/login" className="hover:text-grit transition">Login</Link>
          <Link
            href="/signup"
            className="rounded-full bg-signal px-4 py-2 text-trust font-semibold hover:bg-grit hover:text-black transition"
          >
            Sign Up
          </Link>
        </div>
      </header>

{/* Spacer block */}
<div><div className="h-12 sm:h-16" /></div>



      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center px-6 py-24 text-center sm:px-12">
        <h1 className="text-4xl font-broadcast tracking-tight text-grit sm:text-5xl">
          BondLogix: Branded SaaS Systems
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-8 text-signal sm:text-xl">
          We build founder-led platforms with trust-frequency clarity and broadcast-grade polish. AutoSec delivers audits. BondLogix builds the system.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/start"
            className="rounded-full bg-signal px-6 py-3 text-trust font-medium transition hover:bg-grit hover:text-black"
          >
            Start Your Build
          </Link>
          <Link
            href="/docs"
            className="rounded-full border border-signal px-6 py-3 text-signal transition hover:bg-signal hover:text-trust"
          >
            View Docs
          </Link>
        </div>
      </main>
    </div>
  );
}
