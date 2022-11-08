

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { editBook } from './BookSlice';

const EditBook = () => {

    const location = useLocation();
    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [author, setAuthor] = useState(location.state.author);


    console.log(location);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const hundleSubmit = (e) => {
        e.preventDefault();

        dispatch(editBook({ id, title, author }));
        navigate('/show-books')


    }

    return (
        <form onSubmit={hundleSubmit} >
            <div className='form-field'>
                <label htmlFor="title">title: </label>
                <input type='text' id='title' name="title" value={title} onChange={(e) => setTitle(e.target.value)} required></input>

            </div>
            <div className='form-field'>
                <label htmlFor="author">Author: </label>
                <input type='text' id='author' name="author" value={author} onChange={(e) => setAuthor(e.target.value)} required></input>

            </div>

            <button type='submit'>edit book</button>
        </form>
    );
};

export default EditBook;