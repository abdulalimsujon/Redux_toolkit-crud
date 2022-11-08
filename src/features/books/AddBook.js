import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from './BookSlice';

const AddBook = () => {


    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const numberOfBooks = useSelector((state) => state.booksReducer.books.length)
    const hundleSubmit = (e) => {
        e.preventDefault();
        const book = {

            id: numberOfBooks + 1, title, author


        }

        dispatch(addBook(book));
        navigate('/show-books', { replace: true })

    }

    return (
        <div>
            <h1>Add Books</h1>
            <form onSubmit={hundleSubmit} >
                <div className='form-field'>
                    <label htmlFor="title">title: </label>
                    <input type='text' id='title' name="title" value={title} onChange={(e) => setTitle(e.target.value)} required></input>

                </div>
                <div className='form-field'>
                    <label htmlFor="author">Author: </label>
                    <input type='text' id='author' name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required></input>

                </div>

                <button type='submit'>Add book</button>
            </form>
        </div>
    );
};

export default AddBook;