export const AddBookButton = ({ handleOnClick }) => {
  return (
    <div>
      <button 
        className=" font-bold box-border focus:outline-none text-base 
        rounded-md py-3 px-4 bg-sky-600 hover:bg-sky-800 text-white"
        onClick={handleOnClick}
      >
        Add a book
      </button>
    </div>
  )
}