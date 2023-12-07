export const addBook = (book) => ({
  type: 'ADD_BOOK',
  payload: book,
});

export const editBook = (bookId, updatedBook) => ({
  type: 'EDIT_BOOK',
  payload: { bookId, updatedBook },
});

export const deleteBook = (bookId) => ({
  type: 'DELETE_BOOK',
  payload: bookId,
});
