import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import BorrowCard from './BorrowCard';
import Swal from 'sweetalert2';

const BorrowedBooks = () => {
    const [borrows,setBorrows] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(() =>{
        axios(`${import.meta.env.VITE_API_URL}/borrow-lists/${user?.email}`)
        .then(data =>{
            console.log(data?.data)
            setBorrows(data?.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[user])

 const handleReturn = (_id, bookId) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Return!"
  }).then((result) => {
    if (result.isConfirmed) {
        axios.delete(`${import.meta.env.VITE_API_URL}/return-book/${_id}?id=${bookId}`)
        .then(data => {
            setBorrows((prev) => prev.filter((borrow) => borrow._id !== _id));
          Swal.fire({
            title: "Return!",
            text: "Your Book has been Returned.",
            icon: "success"
          });
        });
    }
  });
};
    return (
        <div className='mb-5'>
     <div className='grid lg:grid-cols-4  gap-4 md:grid-cols-2 grid-cols-1'>

            {
                borrows.map(borrow => <BorrowCard key={borrow._id} borrow={borrow} handleReturn={handleReturn}></BorrowCard>)
            }
        </div>
        </div>
    );
};

export default BorrowedBooks;