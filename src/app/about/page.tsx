"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="min-h-screen bg-pink-200 text-gray-900 flex items-center justify-between px-12 py-16">

      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 pr-10"
      >
        <h1 className="text-5xl font-serif font-bold mb-6">About Me</h1>

        <p className="text-lg leading-relaxed mb-4">
          Hi! I’m <span className="font-bold">Marlyn Amisola</span>, a BS Computer Science student who is passionate about learning and 
          growing in the digital world. I value creativity, simplicity, and meaningful 
          connections. Every day, I strive to improve myself, explore new ideas, 
          and build a future that reflects my hard work and dedication.
        </p>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-1/2 flex justify-center"
      >
        <Image
          src="/me.jpg" 
          alt="My Photo"
          width={350}
          height={350}
          className="rounded-xl shadow-xl border-4 border-pink-500 object-cover"
        />
      </motion.div>

    </main>
  );
}