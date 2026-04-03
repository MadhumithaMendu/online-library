import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h3>📚 Library</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/books/all">Browse</Link>
        <Link to="/add">Add Book</Link>
      </div>
    </nav>
  );
}

export default Navbar;