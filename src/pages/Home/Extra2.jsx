import React from 'react';
import about from '../../assets/about.jpg'
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router';

const Extra2 = () => {
    return (
<div className="card lg:card-side bg-base-100 shadow-sm my-8">
  <figure className='w-1/2'>
    <img
      src={about}
      alt="Album" />
  </figure>
  <div className="card-body w-1/2">
    <h2 className="text-4xl font-bold">About the BookNest<br />
Books Store</h2>
    <p className='text-lg text-gray-600'>BookNest is a modern and user-friendly online library platform designed to connect readers with a vast collection of books across various genres. Whether you're a casual reader, a student, or a passionate book lover, BookNest provides a seamless experience for discovering, borrowing, and managing books with ease. With its intuitive design, categorized listings, and detailed book pages, users can explore authors, ratings, and availability at a glance. BookNest aims to make reading more accessible, organized, and enjoyable for everyone.It also offers features like personalized recommendations, book reviews, and a secure user dashboard for tracking borrowed books. With a focus on community and convenience, BookNest encourages a love for reading among all age groups. 
</p>
<div className="card-actions justify-start">
  <Link
    to={"/allbooks"}
    className="group text-green-700 flex gap-1 items-center font-bold text-lg underline"
  >
    Overview
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