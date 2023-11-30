import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../providers/UserProvider";

const Navbar = () => {
  const { token, logout } = useContext(UserContext);

  return (
    <div className="navbar navbar-dark bg-dark">
      <div className="container">
        <span className="navbar-brand">Todo App</span>
        <div>
          {token ? (
            <>
              <Link to="/" className="btn btn-sm btn-outline-light me-2">
                Home
              </Link>
              <button
                className="btn btn-sm btn-outline-danger"
                onClick={logout}
              >
                logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-sm btn-outline-light me-2">
                Login
              </Link>
              <Link to="/register" className="btn btn-sm btn-outline-light">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
