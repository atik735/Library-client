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
            // console.log(data?.data)
            setBorrows(data?.data)
            setLoading(false);
        })
        .catch(err =>{
            // console.log(err)
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
    <div className="mb-10">
      <h2 className="text-center text-2xl text-green-600 font-bold my-5">Borrowed Books</h2>

      {loading ? (
        <div className="flex justify-center my-10">
          <span className="loading loading-bars loading-xl text-green-500"></span>
        </div>
      ) : (
        <div className="overflow-x-auto md:w-10/12 mx-auto">
          <table className="table min-w-full text-xs">
            <thead>
              <tr className="text-green-600 bg-green-100 border-b-green-400">
                <th>Books</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Return Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {borrows.length > 0 ? (
                borrows.map((borrow) => (
                  <BorrowCard key={borrow._id} borrow={borrow} handleReturn={handleReturn} />
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-xl py-6 text-gray-500 italic">
                    You haven’t borrowed any books yet. Start exploring and borrow your first one! 📚
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
    );
};

export default BorrowedBooks;