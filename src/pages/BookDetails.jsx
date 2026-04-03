import { useParams, Link } from "react-router-dom";
import booksData from "../data/booksData";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const reduxBooks = useSelector((state) => state.books);

  const allBooks = [...reduxBooks, ...booksData];

  const book = allBooks.find((b) => b.id === Number(id));

  if (!book) return <h2>Book not found</h2>;

  return (
   <div className="container mt-4">
  <div className="card p-4">
    <h2>{book.title}</h2>
    <p><b>Author:</b> {book.author}</p>
    <p>{book.description}</p>
    <p><b>Rating:</b> ⭐ {book.rating}</p>

    <Link to="/books/all" className="btn btn-secondary mt-3">
      Back to Browse
    </Link>
  </div>
</div>
  );
}

export default BookDetails;
