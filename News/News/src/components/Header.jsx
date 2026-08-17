import { format } from "date-fns";
import logo from "../assets/logo.png";
const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 mt-4">
      <img className="w-[450px]" src={logo} alt="" />
      <p className="text-accent">Journalism without Fear or Favour</p>
      <p className="text-accent font-semibold ">{format(new Date(),"EEEE , MMMM dd , yyyy")}</p>
    </div>
  );
};

export default Header;
