const navItems = [
  {
    id: 1,
    navName: "Home",
    path: "/",
  },
  {
    id: 2,
    navName: "About",
    path: "/about",
  },
  {
    id: 3,
    navName: "Services",
    path: "/services",
  },
  {
    id: 4,
    navName: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    navName: "Contact",
    path: "/contact",
  },
];


const Nav = () => {
    return (
        <nav >
            <ul className="flex ">
                {
                    navItems.map(route => {
                        return <li className="mr-10"><a href={route.path}>{route.navName}</a></li>
                    })
                }
            </ul>
        </nav>
    );
};

export default Nav;