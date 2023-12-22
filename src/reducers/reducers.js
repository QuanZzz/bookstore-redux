// import { INITIAL_BOOKS } from "@/utils/books";

// const initialState = {
//   books: INITIAL_BOOKS,
// };

// const bookReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "ADD_BOOK":
//       return {
//         ...state,
//         books: [...state.books, action.payload],
//       };
//     case "EDIT_BOOK":
//       return {
//         ...state,
//         books: state.books.map((book) =>
//           book.id === action.payload.bookId ? action.payload.updatedBook : book
//         ),
//       };
//     case "DELETE_BOOK":
//       return {
//         ...state,
//         books: state.books.filter((book) => book.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export default bookReducer;
