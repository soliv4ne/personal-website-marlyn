"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <main className="min-h-screen bg-pink-200 text-gray-900 px-12 py-16 flex flex-col items-center">

      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl font-serif font-bold mb-12 text-center"
      >
        My Educational Background
      </motion.h1>

      <div className="w-full max-w-5xl space-y-10">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-pink-100 rounded-xl p-6 shadow-md border border-pink-300"
        >
          <h2 className="text-2xl font-bold mb-1">Tertiary</h2>
          <p className="text-lg font-semibold">Naga College Foundation Inc.</p>
          <p className="text-gray-800">M.T. Villanueva Avenue, Naga City</p>
          <p className="italic text-gray-700 mt-1">S/Y 2024 - Present</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-pink-100 rounded-xl p-6 shadow-md border border-pink-300"
        >
          <h2 className="text-2xl font-bold mb-1">Secondary</h2>

          <div className="mb-6">
            <p className="text-lg font-semibold">Carolina National High School</p>
            <p className="text-gray-800">Zone 5, Carolina, Naga City</p>
            <p className="italic text-gray-700 mt-1">S/Y 2018 - 2022</p>
          </div>

          <div>
            <p className="text-lg font-semibold">AMA Computer Learning Center</p>
            <p className="text-gray-800">
              Elias Angeles Street, San Francisco, Naga City
            </p>
            <p className="italic text-gray-700 mt-1">S/Y 2022 - 2024</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-pink-100 rounded-xl p-6 shadow-md border border-pink-300"
        >
          <h2 className="text-2xl font-bold mb-1">Primary</h2>
          <p className="text-lg font-semibold">Teodora Moscoso Elementary School</p>
          <p className="text-gray-800">
            Zone 1 Km 11 San Jose, Carolina, Naga City
          </p>
          <p className="italic text-gray-700 mt-1">S/Y 2012 - 2018</p>
        </motion.div>

      </div>
    </main>
  );
}