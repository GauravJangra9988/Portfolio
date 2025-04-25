import aboutpic from "../assets/aboutpic.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import { motion } from "motion/react";

const MainSection = () => {
  return (
    <div
      id="home"
      className="flex justify-center items-center min-h-screen px-4 py-8"
    >
      <div className="flex flex-col-reverse gap-8 md:flex-row text-center md:space-y-0 md:space-x-8 md:items-center md:text-left">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center space-y-4"
        >
          <h1 className="text-5xl font-bold">Gaurav Jangra</h1>
          <h2 className="text-xl text-gray-600">Developer</h2>
          <span className="flex space-x-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                whileHover={{ scale: 1.25 }}
                className="h-8 w-8 "
                src={github}
                alt="GitHub"
              />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.img
                whileHover={{ scale: 1.25 }}
                className="h-8 w-8 "
                src={linkedin}
                alt="LinkedIn"
              />
            </a>
          </span>
          <p className="text-gray-700 max-w-xs mx-auto md:mx-0">
            With a passion for developing modern React web apps for commercial
            businesses.
          </p>

          <div className="flex gap-5">
            <button className="rounded-full bg-black px-6 py-2 text-white">
              Resume
            </button>
            <button className="rounded-full px-6 py-2 text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">
              Contact
            </button>
          </div>
        </motion.div>

        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{ scale: 1.1 }}
            className="w-56 h-56 rounded-full md:w-96 md:h-96 shadow-lg object-cover"
            src={aboutpic}
            alt="Gaurav Jangra"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
