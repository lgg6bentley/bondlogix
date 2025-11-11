 import Link from 'next/link';
import { Zap, Home, Rocket } from 'lucide-react';
import React from 'react';

// Tailwind Colors for reference (matching the main page.tsx styling)
const COLORS = {
    // Primary Background (Light Grey)
    light_bg: '#f3f4f6', 
    // Dark Text/Foreground 
    dark_text: '#1f2937', 
    // Accent Color (Red)
    accent: '#ef4444', 
};


// This component will be rendered by Next.js whenever a user navigates to an undefined route.
const NotFoundPage: React.FC = () => {
  return (
    // Background matching the main app
    <div className={`flex flex-col items-center justify-center min-h-screen ${COLORS.light_bg} p-4 text-center antialiased`}>
      
      {/* Branded Logo */}
      <div className="flex items-center gap-3 mb-6">
        <Rocket className="w-10 h-10 text-red-600" />
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">BondLogix</h1>
      </div>

      {/* Error Content Card */}
      <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-xl max-w-lg w-full border border-gray-200">
        
        {/* Error Code & Icon */}
        <div className="flex items-center justify-center space-x-4 mb-6 text-red-600">
          <Zap className="w-10 h-10" />
          <h2 className="text-6xl font-black">404</h2>
        </div>

        {/* Primary Message */}
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h3>
        
        {/* Demo Disclaimer */}
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          The page you were looking for doesn't exist! This site is a **live demo** designed to showcase a modern, custom-built SaaS landing page. It does not have any sub-pages or real functionality.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/"
            // Button 1: bg-red-600 (Accent Red), text-white (Light text)
            className="rounded-full bg-red-600 px-6 py-3 text-white font-semibold transition hover:bg-red-700 shadow-md flex items-center justify-center"
          >
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </Link>
          <Link 
            href="#"
            // Button 2: border-gray-900 (Dark border), text-gray-900 (Dark text)
            className="rounded-full border border-gray-900 px-6 py-3 text-gray-900 font-medium transition hover:bg-gray-900 hover:text-white flex items-center justify-center"
          >
            View Documentation
          </Link>
        </div>
      </div>
      
      {/* Footer Disclaimer */}
      <p className="mt-8 text-sm text-gray-500">
        A demonstration artifact created by BondLogix.
      </p>

    </div>
  );
}

export default NotFoundPage;