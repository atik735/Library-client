import React from 'react';
import { FaBookOpen, FaUsers, FaLightbulb } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section
      className="py-16 px-4 md:px-12 bg-gradient-to-b from-green-50 to-white dark:from-gray-800 dark:to-gray-900"
      id="about"
    >
      <div className="max-w-6xl mx-auto text-center">
        

        {/* Title */}
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-bold text-green-700 dark:text-green-400 mb-4"
        >
          About BookNest
        </h2>

        {/* Paragraph */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto mb-12"
        >
          BookNest is more than just a digital library—it's a vibrant space for readers, learners, and dreamers.
          We aim to make quality books accessible to everyone, build a community of book lovers, and inspire lifelong learning.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <div className="flex justify-center items-center text-green-600 dark:text-green-300 text-5xl mb-4">
              <FaBookOpen />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Vast Digital Library
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Access thousands of books across various genres, from thrillers to historical fiction, anytime, anywhere.
            </p>
          </div>

          {/* Card 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <div className="flex justify-center items-center text-green-600 dark:text-green-300 text-5xl mb-4">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Reader Community
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Join a growing community of book lovers where you can share, borrow, and recommend books to others.
            </p>
          </div>

          {/* Card 3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
          >
            <div className="flex justify-center items-center text-green-600 dark:text-green-300 text-5xl mb-4">
              <FaLightbulb />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Learning & Growth
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Discover new knowledge, improve your skills, and develop a love for learning through books.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
