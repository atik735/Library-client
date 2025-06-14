import axios from 'axios';
import React, { useEffect, useState } from 'react';

const BookCategories = () => {
  const [booksData,setBooksData] = useState("")
    useEffect(() =>{
    axios(`${import.meta.env.VITE_API_URL}/books`)
    .then(data => setBooksData(data.data))
    console.log(booksData)
 },[])
    return (
        <div>
            <h3 className='text-3xl font-bold text-gray-800 text-center'>Book Categories</h3>

          {/* {
            booksData.map(book => <div></div>)
          }       */}

        </div>
    );
};

export default BookCategories;