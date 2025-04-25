import projectOne from "../assets/projectOne.png";
import projectTwo from "../assets/projectTwo.png";
import projectThree from "../assets/projectThree.png";
import { motion } from "motion/react";

const Projects = () => {
  const projects = [
    {
      name: "Project One",
      image: projectOne,
      description: "A brief description of Project One.",
    },
    {
      name: "Project Two",
      image: projectTwo,
      description: "A brief description of Project Two.",
    },
    {
      name: "Project Three",
      image: projectThree,
      description: "A brief description of Project Three.",
    },
  ];
  return (
    <div
      id="projects"
      className="flex flex-col items-center justify-center text-center min-h-screen px-4"
    >
      <h1 className="text-gray-500 text-sm tracking-widest">
        Browse My Recent
      </h1>
      <h1 className="text-5xl font-bold mb-24">Projects</h1>

      <div className="grid grid-cols-1 gap-8 max-w-5xl w-full sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-black rounded-3xl p-6 md:p-8 w-full h-full flex flex-col items-center justify-between"
          >
            <motion.img
              whileHover={{
                scale: 1.1,
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              src={project.image}
              alt="Project Screenshot"
              className="w-full h-56 object-cover rounded-xl mb-6" // Adjusted size for smaller screens
            />
            <h2 className="text-2xl mb-4 font-semibold">{project.name}</h2>
            <div className="flex flex-row gap-4">
              <button className="rounded-full bg-white px-6 py-2 text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">
                Github
              </button>
              <button className="rounded-full bg-white px-6 py-2 text-black border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 ease-in-out">
                Live
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
