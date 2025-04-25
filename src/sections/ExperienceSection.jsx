import docker from "../assets/docker.svg";
import aws from "../assets/aws.svg";
import kub from "../assets/kub.svg";
import reactlogo from "../assets/reactlogo.svg";
import javas from "../assets/javas.svg";
import git from "../assets/git.svg";
import express from "../assets/express.svg";
import nodejs from "../assets/nodejs.svg";
import framer from "../assets/framer.svg";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.8,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="flex flex-col items-center justify-center text-center min-h-screen"
      style={{ minHeight: "100vh" }}
    >
      <div>
        <h1 className="text-gray-500 text-sm uppercase tracking-widest">
          Explore My
        </h1>
        <h1 className="text-5xl font-bold pt-2 pb-8">Experience</h1>
      </div>
      <div className="flex flex-row gap-4">
        {[
          { src: javas, alt: "JavaScript", delay: 0.1 },
          { src: reactlogo, alt: "React", delay: 0.3 },
          { src: aws, alt: "AWS", delay: 0.5 },
          { src: kub, alt: "Kubernetes", delay: 0.7 },
          { src: git, alt: "Github", delay: 0.9 },
          { src: nodejs, alt: "nodejs", delay: 1.1 },
          { src: express, alt: "express", delay: 1.3 },
          { src: framer, alt: "framer", delay: 1.5 },
          { src: docker, alt: "docker", delay: 1.7 },
        ].map((icon, index) => (
          <motion.img
            key={index}
            initial={{ y: 80, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.5, delay: icon.delay }}
            src={icon.src}
            alt={icon.alt}
            className="w-16 h-16"
          />
        ))}
      </div>
    </section>
  );
};
