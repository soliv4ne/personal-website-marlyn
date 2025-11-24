"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-r from-pink-400 via-pink-300 to-pink-500 text-white px-16 py-10 flex items-center justify-between">

      {/* LEFT SIDE: BIGGER PICTURE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-1/2 flex items-center justify-center"
      >
        <Image
          src="/profile.jpg"
          alt="My Photo"
          width={360}
          height={360}
          className="rounded-full border-4 border-white shadow-xl object-cover"
        />
      </motion.div>

      {/* RIGHT SIDE: TEXT */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-1/2 flex flex-col gap-6"
      >
        <h1 className="text-4xl font-bold tracking-wide">
          Welcome to My Personal Website
        </h1>

        <h2 className="text-6xl font-extrabold">
          Marlyn Amisola
        </h2>

        <p className="text-2xl text-white/90 max-w-xl">
          BSCS-2A Student
        </p>
      </motion.div>

    </main>
  );
}
