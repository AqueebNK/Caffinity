import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <h1 className="cof">Caffinity@</h1>
      <div className="menu">
        <ul>
          <li><Link to="/" className="navl">Home</Link></li>
          <li><Link to="/recipes" className="navl">Recipes</Link></li>
          {user && <li><Link to="/recommendations" className="navl">Recommendations</Link></li>}

          {user ? (
            <li><Link to="#" className="navl" onClick={logout}>Logout</Link></li>
          ) : (
            <li><Link to="/login" className="navl">Login</Link></li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;