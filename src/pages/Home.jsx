import { Link } from "react-router-dom";
import booksData from "../data/booksData";

const categories = ["fiction", "non-fiction", "sci-fi"];

function Home() {
  // Take first 4 books as "popular"
  const popularBooks = booksData.slice(0, 4);

  return (
    <div className="container mt-4">

      {/* Welcome Section */}
      <h1 className="text-center mb-3">📚 Online Library</h1>
      <p className="text-center text-muted">
        Discover books, explore categories, and grow your knowledge.
      </p>

      {/* Categories */}
      <h3 className="mt-4">Browse by Category</h3>
      <div className="mb-4">
        {categories.map((cat) => (
          <Link key={cat} to={`/books/${cat}`}>
            <button className="btn btn-primary m-2">{cat}</button>
          </Link>
        ))}
      </div>

      {/* Popular Books */}
      <h3 className="mt-4">🔥 Popular Books</h3>

      <div className="row">
        {popularBooks.map((book) => (
          <div key={book.id} className="col-md-6">
            <div className="card p-3 mb-3">
              <h5>{book.title}</h5>
              <p>✍ {book.author}</p>
              <p>⭐ {book.rating}</p>

              <Link to={`/book/${book.id}`} className="btn btn-outline-primary">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Home;