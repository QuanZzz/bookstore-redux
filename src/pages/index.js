import { useState } from "react"
import { Book } from "@/components/Book";
import { AddBookButton } from "@/components/AddBookButton";
import { Layout } from "@/components/Layout";
import { BookModal } from "@/components/BookModal";
import "../app/globals.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from "react-redux";

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBookId, setSelectedBookId] = useState(null);
  const books = useSelector((state) => state.books.books);
  const selectedBook = books.find((b) => b.id === selectedBookId);

  return (
    <Layout>
      <AddBookButton handleOnClick={() => setIsModalOpen(!isModalOpen)}/>
       
      <BookModal
        show={isModalOpen}
        handleClose={()=> {
          setIsModalOpen(false);
          setSelectedBookId(null);
        }}
        book={selectedBook}
      />

      <div className="flex flex-col justify-start w-full">
        {books.map((b) => 
          <div key={b.id} className="w-full py-2 flex justify-start">
            <Book 
              book={b} 
              handleOnClick={() => {
                setSelectedBookId(b.id);
                setIsModalOpen(true);
              }}
            />
          </div>
        )}
      </div>
    </Layout>
  )
}
