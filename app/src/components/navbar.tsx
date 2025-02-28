import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav className="container mx-auto rounded-xl flex items-center justify-between px-6 py-4 border mt-4  bg-white shadow-sm">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold text-gray-800">
          Rando Store
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <Link
          to="/"
          className={`${pathname === "/" ? "text-gray-900 font-medium" : "text-gray-600"} hover:text-gray-900`}
        >
          Home
        </Link>
        <Link
          to="/cart"
          className={`${pathname === "/cart" ? "text-gray-900 font-medium" : "text-gray-600"} hover:text-gray-900`}
        >
          Cart
        </Link>
      </div>
    </nav>
  );
}
