import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-trust border-t border-signal px-6 py-8 text-sm text-signal">
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Centered Links */}
        <div className="flex gap-6 justify-center">
          <Link href="/about" className="hover:text-grit transition">About</Link>
          <Link href="/contact" className="hover:text-grit transition">Contact</Link>
          <Link href="/privacy" className="hover:text-grit transition">Privacy</Link>
        </div>

        {/* Centered Copyright */}
        <div className="text-xs text-signal/70">
          © {new Date().getFullYear()} BondLogix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
