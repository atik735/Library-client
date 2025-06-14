import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthContext';

const bannerSlides = [
// https://i.ibb.co/Pzsd5Pvf/pepolereading.jpg
  {
    id: 1,
    title: "Explore a World of Books",
    desc: "Dive into thousands of books across various categories. Discover your next favorite read today!",
    image: "  https://i.ibb.co/FqcWdK1F/book1.webp",
  },
  {
    id: 2,
    title: "Join Our Reading Community",
    desc: "Sign up and start borrowing books easily. Track your reading journey and share your reviews.",
    image: "https://i.ibb.co/pvwXyPWF/bookinter.jpg",
  },
  {
    id: 3,
    title: "New Arrivals Every Week",
    desc: "Stay updated with the latest book collections — fresh, trending, and highly rated by readers.",
    image: "https://i.ibb.co/ks9GJZ4d/bookshelves.jpg",
  },
  {
    id: 4,
    title: "Discover by Category",
    desc: "Fiction, Non-fiction, Mystery, Sci-Fi, and more. Easily browse and filter by your favorite genres.",
    image: "https://i.ibb.co/FF0hjjh/openbook.webp",
  },
];

const Banner = () => {

  
        const {user,signOutUser} = useContext(AuthContext)
    // console.log(user);
    
      const handleSignOut =() =>{
        signOutUser()
        .then(() =>{
          console.log("signout succesfull");
                Swal.fire({
            title: "Sign Out Successfull!",
            icon: "success",
            draggable: true,
              timer: 1500
          });
  
        })
        .catch(error =>{
          console.log(error);
        })
      }
    
        const links = <>
    <li><NavLink to='/' className={({ isActive }) =>
            isActive
              ? "text-green-600 font-bold"
              : "text-gray-500"
          }
  >Home</NavLink></li>
    <li><NavLink to='/allbooks' className={({ isActive }) =>
            isActive
              ? "text-green-600 font-bold"
              : "text-gray-500"
          }
  >All Books</NavLink></li>
  
    <li><NavLink to='/addbook' className={({ isActive }) =>
            isActive
              ? "text-green-600 font-bold"
              : "text-gray-500"
          }
  >Add Book</NavLink></li>
  
    <li><NavLink to={`/borrowedBooks`} className={({ isActive }) =>
            isActive
              ? "text-green-600 font-bold"
              : "text-gray-500"
          }
  >Borrowed Books </NavLink></li>
  
  </>
  

  return (
    <div className="mb-10">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
        navigation
        loop
        className="rounded-2xl"
      >
        {bannerSlides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white px-4 text-center">
                <h2 className="text-xl md:text-3xl font-bold">{slide.title}</h2>
                <p className="mt-2 text-sm md:text-base max-w-md">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Banner;
