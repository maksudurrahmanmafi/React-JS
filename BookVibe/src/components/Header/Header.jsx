const Header = () => {
    const links = <>
    <li className="hover:bg-base-200 m-2"><a>Home</a></li>
    <li className="hover:bg-base-200 m-2"><a>Listed Books</a></li>
    <li className="hover:bg-base-200 m-2"><a>Pages to Read</a></li>
    </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">BOI POKA</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn rounded-[8px] bg-[#23BE0A] mr-4">Sign In</a>
        <a className="btn rounded-[8px] bg-[#59C6D2]">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
