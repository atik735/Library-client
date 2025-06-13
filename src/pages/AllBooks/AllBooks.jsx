import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllBooksCard from './AllBooksCard';
import { FaList } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import AllBooksTable from './AllBooksTable';
import booksimg from '../../assets/books.png';
const AllBooks = () => {
    const {data:books} = useLoaderData()
  const [toggleView, setToggleView] = useState(() => {
    const saved = localStorage.getItem('toggleView');
    return saved ? JSON.parse(saved) : true;
  });
const handleToggle = () => {
  setToggleView(prev => {
    localStorage.setItem('toggleView', JSON.stringify(!prev));
    return !prev;
  });
};
    return (
        <div>
      <div className="px-6 md:px-12 py-8">
  <div className="text-center mb-8">
    <h1 className="text-4xl font-bold text-green-600 mb-2 flex items-center justify-center"><img src={booksimg} className='w-12' alt="" /> All Books</h1>
    <p className="text-gray-600">
      Explore our entire library collection. Browse by category or author.
    </p>
  </div>

  {/* Optional: Filter Bar */}
  <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
    <div className="flex gap-3 w-full md:w-auto">
<select className="select select-bordered" defaultValue="">
  <option value="" disabled>Category</option>
  <option value="Drama">Drama</option>
  <option value="Thriller">Thriller</option>
  <option value="Sci-Fi">Sci-Fi</option>
</select>


      <input
        type="text"
        placeholder="Search by author"
        className="input input-bordered w-full md:w-60"
      />
    </div>

    <div className="flex gap-2">
        <div className="trigger-button" onClick={handleToggle}> 
            {toggleView?<div className='cursor-pointer'><FaList size={30}/></div>:<div className='cursor-pointer'><IoGrid size={30}/></div>}
        </div>
    </div>
  </div>
</div>



        {toggleView?<div className='grid lg:grid-cols-4  gap-4 md:grid-cols-2 grid-cols-1'>
            {
                books.map(book => <AllBooksCard key={book._id} book={book}></AllBooksCard>)
            }

        </div> :<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            #
          </label>
        </th>
        <th>Name</th>
        <th>Quantity</th>
        <th>Rating</th>
        <th>Category</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
            {
                books.map((book,index) => <AllBooksTable index={index} key={book._id} book={book}></AllBooksTable>)
            }
    </tbody>
  </table>
</div> }

        </div>
    );
};

export default AllBooks;