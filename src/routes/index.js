import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from '../features/books/AddBook';
import BookView from '../features/books/BookView';
import EditBook from '../features/books/EditBook';

import Footer from '../Layouts/Footer';



import Navbar from '../Layouts/Navbar';
import Home from '../pages/Home';

const Index = () => {
    return <BrowserRouter>
        <Navbar></Navbar>
        <main>

            <Routes>

                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/show-books' element={<BookView></BookView>}></Route>
                <Route path='/add-books' element={<AddBook></AddBook>}></Route>
                <Route path='/edit-book' element={<EditBook></EditBook>}></Route>
                <Route path='*' element={<Home></Home>}></Route>
            </Routes>

        </main>
        <footer>
            <Footer></Footer>

        </footer>





    </BrowserRouter>
};

export default Index;