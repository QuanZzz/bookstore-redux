import cx from "classnames"
import PropTypes from "prop-types";
import { TrashCanIcon } from "./Icons";
import { useDispatch } from "react-redux";
import { deleteBook } from "@/actions/actions";

const BOOK_DETAILS_CLASSNAME = "flex items-center text-left"

export const Book = ({ book, handleOnClick }) => {
  const dispatch = useDispatch();

  const handleOnRemove = () => {
    dispatch(deleteBook(book.id));
  }

  return (
    <article 
      className="w-full text-base px-6 py-4 flex items-center 
      border-gray-200 border border-solid bg-white relative shadow-lg hover:shadow-2xl 
      hover:scale-105 transition-shadow rounded-lg cursor-pointer"
    >
      <div 
        className="w-11/12 flex flex-col border-r"
        onClick={handleOnClick}
      >
        <div className={cx(BOOK_DETAILS_CLASSNAME, "line-clamp-1")}>
          Name: {book.name}
        </div>
        <div className={cx(BOOK_DETAILS_CLASSNAME, "line-clamp-1")}>
          Price: {book.price}
        </div>
        <div className={cx(BOOK_DETAILS_CLASSNAME, "line-clamp-1")}>
          Category: {book.category}
        </div>
        <div className={cx(BOOK_DETAILS_CLASSNAME, "line-clamp-2")}>
          Description: {book.description}
        </div>
      </div>
      <div className="w-1/12" onClick={handleOnRemove}>
        <div className="flex flex-col items-center">
          <TrashCanIcon 
            className="text-sky-600 hover:scale-105 hover:text-sky-800"
            
          />
        </div>
      </div>
    </article>
  )
}

Book.propTypes = {
  book: PropTypes.object,
  handleOnClick: PropTypes.func
}