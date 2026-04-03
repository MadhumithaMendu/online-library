import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import booksData from "../data/booksData";
import { useSelector } from "react-redux";

function BrowseBooks() {
  const { category } = useParams();
  const [search, setSearch] = useState("");

  const reduxBooks = useSelector((state) => state.books);

  const allBooks = [...reduxBooks, ...booksData];

  const filteredBooks = allBooks.filter((book) => {
    return (
      (category === "all" || book.category === category) &&
      (book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase()))
    );
  });

   return (
  <div className="container mt-4">
    <h2 className="mb-3">📚 Browse Books</h2>

    <input
      className="form-control mb-4"
      placeholder="Search by title or author..."
      onChange={(e) => setSearch(e.target.value)}
    />

    <div className="row">
      {filteredBooks.map((book) => (
        <div key={book.id} className="col-md-6">
          <div className="card p-3 mb-3">
            <h4>{book.title}</h4>
            <p>✍ {book.author}</p>
<p>{"⭐".repeat(book.rating)}</p>
            <Link to={`/book/${book.id}`} className="btn btn-primary">
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
    {filteredBooks.length === 0 && <p>No books found</p>}
  </div>
);
}

export default BrowseBooks;