
import logo from "../../assets/logo.png";
import dollarImg from "../../assets/dollar-1.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="navbar max-w-[1200px] mx-auto">
        <div className="flex-1">
          <a className=" text-xl">
            <img src={logo}></img>
          </a>
        </div>
        <div className="flex items-center">
          <span className="mr-2">6000000</span>
          <span className="mr-2">Coin</span>
          <img src={dollarImg}></img>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
