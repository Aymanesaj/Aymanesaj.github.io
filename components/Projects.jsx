"use client";
import { motion } from "framer-motion";

const projects = [
  {title:"Webserv",desc:"Custom HTTP server"},
  {title:"Inception",desc:"Docker infrastructure"},
];

export default function Projects() {
  return (
    <section className="section">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p,i)=>(
          <motion.div key={i} whileHover={{scale:1.05}} className="glass p-4 rounded">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
