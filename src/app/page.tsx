"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "800"] });

export default function Home() {
  return (
    <main className={`min-h-screen bg-linear-to-r from-pink-400 via-pink-300 to-pink-500 text-white px-16 py-10 flex flex-col md:flex-row items-center justify-between ${poppins.className}`}>

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex items-center justify-center mb-10 md:mb-0"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 3 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="rounded-full overflow-hidden border-4 border-white shadow-2xl"
        >
          <Image
            src="/profile.jpg"
            alt="My Photo"
            width={360}
            height={360}
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide drop-shadow-lg">
          Welcome to My Personal Website!
        </h1>

        <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-xl">
          Marlyn Amisola
        </h2>

        <p className="text-2xl md:text-3xl text-white/90 max-w-lg drop-shadow-md">
          BSCS-2A Student
        </p>
      </motion.div>

    </main>
  );
}