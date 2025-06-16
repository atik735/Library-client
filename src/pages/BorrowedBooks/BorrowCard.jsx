import React from 'react';
import { Rating,ThinStar  } from '@smastrom/react-rating'
import { IoPerson } from "react-icons/io5";
import '@smastrom/react-rating/style.css'

const BorrowCard = ({borrow,onCancel}) => {
    const myStyles = {
      itemShapes: ThinStar,
      activeFillColor: '#ffb700',
      inactiveFillColor: '#fbf1a9'
    }
    const {borrowedDate,category,image,returnDate,name,bookId,author,rating,quantity} = borrow
    return (
  <div className="bg-base-200 rounded-lg shadow-sm  p-4 w-full max-w-xs mx-auto">
      <figure className="relative  px-4">
        {/* Book Image */}
        <img
          src={image}
          alt={name}
          className="w-full h-48 rounded-md"
        />

        {/* Category Badge */}
        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded shadow">
          {category}
        </span>
      </figure>

      {/* Book Info */}
      <div className="pt-3 space-y-1 ">
        <p className=" text-gray-600 flex items-center gap-1">
          <IoPerson />{author}
        </p>

        <div className="flex items-center justify-between">
          <h3 className="text-md font-semibold text-gray-800">
            {name}
          </h3>

          <Rating
            style={{ maxWidth: 80 }}
            value={parseFloat(rating)}
            readOnly
            halfFillMode="svg"
            itemStyles={myStyles}
          />
        </div>
        <p>Quantity: {quantity}</p>
        <p>Borrowed Date: {borrowedDate}</p>
        <p>Return Date: {returnDate}</p>
        <button className="btn btn-sm mt-2 w-full text-white bg-green-600 hover:bg-green-700 font-medium">
          Return Book
        </button>        
      </div>
    </div>
    );
};

export default BorrowCard;