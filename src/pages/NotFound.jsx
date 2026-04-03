import { useLocation, Link } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="text-center mt-5">
      <h1 style={{ fontSize: "60px" }}>404 - Page Not Found</h1>
      <p>Invalid URL: {location.pathname}</p>
      <Link to="/" className="btn btn-primary">Go Home</Link>
    </div>
  );
}

export default NotFound;