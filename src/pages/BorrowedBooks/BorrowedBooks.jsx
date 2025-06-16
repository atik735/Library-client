import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import BorrowCard from './BorrowCard';

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
    return (
        <div className='mb-5'>
     <div className='grid lg:grid-cols-4  gap-4 md:grid-cols-2 grid-cols-1'>

            {
                borrows.map(borrow => <BorrowCard key={borrow._id} borrow={borrow}></BorrowCard>)
            }
        </div>
        </div>
    );
};

export default BorrowedBooks;