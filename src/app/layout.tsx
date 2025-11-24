"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Education", href: "/education" },
    { label: "Hobbies", href: "/hobbies" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <html lang="en">
      <body className="bg-pink-300 text-gray-900">

        {/* HEADER */}
        <nav className="w-full px-10 py-6 bg-pink-400 text-white flex justify-between items-center shadow-lg">

          <h1 className="text-xl font-bold">My Website</h1>

          {/* NAV LINKS */}
          <div className="flex gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    px-4 py-2 rounded-md border border-white 
                    transition-all duration-300
                    ${isActive ? "bg-white text-pink-500 font-bold" : "hover:bg-pink-500 hover:text-white"}
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* PAGE CONTENT ANIMATION */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="p-10"
        >
          {children}
        </motion.div>

      </body>
    </html>
  );
}