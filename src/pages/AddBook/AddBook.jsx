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

  const handleAddBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newBook = Object.fromEntries(formData.entries());
    newBook.email = user?.email;
    newBook.rating = rating;

    axios.post(`${import.meta.env.VITE_API_URL}/add-book`, newBook)
      .then(res => {
        console.log(res.data);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Book added successfully',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      });
  };

  return (
    <div className='px-24 py-10 pb-24'>
      <div className='p-12 text-center space-y-4'>
        <h1 className='text-6xl'>Add Book</h1>
        <p>
          Fill out the form to add a new book to the library. This page is only accessible to authorized users.
        </p>
      </div>

      <form onSubmit={handleAddBook}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <fieldset className='border border-gray-50 p-4 rounded bg-base-200'>
            <label className='label'>Name</label>
            <input type='text' name='name' className='input w-full' placeholder='Book Name' required />
          </fieldset>

          <fieldset className='border border-gray-50 p-4 rounded bg-base-200'>
            <label className='label'>Quantity</label>
            <input type='number' name='quantity' className='input w-full' placeholder='Number of Copies' required />
          </fieldset>

          <fieldset className='border border-gray-50 p-4 rounded bg-base-200'>
            <label className='label'>Author Name</label>
            <input type='text' name='author' className='input w-full' placeholder='Author Name' required />
          </fieldset>

          <fieldset className='border border-gray-50 p-4 rounded bg-base-200'>
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

          <fieldset className='border border-gray-50 p-4 rounded bg-base-200'>
            <label className='label'>Rating</label>
            <Rating style={{ maxWidth: 200 }} halfFillMode="box" value={rating} onChange={setRating} itemStyles={myStyles} isHalf={true}  allowHalfIcon fractions={2} />
          </fieldset>

          <fieldset className='border border-gray-50 p-4 rounded bg-base-200'>
            <label className='label'>Short Description</label>
            <input type='text' name='description' className='input w-full' placeholder='Short description of the book' required />
          </fieldset>
        </div>

        <fieldset className='border border-gray-50 p-4 rounded bg-base-200 my-6'>
          <label className='label'>Image URL</label>
          <input type='text' name='image' className='input w-full' placeholder='Book cover image URL' required />
        </fieldset>

        <fieldset className='border border-gray-50 p-4 rounded bg-base-200 my-6'>
          <label className='label'>Book Content</label>
          <textarea name='content' className='textarea w-full' placeholder='More information about the book'></textarea>
        </fieldset>

        <input type='submit' className='btn w-full' value='Add Book' />
      </form>
    </div>
  );
};

export default AddBook;
