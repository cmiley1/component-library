"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function simpleHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800">
      <header className="absolute inset-x-0 top-0 z-50 bg-white bg-opacity-90 backdrop-blur-md">
        <nav className="flex items-center justify-between p-4 lg:px-8">
          <a href="#" className="text-2xl font-bold">
            Your Brand
          </a>
          {/* Rest of the navigation code */}
        </nav>
      </header>

      <div className="flex flex-col items-center justify-center min-h-screen p-6 lg:p-0">
        <div className="text-center">
          <h1 className="text-6xl font-bold sm:text-8xl">Innovate Boldly</h1>
          <p className="mt-4 text-xl sm:text-2xl">
            Pioneering the future with cutting-edge solutions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="rounded bg-black px-5 py-3 text-lg font-semibold text-white hover:bg-gray-700"
            >
              Get Started
            </a>
            <a
              href="#"
              className="rounded border border-black px-5 py-3 text-lg font-semibold hover:border-gray-700 hover:text-gray-700"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
