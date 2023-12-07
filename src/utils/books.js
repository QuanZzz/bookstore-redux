import { generateUniqueId } from "./generateUniqueId"

export const INITIAL_BOOKS = [
  {
    "id": generateUniqueId(),
    "name": "1984",
    "price": 15.99,
    "category": "Fiction",
    "description": "A dystopian novel by George Orwell portraying a totalitarian state and its impact on society."
  },
  {
    "id": generateUniqueId(),
    "name": "The Great Gatsby",
    "price": 12.50,
    "category": "Classic",
    "description": "F. Scott Fitzgerald's novel depicting the roaring 1920s and the American Dream."
  },
  {
    "id": generateUniqueId(),
    "name": "To Kill a Mockingbird",
    "price": 10.75,
    "category": "Classic",
    "description": "Harper Lee's masterpiece addressing racial injustice in the American South."
  }
]

export const DEFAULT_BOOK_FIELDS = {
  id: generateUniqueId(),
  name: "",
  price: "",
  category: "",
  description: ""
}