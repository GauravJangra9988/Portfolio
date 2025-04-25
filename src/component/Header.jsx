import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
      className=" hidden sm:block fixed top-0 left-0 w-full shadow-sm z-50"
    >
      <div className="flex flex-row justify-between items-center px-6 md:px-32 py-6">
        <a href="#home" className="text-xl font-semibold text-black">
          Gaurav Jangra
        </a>
        <div className="flex flex-row gap-8">
          {["About", "Experience", "Projects", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-black text-sm font-medium hover:text-gray-700 transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
