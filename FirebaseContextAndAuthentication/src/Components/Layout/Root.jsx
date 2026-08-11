import { Outlet } from "react-router";
import Navbar from '../Navbar/Navbar.jsx'
const Root = () => {
  return <div>
    <Navbar/>
    <Outlet/>
  </div>;
};

export default Root;
