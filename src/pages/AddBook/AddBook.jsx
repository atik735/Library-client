import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { Rating,ThinStar  } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const myStyles = {
  itemShapes: ThinStar,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9'
}
const AddBook = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [rating, setRating] = useState(0)

const handleAddBook = async (e) => {
  e.preventDefault();

  if (rating === 0) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Please provide a rating for the book.',
    });
  }

  const form = e.target;
  const formData = new FormData(form);
  const newBook = Object.fromEntries(formData.entries());
  newBook.email = user?.email;
  newBook.rating = rating;

  const token = await user.getIdToken();

  axios
    .post(`${import.meta.env.VITE_API_URL}/add-book`, newBook, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data?.insertedId || res.data?.acknowledged) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Book added successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Failed!',
          text: 'Book was not added.',
        });
      }
    })
    .catch((err) => {
      console.error(err);
      const msg = err.response?.data?.message || 'Something went wrong!';
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: msg,
      });
    });
};


  return (
<div className='max-w-6xl mx-auto px-4 md:px-10 py-10'>
  <title>BookNest || AddBook</title>
  <div className='text-center space-y-4 mb-10'>
    <h1 className='text-3xl md:text-5xl font-bold'>Add Book</h1>
    <p className="text-sm md:text-base text-gray-600">
      Fill out the form to add a new book to the library. This page is only accessible to authorized users.
    </p>
  </div>

  <form onSubmit={handleAddBook}>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      {/* Name */}
      <fieldset className='border border-gray-100 p-4 rounded bg-base-200'>
        <label className='label'>Name</label>
        <input type='text' name='name' className='input w-full' placeholder='Book Name' required />
      </fieldset>

      {/* Quantity */}
      <fieldset className='border border-gray-100 p-4 rounded bg-base-200'>
        <label className='label'>Quantity</label>
        <input type='number' name='quantity' className='input w-full' placeholder='Number of Copies' required />
      </fieldset>

      {/* Author */}
      <fieldset className='border border-gray-100 p-4 rounded bg-base-200'>
        <label className='label'>Author Name</label>
        <input type='text' name='author' className='input w-full' placeholder='Author Name' required />
      </fieldset>

      {/* Category */}
      <fieldset className='border border-gray-100 p-4 rounded bg-base-200'>
        <label className='label'>Category</label>
        <select name='category' className='select w-full' required>
          <option value="">Select Category</option>
          <option value="Novel">Novel</option>
          <option value="Thriller">Thriller</option>
          <option value="History">History</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </fieldset>

      {/* Rating */}
      <fieldset className='border border-gray-100 p-4 rounded bg-base-200'>
        <label className='label'>Rating</label>
        <Rating
          style={{ maxWidth: 200 }}
          halfFillMode="box"
          value={rating}
          onChange={setRating}
          itemStyles={myStyles}
          isHalf={true}
          allowHalfIcon
          fractions={2}
        />
      </fieldset>

      {/* Description */}
      <fieldset className='border border-gray-100 p-4 rounded bg-base-200'>
        <label className='label'>Short Description</label>
        <input type='text' name='description' className='input w-full' placeholder='Short description of the book' required />
      </fieldset>
    </div>

    {/* Image URL */}
    <fieldset className='border border-gray-100 p-4 rounded bg-base-200 my-6'>
      <label className='label'>Image URL</label>
      <input type='text' name='image' className='input w-full' placeholder='Book cover image URL' required />
    </fieldset>

    {/* Content */}
    <fieldset className='border border-gray-100 p-4 rounded bg-base-200 my-6'>
      <label className='label'>Book Content</label>
      <textarea
        name='content'
        className='textarea w-full'
        rows={5}
        placeholder='More information about the book'
        defaultValue={
          "This book takes readers on a captivating journey through rich storytelling and insightful narratives. It explores deep human emotions, engaging characters, and thought-provoking themes that leave a lasting impact. Perfect for anyone looking to get lost in a world of imagination and learning."
        }
      ></textarea>
    </fieldset>

    {/* Submit */}
    <input type='submit' className='btn w-full bg-green-600 text-white hover:bg-green-700' value='Add Book' />
  </form>
</div>

  );
};

export default AddBook;
