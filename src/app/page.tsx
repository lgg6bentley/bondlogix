'use client'

import React, { useState } from 'react';
import { Menu, X, Rocket, LayoutGrid, Clock, Lightbulb, Zap, ArrowRight, CheckCircle, Database } from 'lucide-react';

// --- Internal Component Definitions ---

// Simplified Pricing Dropdown
const PricingDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const plans = [
    { name: 'Blueprint Session', href: '#', description: 'Deep-dive discovery & architecture plan.' },
    { name: 'MVP Launchpad', href: '#', description: 'Rapid development for initial product version.' },
    { name: 'Enterprise Scale', href: '#', description: 'Full-cycle, high-availability SaaS build.' },
  ];

  return (
    <div className="relative">
      {/* Button text: text-gray-900 (Dark text on light background) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-gray-900 hover:text-red-600 transition"
        aria-expanded={isOpen}
      >
        Pricing
        <svg className={`ml-1 h-4 w-4 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>

      {isOpen && (
        // Dropdown background: bg-white
        <div className="absolute right-0 mt-3 w-64 origin-top-right rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 z-20">
          <div className="p-2">
            {plans.map((plan) => (
              <a
                key={plan.name}
                href={plan.href}
                // Item hover background: hover:bg-gray-100 (subtle hover on light background)
                className="block rounded-lg p-3 hover:bg-gray-100 transition"
                onClick={() => setIsOpen(false)}
              >
                {/* Plan name text: text-gray-900 (Dark text) */}
                <p className="text-sm font-semibold text-gray-900">{plan.name}</p>
                {/* Description text: text-gray-500 */}
                <p className="mt-0.5 text-xs text-gray-500">{plan.description}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Simplified Footer
const AppFooter = () => (
  // Footer background: bg-gray-900 (Dark/Signal), text-white (Light text)
  <footer className="bg-gray-900 text-white py-12 px-6 sm:px-12 mt-16">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-semibold text-red-600 mb-4">Services</h3>
        <ul className="space-y-2 text-sm">
          <li className="text-gray-400"><a href="#offerings" className="hover:text-red-600 transition">Full SaaS Build</a></li>
          <li className="text-gray-400"><a href="#offerings" className="hover:text-red-600 transition">System Modernization</a></li>
          <li className="text-gray-400"><a href="#offerings" className="hover:text-red-600 transition">API Integration</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-red-600 mb-4">Company</h3>
        <ul className="space-y-2 text-sm">
          <li className="text-gray-400"><a href="#" className="hover:text-red-600 transition">About Us</a></li>
          <li className="text-gray-400"><a href="#" className="hover:text-red-600 transition">Careers</a></li>
          <li className="text-gray-400"><a href="#" className="hover:text-red-600 transition">Blog</a></li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-red-600 mb-4">Legal</h3>
        <ul className="space-y-2 text-sm">
          <li className="text-gray-400"><a href="#" className="hover:text-red-600 transition">Terms of Service</a></li>
          <li className="text-gray-400"><a href="#" className="hover:text-red-600 transition">Privacy Policy</a></li>
        </ul>
      </div>
      <div className="col-span-2 md:col-span-1">
        <h3 className="font-semibold text-red-600 mb-4">Contact</h3>
        <p className="text-sm text-gray-400">Ready to build? Get a free consultation today.</p>
        <a href="mailto:info@bondlogix.com" className="mt-2 inline-block text-sm font-semibold text-white hover:text-red-600 transition">info@bondlogix.com</a>
      </div>
    </div>
    {/* Copyright text: border-gray-600, text-gray-500 */}
    <div className="mt-12 pt-8 border-t border-gray-600 text-center text-xs text-gray-500">
      &copy; {new Date().getFullYear()} BondLogix. All rights reserved.
    </div>
  </footer>
);

// --- Main Application Component (Renamed to Home) ---

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Standard Tailwind mapping for reference:
  const COLORS = {
    // Primary Background (Light Grey)
    light_bg: '#f3f4f6', 
    // Dark Text/Foreground 
    dark_text: '#1f2937', 
    // Accent Color (Red)
    accent: '#ef4444', 
  };

  const navLinks = [
    { name: 'Offerings', href: '#offerings' },
    { name: 'Process', href: '#process' },
    { name: 'Integrations', href: '#integrations' },
  ];

  const OfferCard = ({ Icon, title, description }) => (
    // Card background: bg-white (White/Light)
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 transform hover:scale-[1.02]">
      <Icon className="w-10 h-10 text-red-600 mb-4" />
      {/* Title text: text-gray-900 (Dark text) */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      {/* Description text: text-gray-600 */}
      <p className="text-gray-600">{description}</p>
    </div>
  );

  return (
    // Overall page background: bg-gray-100 (Light Grey)
    // Primary text color: text-gray-900 (Dark text)
    <div className="bg-gray-100 flex min-h-screen flex-col text-gray-900 font-sans antialiased">

      {/* Top Nav Bar */}
      {/* Header background: bg-white/95 (White/Light) */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-sm font-medium">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <Rocket className="w-8 h-8 text-red-600" />
            {/* Logo text: text-gray-900 (Dark text) */}
            <span className="text-xl font-extrabold tracking-tight text-gray-900">BondLogix</span>
          </div>

          {/* Desktop Links: text-gray-900 (Dark text) */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="text-gray-900 hover:text-red-600 transition font-medium">
                {link.name}
              </a>
            ))}
            <PricingDropDown />
          </nav>

          {/* Right: Auth & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <a href="/login" className="hidden md:block text-gray-900 hover:text-red-600 transition">Login</a>
            <a
              href="/signup"
              // Sign Up Button: bg-gray-900 (Dark), text-white (Light text)
              className="hidden md:block rounded-full bg-gray-900 px-4 py-2 text-white font-semibold hover:bg-red-600 transition shadow-md"
            >
              Sign Up
            </a>

            {/* Mobile Menu Button: text-gray-900 (Dark text) */}
            <button
              className="md:hidden text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown: bg-white (Light) */}
        <div
          className={`md:hidden absolute w-full bg-white transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0'
          }`}
          style={{ transitionProperty: 'max-height, opacity' }}
        >
          {/* Mobile links: text-gray-900 (Dark text) */}
          <div className="flex flex-col gap-4 px-6 text-base font-medium text-gray-900">
            {navLinks.map(link => (
              <a key={link.name} href={link.href} className="block hover:text-red-600 transition" onClick={() => setIsMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <div className="py-2"><PricingDropDown /></div>
            <a href="/login" className="block hover:text-red-600 transition">Login</a>
            <a
              href="/signup"
              // Mobile Sign Up Button: bg-gray-900 (Dark), text-white (Light text)
              className="block mt-2 text-center rounded-full bg-gray-900 px-4 py-2 text-white font-semibold hover:bg-red-600 transition shadow-md"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>


      {/* Main Content Sections */}
      <main className="flex flex-col items-center">

        {/* 1. Hero Section (On Light Grey Background) */}
        <section className="w-full max-w-7xl px-6 py-24 sm:py-32 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-red-600 mb-4 inline-block">Custom SaaS Development</span>
          {/* Title text: text-gray-900 (Dark text) */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 max-w-4xl mx-auto leading-tight">
            Build Your Custom System. <span style={{ color: COLORS.accent }}>Own the Logic.</span>
          </h1>
          {/* Paragraph text: text-gray-700 */}
          <p className="mt-6 max-w-3xl mx-auto text-xl leading-relaxed text-gray-700">
            We engineer high-performance, branded SaaS platforms and operational software tailored precisely to your unique business workflow, providing trust-frequency clarity and broadcast-grade polish.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-col sm:flex-row">
            <a
              href="/start"
              // Button 1: bg-red-600 (Accent Red), text-white (Light text)
              className="rounded-full bg-red-600 px-8 py-4 text-white font-bold text-lg transition hover:bg-red-700 shadow-xl flex items-center justify-center"
            >
              Start Your Build
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="/docs"
              // Button 2: border-gray-900 (Dark border), text-gray-900 (Dark text), hover:bg-gray-900 (Dark hover), hover:text-white (Light text)
              className="rounded-full border border-gray-900 px-8 py-4 text-gray-900 font-medium text-lg transition hover:bg-gray-900 hover:text-white flex items-center justify-center"
            >
              View Our Documentation
            </a>
          </div>
        </section>

        {/* 2. Core Offerings (White Background for contrast) */}
        <section id="offerings" className="w-full bg-white py-20 sm:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Heading text: text-gray-900 (Dark text) */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-4">Our Service Menu</h2>
            {/* Paragraph text: text-gray-700 */}
            <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-16">
              Select the service that fits your current business need, from full-scale product launch to targeted system modernization.
            </p>

            {/* Offer Cards (using OfferCard component - White BG, Dark Text) */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <OfferCard
                Icon={LayoutGrid}
                title="Full-Cycle SaaS Build"
                description="End-to-end development of proprietary, white-labeled SaaS solutions. We handle architecture, backend, frontend, and deployment."
              />
              <OfferCard
                Icon={Database}
                title="Legacy System Modernization"
                description="Transforming outdated, slow internal systems into fast, modern, cloud-native applications for maximum efficiency and security."
              />
              <OfferCard
                Icon={Clock}
                title="Rapid MVP Launchpad"
                description="Get a Minimum Viable Product (MVP) to market quickly to validate your concept, secure funding, and gather early user feedback."
              />
              <OfferCard
                Icon={Zap}
                title="API & Integration Services"
                description="Seamlessly connect your new platform with essential third-party services like Salesforce, HubSpot, QuickBooks, or custom APIs."
              />
            </div>
          </div>
        </section>

        {/* 3. The Custom SaaS Deep Dive (On Light Grey Background) */}
        <section id="integrations" className="w-full py-20 sm:py-28 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-sm font-semibold uppercase tracking-widest text-red-600 mb-3 inline-block">The BondLogix Difference</span>
              {/* Heading text: text-gray-900 (Dark text) */}
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Why Choose Custom-Built SaaS?</h2>
              {/* Paragraph text: text-gray-700 */}
              <p className="text-lg text-gray-700 mb-6">
                Off-the-shelf software compromises your workflow. Our custom solutions are built from the ground up to **match your business logic exactly**, ensuring peak performance and zero friction.
              </p>
              {/* List text: text-gray-700 */}
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1 mr-3" />
                  <div>**Perfect Fit:** No unnecessary features, just tools that execute your core process.</div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1 mr-3" />
                  <div>**Scalability:** Built on robust, modern architecture ready to handle explosive growth.</div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1 mr-3" />
                  <div>**Security:** AutoSec principles baked into every line of code, ensuring audited security from day one.</div>
                </li>
              </ul>
            </div>
            {/* Placeholder Visual/Image: bg-gray-900 (Dark/Signal), text-white (Light text) */}
            <div className="order-1 md:order-2 bg-gray-900 p-8 rounded-3xl shadow-2xl h-96 flex items-center justify-center border border-gray-700">
              <div className="text-center">
                <LayoutGrid className="w-12 h-12 mx-auto text-white mb-3" />
                <p className="text-xl font-medium text-white">
                  Workflow Visualization Placeholder
                </p>
                <p className="text-sm text-gray-400 mt-1">Diagram of a custom workflow here.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Development Process (White Background for contrast) */}
        <section id="process" className="w-full bg-white py-20 sm:py-28 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Heading text: text-gray-900 (Dark text) */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-4">Our Collaborative Process</h2>
            {/* Paragraph text: text-gray-700 */}
            <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-16">
              We work in transparent, iterative sprints, ensuring you have control and visibility at every stage of the build.
            </p>

            <div className="relative">
              {/* Process Line Connector: bg-gray-300 */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-300 transform -translate-x-1/2"></div>

              {[
                { step: 1, title: 'Discovery & Blueprint', icon: Lightbulb, details: 'Deep architectural planning, defining features, user stories, and technical stack. The foundation of the system is set.' },
                { step: 2, title: 'Iterative Development', icon: LayoutGrid, details: 'Agile sprints deliver working features every two weeks. Constant feedback ensures alignment with business goals.' },
                { step: 3, title: 'Security & Audit', icon: Database, details: 'Integrated AutoSec checks and rigorous QA testing to ensure broadcast-grade stability and enterprise-level security.' },
                { step: 4, title: 'Launch & Handoff', icon: Rocket, details: 'Smooth deployment to the cloud and comprehensive documentation/training for your team. The system is yours.' },
              ].map((item, index) => (
                <div key={item.step} className="flex flex-col md:flex-row mb-12 relative">
                  {/* Step Info */}
                  <div className={`md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:order-2'}`}>
                    {/* Title text: text-gray-900 (Dark text) */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    {/* Detail text: text-gray-700 */}
                    <p className="text-gray-700">{item.details}</p>
                  </div>

                  {/* Icon Marker: ring-white (Light ring) */}
                  <div className="flex justify-center md:absolute md:left-1/2 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 text-white font-bold text-lg shadow-xl ring-8 ring-white">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Filler Spacer for alignment on even indexes */}
                  <div className={`hidden md:block md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : ''}`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Final Call to Action (Dark Background) */}
        <section className="w-full py-16 bg-gray-900 text-white px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Build Something Real?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Stop fitting your business into boxed software. Let's design the exact platform you need for exponential growth.
            </p>
            <a
              href="/start"
              // Button is fine: bg-red-600 (Accent Red), text-white (Light text)
              className="rounded-full bg-red-600 px-10 py-4 text-white font-bold text-lg transition hover:bg-red-700 shadow-xl inline-flex items-center"
            >
              Secure Your Free Blueprint Session
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </section>
      </main>

      <AppFooter />
    </div>
  );
};

export default Home;


