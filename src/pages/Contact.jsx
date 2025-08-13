import SectionTitle from "../components/SectionTitle";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <SectionTitle title="About Me" />
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Let’s Work Together
        </h2>
        <p className="mb-12 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Have a project in mind, or just want to say hi? I’d love to hear from
          you. Fill out the form or reach me through the contact info below.
        </p>

        {/* Contact Info */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          <div className="flex items-center justify-center space-x-4 p-5 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <FaEnvelope className="text-primary text-2xl" />
            <a
              href="mailto:youremail@example.com"
              className="text-gray-800 dark:text-gray-200 hover:underline"
            >
              priyanshuudainiya@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center space-x-4 p-5 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition">
            <FaPhoneAlt className="text-primary text-2xl" />
            <a
              href="tel:+917223999910"
              className="text-gray-800 dark:text-gray-200 hover:underline"
            >
              +91 7223999910
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://www.linkedin.com/in/priyanshu-udainiya-453203231/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full shadow hover:bg-primary hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/priyanshuudainiya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full shadow hover:bg-primary hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.instagram.com/priyansh.0002/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full shadow hover:bg-gradient-to-r hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-white transition-all"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Contact Form */}
        <form className="max-w-lg mx-auto space-y-5">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary outline-none transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary outline-none transition"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-primary outline-none transition"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-primary text-white py-3 rounded-lg shadow hover:bg-primary/90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
