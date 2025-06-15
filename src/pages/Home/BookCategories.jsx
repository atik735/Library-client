import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Autoplay,Navigation } from 'swiper/modules';
import { Link } from 'react-router';
import { motion } from "motion/react";

const BookCategories = () => {

  const categoriesData = [
  {
    id: 1,
    name: "Novel",
    image: "https://i.ibb.co/fYVQ11p5/2560.webp",
  },
  {
    id: 2,
    name: "History",
    image: "https://i.ibb.co/Fk41q1Dd/best-history-books-2016jpg-800x600-q85-crop.jpg",
  },
  {
    id: 3,
    name: "Drama",
    image: "https://i.ibb.co/b5Xs5hNf/images.jpg",
  },
  {
    id: 4,
    name: "Sci-Fi",
    image: "https://i.ibb.co/dHZHnVY/7f7d5fb3924d287ec438effb772cbb51.jpg",
  }
];


    return (
    <div className="bg-green-100 py-10 px-4 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-10 border-b-2 border-green-500  px-4 place-self-center">
        Book Categories
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        navigation={true}
        modules={[Autoplay,Navigation]}
        // autoplay={{ delay: 3000 }}
        loop
        className="mySwiper"
      >
        {categoriesData.map((category) => (
<SwiperSlide key={category.id} className="flex flex-col items-center ">
  <motion.div 
  animate={{
    scale: [1, 1.05, 1],
    x:[20,0,20]
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }} className=' place-self-center group transition-all duration-300'>
    <Link to={`/category/${category.name.toLowerCase()}`}>
      <img src={category.image} className='w-44 rounded-full h-44 p-1 border-2 border-dashed border-green-600 transition-transform duration-300 group-hover:scale-105' alt="" />
      <p className='text-center font-bold text-lg mt-2 transition-transform duration-300'>{category.name}</p>
    </Link>
  </motion.div>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
    );
};

export default BookCategories;
