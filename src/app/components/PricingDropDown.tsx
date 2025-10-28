"use client";

import { useState } from "react";
import Link from "next/link";

export default function PricingDropDown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="hover:text-grit transition px-2 py-1 rounded-md hover:bg-signal/10"
      >
        Pricing
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-trust border border-signal shadow-xl z-50 p-2">
          <ul className="flex flex-col text-sm text-signal">
            <li>
              <Link
                href="/pricing#starter"
                className="block px-4 py-2 hover:bg-signal/10 transition rounded-md"
              >
                Starter
              </Link>
            </li>
            <li>
              <Link
                href="/pricing#pro"
                className="block px-4 py-2 hover:bg-signal/10 transition rounded-md"
              >
                Pro
              </Link>
            </li>
            <li>
              <Link
                href="/pricing#founder"
                className="block px-4 py-2 hover:bg-signal/10 transition rounded-md"
              >
                Founder+
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
