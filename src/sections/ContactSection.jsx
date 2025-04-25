import email from "../assets/email.png";
import linkedin from "../assets/linkedin.png";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center text-center min-h-screen"
    >
      <h1 className="text-gray-500 text-sm uppercase tracking-widest">
        Get in Touch
      </h1>
      <h1 className="text-5xl font-bold pt-2 pb-12">Contact Me</h1>
      <div className="flex flex-col sm:flex-row gap-6 border-2 border-gray-400 p-4 rounded-3xl shadow-sm bg-white">
        <div className="flex items-center gap-2">
          <img className="h-12 w-12" src={email} alt="Email Icon" />
          <a
            href="mailto:gjangra9988@gmail.com"
            className="text-gray-800 text-sm"
          >
            gjangra9988@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2">
          <img className="h-12 w-12" src={linkedin} alt="LinkedIn Icon" />
          <a
            href="https://www.linkedin.com/in/yourprofile" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 text-sm "
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
