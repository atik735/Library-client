import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AllBooksCard from './AllBooksCard';
import AllBooksTable from './AllBooksTable';
import booksimg from '../../assets/books.png';
import axios from 'axios';
const AllBooks = () => {
    const [books, setBooks] = useState([]);
    const [filterOption, setFilterOption] = useState("all");
    const [sortOption,setSortOption] = useState("");
  const [viewMode, setViewMode] = useState(() => {
    const saved = localStorage.getItem('viewMode');
    return saved ? saved : "card"; // default to card
  });

      useEffect(() =>{
        axios(`${import.meta.env.VITE_API_URL}/books`,{
          params: {
            filter : filterOption,
            sort: sortOption
          }
        })
        .then( res => {
          setBooks(res.data);
        })
        .catch(err =>{
          console.log("Fetch failed:",err);
        })
      },[filterOption,sortOption])

  const handleViewChange = (e) => {
    const selected = e.target.value;
    setViewMode(selected);
    localStorage.setItem('viewMode', selected); // save in localStorage
  };

const filteredBooks = filterOption === "available"
  ? books.filter(book => book.quantity > 0)
  : books;

    return (
        <div className='mb-5'>
          <title>BookNest || AllBooks</title>
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
<select
  className="border-2 border-green-500 bg-white text-green-700 font-semibold px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
  value={filterOption}
  onChange={(e) => setFilterOption(e.target.value)}
>
  <option value="all">All Books</option>
  <option value="available">Available Books</option>
</select>

      <select 
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      className="border-2 border-green-500 bg-white text-green-700 font-semibold px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
      >
        <option value="">Sort By</option>
        <option value="rating">Rating</option>
        <option value="quantity">Quantity</option>

      </select>

    </div>

      {/* 🔄 changed: view toggle from button to dropdown */}
          <div className="flex gap-2">
      <select
        className="border-2 border-green-500 bg-white text-green-700 font-semibold px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-200"
        value={viewMode}
        onChange={handleViewChange}
      >
        <option value="card">📇 Card View</option>
       <option value="list">📋 Table View</option>
      </select>
          </div>
        </div>
      </div>



         {viewMode === "card" ? <div className='grid lg:grid-cols-4  gap-4 md:grid-cols-2 grid-cols-1'>
            {
                filteredBooks.map(book => <AllBooksCard key={book._id} book={book}></AllBooksCard>)
            }

        </div> : <div className="overflow-x-auto">
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
                filteredBooks.map((book,index) => <AllBooksTable index={index} key={book._id} book={book}></AllBooksTable>)
            }
    </tbody>
  </table>
</div> }

        </div>
    );
};

export default AllBooks;