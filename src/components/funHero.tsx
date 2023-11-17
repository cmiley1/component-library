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

export default function funHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-r from-pink-500 to-purple-500 text-white">
      <header className="absolute inset-x-0 top-0 z-40 bg-opacity-90 backdrop-blur-sm">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold">
            Your Brand
          </a>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="p-2 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium hover:text-blue-400"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#" className="text-lg font-medium hover:text-blue-400">
              Log in
            </a>
          </div>
        </nav>
      </header>

      <div className="flex flex-col items-center justify-center min-h-screen z-10">
        <div className="text-center">
          <h1 className="text-6xl font-bold sm:text-8xl">Innovate Boldly</h1>
          <p className="mt-4 text-xl sm:text-2xl">
            Pioneering the future with cutting-edge solutions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="rounded bg-blue-500 px-5 py-3 text-lg font-semibold hover:bg-blue-700"
            >
              Get Started
            </a>
            <a
              href="#"
              className="rounded border border-white px-5 py-3 text-lg font-semibold hover:border-blue-500 hover:text-blue-500"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 left-0 w-full h-full overflow-hidden opacity-50 z-0">
        <div className="absolute w-1/4 h-1/4 mt-10 bg-purple-800 rounded-full top-10 -right-10 blur-3xl"></div>
        <div className="absolute w-1/4 h-1/2 bg-blue-300 rounded-full top-40 -left-20 blur-2xl"></div>
      </div>
    </div>
  );
}
