"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      className="min-h-screen bg-pink-100 flex flex-col items-center justify-center px-6 py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-4xl font-bold text-pink-700 mb-10 tracking-wide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Contact Me
      </motion.h1>

      <motion.div
        className="bg-white border border-pink-300 shadow-lg rounded-lg p-8 w-full max-w-md text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <motion.p
          className="text-lg font-semibold text-pink-700 mb-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          Email
        </motion.p>
        <motion.p
          className="text-gray-700 mb-6"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          mamisola@gbox.ncf.edu.ph
        </motion.p>

        <motion.p
          className="text-lg font-semibold text-pink-700 mb-2"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          Facebook
        </motion.p>
        <motion.p
          className="text-gray-700"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Marlyn Amisola
        </motion.p>
      </motion.div>
    </motion.div>
  );
}