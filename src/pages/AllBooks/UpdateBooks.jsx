import { Rating,ThinStar } from '@smastrom/react-rating';
import axios from 'axios';
import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9'
}
const UpdateBooks = () => {
    const {data:book} = useLoaderData()
    // console.log(book)
    const navigate = useNavigate()
    const {_id,name,author,quantity,category,description,image,content,email} = book
    const [rating, setRating] = useState(book.rating || 0)

    const handleUpdateBook =(e) =>{
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const updateBook = Object.fromEntries(formData.entries())
        console.log(updateBook)
        updateBook.quantity = parseInt(updateBook.quantity);
        updateBook.rating = rating;   

    //send updated book to the db

        axios.put(`${import.meta.env.VITE_API_URL}/books/${_id}`,updateBook)
            .then(data =>{
      console.log(data)
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
navigate("/allbooks")
    })
    }
    return (
    <div className='px-24 py-10 pb-24'>
      <div className='p-12 text-center space-y-4'>
        <h1 className='text-6xl'>Update Book</h1>
        <p>
          Fill out the form to Update book to the library. This page is only accessible to authorized users.
        </p>
      </div>

      <form onSubmit={handleUpdateBook}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <fieldset className='border border-gray-50 p-4 rounded bg-base-200'>
            <label className='label'>Name</label>
            <input type='text' name='name' defaultValue={name} className='input w-full' placeholder='Book Name' required />
          </fieldset>

          <fieldset className='border border-gray-50 p-4 rounded bg-base-200'>
            <label className='label'>Quantity</label>
            <input type='number' name='quantity' defaultValue={quantity} className='input w-full' placeholder='Number of Copies' required />
          </fieldset>

          <fieldset className='border border-gray-50 p-4 rounded bg-base-200'>
            <label className='label'>Author Name</label>
            <input type='text' name='author' defaultValue={author} className='input w-full' placeholder='Author Name' required />
          </fieldset>

          <fieldset className='border border-gray-50 p-4 rounded bg-base-200'>
            <label className='label'>Category</label>
            <select name='category' defaultValue={category} className='select w-full' required>
              <option value="">Select Category</option>
              <option value="Novel">Novel</option>
              <option value="Thriller">Thriller</option>
              <option value="History">History</option>
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </fieldset>

          <fieldset className='border border-gray-50 p-4 rounded bg-base-200'>
            <label className='label'>Rating</label>
            <Rating style={{ maxWidth: 200 }} halfFillMode="box" value={rating} onChange={setRating} itemStyles={myStyles} isHalf={true}  allowHalfIcon fractions={2} />
          </fieldset>

          <fieldset className='border border-gray-50 p-4 rounded bg-base-200'>
            <label className='label'>Short Description</label>
            <input type='text' defaultValue={description} name='description' className='input w-full' placeholder='Short description of the book' required />
          </fieldset>
        </div>

        <fieldset className='border border-gray-50 p-4 rounded bg-base-200 my-6'>
          <label className='label'>Image URL</label>
          <input type='text' defaultValue={image} name='image' className='input w-full' placeholder='Book cover image URL' required />
        </fieldset>

        <fieldset className='border border-gray-50 p-4 rounded bg-base-200 my-6'>
          <label className='label'>Book Content</label>
          <textarea name='content' defaultValue={content} className='textarea w-full' placeholder='More information about the book'></textarea>
        </fieldset>

        <input type='submit' className='btn w-full' value='Update Book' />
      </form>
    </div>
    );
};

export default UpdateBooks;