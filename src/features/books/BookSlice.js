const { createSlice } = require("@reduxjs/toolkit")

const initialBooks = {
    books: [
        { id: 1, title: 'Love bangladesh', author: 'anisul islam' },
        { id: 2, title: 'bangladeshi', author: 'abdul alim' }

    ]
}


export const bookSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showbooks: (state) => state,
        addBook: (state, action) => {
            state.books.push(action.payload)
        },
        editBook: (state, action) => {
            const { id, title, author } = action.payload;
            const choosenBook = state.books.filter((book) => book.id === id);
            if (choosenBook) {

                choosenBook[0].id = title;
                choosenBook[0].author = author;

            }


        },
        deleteBook: (state, action) => {
            const id = action.payload;
            const exitBooks = state.books.filter((book) => book.id !== id);

            state.books = exitBooks;



        }

    }
})

export const { showbooks, addBook, deleteBook, editBook } = bookSlice.actions;
export default bookSlice.reducer;