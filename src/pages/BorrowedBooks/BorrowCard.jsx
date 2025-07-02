import React from 'react';
import { Rating,ThinStar  } from '@smastrom/react-rating'
import { IoPerson } from "react-icons/io5";
import '@smastrom/react-rating/style.css'

const BorrowCard = ({borrow,handleReturn}) => {
    const myStyles = {
      itemShapes: ThinStar,
      activeFillColor: '#ffb700',
      inactiveFillColor: '#fbf1a9'
    }
    // console.log(borrow)
    const {borrowedDate,category,image,returnDate,name,bookId,author,rating,quantity,_id} = borrow
    return (
      <tr className='border-b border-opacity-20 text-gray-900 border-gray-300 bg-gray-50'>
       <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={image}
                  alt={name} />
              </div>
            </div>
            <div>
              <div className="font-bold">{name}</div>
              <div className="text-sm opacity-50">by {author}</div>
            </div>
          </div>
        </td>
        <td>
          <p>{category}</p>
        </td>
        <td>
          <p>{quantity}</p>
        </td>
        <td className='max-sm:text-center'>{returnDate}</td>
        <th className='flex '>
        <button onClick={() =>handleReturn(_id,bookId)} className="btn btn-sm mt-2 w-full text-white bg-green-600 hover:bg-green-700 font-medium">
          Return Book
        </button>  
        </th>
      </tr>
    );
};

export default BorrowCard;