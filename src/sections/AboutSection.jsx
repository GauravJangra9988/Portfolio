import aboutpic from "../assets/aboutpic.png";

const AboutSection = () => {
  return (
    <div id="about" className="text-center px-4 pt-32">
      <h1 className="text-gray-500 text-sm uppercase tracking-widest">
        Get To Know More
      </h1>
      <h2 className="text-5xl font-bold pt-2 pb-8">About Me</h2>

      <div className="flex flex-col md:flex-row items-center md:justify-center gap-10">
        {/* Image Section */}
        <img
          className="h-64 w-64 md:h-96 md:w-96 rounded-3xl shadow-lg object-cover"
          src={aboutpic}
          alt="About"
        />

        {/* Information Section */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6 md:justify-center items-center">
            {/* Experience Card */}
            <div className="border border-black rounded-3xl p-8 md:p-12 w-64">
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-gray-700">2+ Years</p>
              <p className="text-gray-600">Developer</p>
            </div>
            {/* Education Card */}
            <div className="border border-black rounded-3xl p-8 md:p-12 w-64">
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-700">B.Tech</p>
              <p className="text-gray-600">2022 - 2026</p>
            </div>
          </div>

          {/* Description Text */}
          <p className="text-gray-700 mt-4 md:mt-8 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
            reprehenderit et laborum, rem, dolore eum quod voluptate
            exercitationem nobis, nihil esse debitis maxime facere minus sint
            delectus velit in eos quo officiis explicabo deleniti dignissimos.
            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
            reiciendis ea magnam? Nulla, impedit fuga!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
