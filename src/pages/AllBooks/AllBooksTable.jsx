import React from 'react';
import { Rating,ThinStar  } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router';
import { IoPerson } from 'react-icons/io5';

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9'
}

const AllBooksTable = ({book,index}) => {
    return (
      <tr>
        <th>
          <label>
            {index + 1}
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-14 w-14">
                <img
                  src={book.image}
                  alt="Book Image" />
              </div>
            </div>
            <div>
              <div className="font-bold">{book.name}</div>
              <div className="text-sm opacity-50"><p className=" text-gray-600 flex items-center gap-1">
                        <IoPerson />{book.author}
                      </p></div>
            </div>
          </div>
        </td>
        <td>
        {book.quantity}       
        </td>
        <td>
          <Rating
            style={{ maxWidth: 80 }}
            value={parseFloat(book.rating)}
            readOnly
            halfFillMode="svg"
            itemStyles={myStyles}
          />        
        </td>
        <td>{book.category}</td>
        <th>
                    <Link to={`/updateBook/${book._id}`}>
        <button className="btn btn-sm mt-2 w-full text-white bg-green-600 hover:bg-green-700 font-medium">
          Update ✏️
        </button>        
        </Link>        </th>
      </tr>
    );
};

export default AllBooksTable;