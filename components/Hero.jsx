"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="section text-center">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold">
        Aymane Sajed
      </motion.h1>
      <p className="mt-4 text-xl text-slate-400">
        Systems & Backend Developer | Aspiring DevOps Engineer
      </p>
    </section>
  );
}
