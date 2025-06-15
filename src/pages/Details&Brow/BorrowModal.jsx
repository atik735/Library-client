import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';

const BorrowModal = ({book,user,onClose}) => {
    const [returnDate,setReturnDate] = useState("")

    const handleBorrow =(e) =>{
        e.preventDefault();

     if (book.quantity <= 0) {
      toast.error('This book is currently out of stock!');
      return;
    }
        if (user?.email === book.email) {
      toast.error('nijer Book nije order deoa jabena')
      return;
    }
    
    

    const borrowData ={
        bookId: book._id,
        name: user.displayName,
        email: user.email,
        returnDate,
        borrowedDate: new Date().toISOString(),
        image: book.image,
        title: book.name,
        category: book.category
    }

    }
    return (
        <div>
        <form onSubmit={handleBorrow} className='text-left w-3/4 place-self-center space-y-4'>
        <h3 className='text-xl font-bold text-center'>Borrow this Book</h3>

<div>
  <label className="label">Name</label>
  <input type="text" className="input w-full" placeholder="Name" defaultValue={user.displayName} />
</div>
<div>
  <label className="label">Email</label>
  <input type="text" className="input w-full" placeholder="Email" defaultValue={user.email}/>
</div>

<div>
  <label className="label">Return Date</label>
  <input type="date" required onChange={(e) => setReturnDate(e.target.value)} className="input w-full"  value={returnDate} 
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