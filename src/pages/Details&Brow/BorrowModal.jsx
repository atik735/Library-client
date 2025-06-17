import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';

const BorrowModal = ({book,user,onClose,handleQuantityUpdate}) => {
    const [returnDate,setReturnDate] = useState("")

const handleBorrow = async (e) => {
  e.preventDefault();

  if (book.quantity <= 0) {
    toast.error('This book is currently out of stock!');
    return;
  }

  if (user?.email === book.email) {
    toast.error('You cannot borrow your own book');
    return;
  }

  const borrowData = {
    bookId: book._id,
    email: user?.email,
    returnDate,
    borrowedDate: new Date().toISOString().split('T')[0],
  };
  // console.log("Logged In Email:", user.email);
// console.log("Book Owner Email:", book.email);


  const token = await user.getIdToken();

  axios
    .post(`${import.meta.env.VITE_API_URL}/borrow-book/${book._id}`, borrowData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data?.acknowledged) {
        toast.success('Book borrowed successfully!');
        handleQuantityUpdate();
        onClose();
      } else {
        toast.error(res.data?.message || 'Failed to borrow the book!');
      }
    })
    .catch((err) => {
      console.error(err);
      const msg = err.response?.data?.message || 'Something went wrong!';
      toast.error(msg);
    });
};


    return (
        <div>
        <form onSubmit={handleBorrow} className='text-left w-3/4 place-self-center space-y-4'>
        <h3 className='text-xl font-bold text-center'>Borrow this Book</h3>

<div>
  <label className="label">Name</label>
  <input type="text" className="input w-full" readOnly placeholder="Name" defaultValue={user.displayName} />
</div>
<div>
  <label className="label">Email</label>
  <input type="text" className="input w-full" readOnly placeholder="Email" defaultValue={user.email}/>
</div>

<div>
  <label className="label">Return Date</label>
  <input type="date"
    min={new Date().toISOString().split('T')[0]}
  required onChange={(e) => setReturnDate(e.target.value)} className="input w-full"  value={returnDate} 
  />
  </div>
   <button type="submit" className="btn w-full text-white bg-green-600 hover:bg-green-700">
          Confirm Borrow
        </button>
        </form>
        </div>
    );
};

export default BorrowModal;