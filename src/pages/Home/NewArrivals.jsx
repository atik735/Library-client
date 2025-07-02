import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { Rating,ThinStar  } from '@smastrom/react-rating'
import { IoPerson } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import "@smastrom/react-rating/style.css";
import axios from "axios";

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9'
}

const NewArrivals = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios(`${import.meta.env.VITE_API_URL}/books/new`)
      .then(res => setBooks(res.data))
      .catch(err => console.error("Failed to fetch new books", err));
  }, []);

  return (
    <section className="py-16 px-4 md:px-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 mb-2">
          📚 New Arrivals
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          Discover our 6 latest books, freshly added to the library and ready to explore.
        </p>

        <div className='grid lg:grid-cols-3  gap-4 md:grid-cols-2 grid-cols-1'>
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-base-200 rounded-lg shadow-sm p-4 w-full max-w-xs mx-auto"
              data-aos="fade-up"
            >
              {/* Book Image & Badge */}
              <figure className="relative px-4">
                <img
                  src={book.image}
                  alt={book.name}
                  className="w-full h-48 rounded-md object-cover"
                />
                <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded shadow">
                  {book.category}
                </span>
              </figure>

              {/* Book Info */}
              <div className="pt-3 space-y-1">
                <p className="text-gray-600 flex items-center gap-1 text-sm">
                  <IoPerson /> {book.author}
                </p>

                <div className="flex items-center justify-between">
                  <h3 className="text-md font-semibold text-gray-800 dark:text-white">
                    {book.name}
                  </h3>
                  <Rating
                    style={{ maxWidth: 80 }}
                    value={parseFloat(book.rating)}
                    readOnly
                    halfFillMode="svg"
                    itemStyles={myStyles}
                  />
                </div>
                <p className="text-sm text-gray-500">Quantity: {book.quantity}</p>


                <Link to={`/details/${book._id}`}>
                  <button className="btn btn-sm mt-2 w-full text-white bg-green-600 hover:bg-green-700 font-medium">
                    View Details <FaEye className="ml-1" size={14} />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
