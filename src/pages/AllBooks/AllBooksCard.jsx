import React from 'react';
import { Rating,ThinStar  } from '@smastrom/react-rating'
import { IoPerson } from "react-icons/io5";
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router';
import { FaPen } from 'react-icons/fa6';

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9'
}
const AllBooksCard = ({book}) => {
    // console.log(book)
    return (
   <div className="bg-base-200 rounded-lg shadow-sm  p-4 w-full max-w-xs mx-auto">
      <figure className="relative  px-4">
        {/* Book Image */}
        <img
          src={book.image}
          alt={book.name}
          className="w-full h-48 rounded-md"
        />

        {/* Category Badge */}
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded shadow">
          {book.category}
        </span>
      </figure>

      {/* Book Info */}
      <div className="pt-3 space-y-1 ">
        <p className=" text-gray-600 flex items-center gap-1">
          <IoPerson />{book.author}
        </p>

        <div className="flex items-center justify-between">
          <h3 className="text-md font-semibold text-gray-800">
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
        <p>Quantity: {book.quantity}</p>
        <Link to={`/updateBook/${book._id}`}>
        <button className="btn btn-sm mt-2 w-full text-white bg-green-600 hover:bg-green-700 font-medium">
          Update <FaPen className="ml-1" size={14} />
        </button>        
        </Link>
      </div>
    </div>
    );
};

export default AllBooksCard;