import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Link } from 'react-router';

const BookCategories = () => {

  const categoriesData = [
  {
    id: 1,
    name: "Novel",
    image: "https://i.ibb.co/fYVQ11p5/2560.webp",
  },
  {
    id: 2,
    name: "Science",
    image: "https://i.ibb.co/YFx6gpN9/9958ab6040661bbb446bd6a4c40c8408.jpg",
  },
  {
    id: 3,
    name: "History",
    image: "https://i.ibb.co/Fk41q1Dd/best-history-books-2016jpg-800x600-q85-crop.jpg",
  },
  {
    id: 4,
    name: "Drama",
    image: "https://i.ibb.co/b5Xs5hNf/images.jpg",
  },
  {
    id: 5,
    name: "Sci-Fi",
    image: "https://i.ibb.co/dHZHnVY/7f7d5fb3924d287ec438effb772cbb51.jpg",
  }
];


    return (
    <div className="bg-blue-100 py-10 px-4 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-10 border-b-2 border-blue-500 inline-block px-4">
        Top Categories Book
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
        modules={[Navigation]}
        className="mySwiper"
      >
        {categoriesData.map((category, index) => (
          <SwiperSlide key={category.id} className="flex flex-col items-center">
                  
            <div className="w-44 h-44 rounded-full border-4 border-dashed border-purple-300 flex items-center gap-4 justify-center relative overflow-hidden">
      <Link to={`/category/${category.name.toLowerCase()}`}>
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover rounded-full"
              />
              <span className="absolute top-0 right-0 bg-blue-900 text-white text-sm font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {String(index + 1).padStart(2, '0')}
              </span>
            <h3 className="text-center mt-4 font-semibold text-lg text-slate-800">
              {category.name}
            </h3>
            </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    );
};

export default BookCategories;
