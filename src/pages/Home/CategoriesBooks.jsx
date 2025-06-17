import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router';
import SingleBookbyCategory from './SingleBookbyCategory';

const CategoriesBooks = () => {
    const {data:books} = useLoaderData();
        useEffect(() =>{
        window.scrollTo({top:0, behavior: "smooth"});
    },[])
    return (
        <div>
            <title>BookNest||CategoriesBook</title>
            <div className='grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1'>
            {books.map(book => <SingleBookbyCategory key={book._id} book={book}></SingleBookbyCategory>)}
        </div>
        </div>
    );
};

export default CategoriesBooks;