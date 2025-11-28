"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hobbies() {
  return (
    <main className="min-h-screen bg-pink-200 text-gray-900 flex flex-col items-center px-10 py-16">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-serif font-bold text-center mb-14"
      >
        My Hobbies
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <Image
            src="/music.jpg" 
            alt="Listening to Music"
            width={250}
            height={250}
            className="object-cover rounded-lg border-4 border-pink-500 shadow-lg"
          />

          <p className="mt-4 text-lg font-semibold">Listening to Music</p>
          <p className="mt-1 text-sm text-gray-700 max-w-[220px]">
            Music always helps me feel calm and collected. It’s my escape whenever life feels heavy.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col items-center text-center"
        >
          <Image
            src="/series.jpg" 
            alt="Watching Thai Series"
            width={250}
            height={250}
            className="object-cover rounded-lg border-4 border-pink-500 shadow-lg"
          />

          <p className="mt-4 text-lg font-semibold">Watching Thai Series</p>
          <p className="mt-1 text-sm text-gray-700 max-w-[220px]">
            Thai series always bring me joy, whether it’s comedy, romance, or drama, they never fail to comfort me.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
          className="flex flex-col items-center text-center"
        >
          <Image
            src="/poetry.jpg" 
            alt="Writing Poetry"
            width={250}
            height={250}
            className="object-cover rounded-lg border-4 border-pink-500 shadow-lg"
          />

          <p className="mt-4 text-lg font-semibold">Writing Poetry</p>
          <p className="mt-1 text-sm text-gray-700 max-w-[220px]">
            I love writing poetry, it's my way of expressing thoughts and emotions I can't say aloud.
          </p>
        </motion.div>

      </div>
    </main>
  );
}