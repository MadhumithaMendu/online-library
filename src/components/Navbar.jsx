import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-3 bg-dark text-white">
      <Link className="text-white me-3" to="/">Home</Link>
      <Link className="text-white me-3" to="/books/all">Browse Books</Link>
      <Link className="text-white" to="/add">Add Book</Link>
    </nav>
  );
}

export default Navbar;