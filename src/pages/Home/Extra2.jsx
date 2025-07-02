import React from 'react';
import about from '../../assets/about.jpg';
import { GoArrowUpRight } from 'react-icons/go';
import { Link } from 'react-router';
import { motion } from 'motion/react';

const Extra2 = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-base-100 shadow-sm my-8 rounded overflow-hidden">
      
      {/* Image Section */}
      <figure className="w-full lg:w-1/2">
        <motion.img
          animate={{ x: [20, 0, 20] }}
          transition={{
            duration: 5,
            delay: 1,
            repeat: Infinity
          }}
          src={about}
          alt="BookNest About"
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Text Section */}
      <div className="p-6 lg:p-10 w-full lg:w-1/2 space-y-4 flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          About the{" "}
          <motion.span
            animate={{
              color: ['#ff5733', '#86fa03', '#faec03', '#08fb00', '#0067fb'],
              transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }
            }}
          >
            BookNest
          </motion.span>
          <br />
          Books Store
        </h2>

        <p className="text-base">
          BookNest is a modern and user-friendly online library platform designed to connect readers with a vast collection of books across various genres. Whether you're a casual reader, a student, or a passionate book lover, BookNest provides a seamless experience for discovering, borrowing, and managing books with ease. With its intuitive design, categorized listings, and detailed book pages, users can explore authors, ratings, and availability at a glance. BookNest aims to make reading more accessible, organized, and enjoyable for everyone. It also offers features like personalized recommendations, book reviews, and a secure user dashboard for tracking borrowed books. With a focus on community and convenience, BookNest encourages a love for reading among all age groups.
        </p>

        <div className="card-actions justify-start">
          <Link
            to="/allbooks"
            className="group text-green-700 flex gap-1 items-center font-bold text-base md:text-lg underline"
          >
            <motion.span
              animate={{
                color: ['#3b6145', '#06bf37', '#5afa0a', '#08fb00', '#034715'],
                transition: {
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut'
                }
              }}
            >
              Overview
            </motion.span>
            <GoArrowUpRight
              size={22}
              className="transform transition-transform duration-300 group-hover:rotate-[45deg]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Extra2;
