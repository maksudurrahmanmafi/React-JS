import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* <h1>Firebase Authentication</h1> */}
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </div>
  );
};

export default Header;
