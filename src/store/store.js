import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { INITIAL_BOOKS } from "@/utils/books";

const bookSlice = createSlice({
  name: "books",
  initialState: { books: INITIAL_BOOKS },
  reducers: {
    addBook: (state, action) => {
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    },
    editBook: (state, action) => {
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.bookId ? action.payload.updatedBook : book
        ),
      };
    },
    deleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addBookAsync.pending, () => {
        console.log("pending");
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        return {
          ...state,
          books: [...state.books, action.payload],
        };
      });
  },
});

export const addBookAsync = createAsyncThunk(
  "books/addBookAsync",
  async (book) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return book;
  }
);

const store = configureStore({
  reducer: bookSlice.reducer,
});

export const actions = bookSlice.actions;
export default store;
