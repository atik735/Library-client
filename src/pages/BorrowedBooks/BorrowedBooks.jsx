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
    const [loading, setLoading] = useState(true);
    const {user} = useContext(AuthContext)
    useEffect(() =>{
        axios(`${import.meta.env.VITE_API_URL}/borrow-lists/${user?.email}`)
        .then(data =>{
            console.log(data?.data)
            setBorrows(data?.data)
            setLoading(false);
        })
        .catch(err =>{
            console.log(err)
              setLoading(false);
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
      user.getIdToken()
        .then(token => {
          return axios.delete(`${import.meta.env.VITE_API_URL}/return-book/${_id}?id=${bookId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        })
        .then(() => {
          setBorrows(prev => prev.filter(borrow => borrow._id !== _id));
          Swal.fire({
            title: "Returned!",
            text: "Your Book has been Returned.",
            icon: "success",
          });
        })
        .catch(err => {
          console.error("Error while returning:", err);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        });
    }
  });
};


    return (
        <div className='mb-5'>
            <title>BookNest||BorrowedBooks</title>
      {loading ? (
        <div className="text-center text-green-500 text-2xl p-5 mt-10">
<span className="loading loading-bars loading-xl"></span>
        </div>
      ) : borrows.length === 0 ? (
        <div className="text-center text-green-500 text-3xl bg-green-50 p-5 font-bold mt-10">
          You haven't borrowed any books yet.
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {borrows.map(borrow => (
            <BorrowCard key={borrow._id} borrow={borrow} handleReturn={handleReturn}></BorrowCard>
          ))}
        </div>
      )}
    </div>
    );
};

export default BorrowedBooks;