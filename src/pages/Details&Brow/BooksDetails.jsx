import React, { useContext, useState } from 'react';
import { useLoaderData,Link } from 'react-router';
import { Rating,ThinStar  } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { AuthContext } from '../../contexts/AuthContext';
import BorrowModal from './BorrowModal';
const BooksDetails = () => {
    const {data:book} =useLoaderData()
    const {user,loading} = useContext(AuthContext)
    const [bookData,setBookData] = useState(book)
    const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9'
}
    const {name,author,category,content,description,email,image,quantity,rating} =bookData
  
    const handleQuantityUpdate = () =>{
      setBookData(prev =>({
        ...prev, quantity: prev.quantity -1 
      }))
    }
      if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <span className="loading loading-spinner loading-lg text-green-600"></span>
      </div>
    );
  }


  return (
<div className="max-w-6xl mx-auto p-6 shadow-md mb-5 bg-green-100 rounded-xl">

    <title>BookNest||Details</title>

    <div className='flex flex-col lg:flex-row gap-6 items-start'>

        <figure className='flex-shrink-0'>
        <img src={image} className='w-72 h-110 object-cover rounded-lg' alt="" />
        </figure>

        <div className='flex-1 space-y-3'>

    <div className="flex-1 space-y-3">
      <div>
        <h2 className="text-3xl text-gray-700 font-bold">{name}</h2>
        <p className="text-gray-400 text-sm">by: {author}</p>
      </div>

      <Rating
        style={{ maxWidth: 110 }}
        value={parseFloat(rating)}
        readOnly
        halfFillMode="svg"
        itemStyles={myStyles}
      />

      <div className="flex flex-col space-y-1">
        <p className="font-semibold text-gray-700">Category: {category}</p>
        <p className="text-lg text-gray-700 font-medium">Quantity: {quantity}</p>
      </div>

      <hr className="border border-gray-200" />

      <div>
        <p className="text-lg font-medium text-black">Short Description:</p>
        <p className="text-gray-600">{description}</p>
      </div>

      <div>
        <p className="text-lg font-medium text-black">More Information About Book:</p>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  </div>
    </div>

  <div className='text-center mt-5'>
        <button className='w-7/12 text-white bg-green-600 hover:bg-green-700 btn' onClick={()=>document.getElementById('my_modal_4').showModal()} disabled={quantity === 0}>Borrow Book</button>

    <dialog id="my_modal_4" className="modal">
  <div className="modal-box w-11/12 max-w-5xl">
      
      {user?  <BorrowModal book={bookData} handleQuantityUpdate={handleQuantityUpdate} user={user} onClose = {() => document.getElementById('my_modal_4').close()}></BorrowModal> :
      <p className="text-center text-red-500">You must login to borrow this book.</p>
}
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
  </div>
</div>

    );
};

export default BooksDetails;