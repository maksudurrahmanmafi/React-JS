import logo from '../assets/logo.png'
const Header = () => {
 return (
    <div className='flex flex-col justify-center items-center gap-3'>
        <img className='w-[350px]' src={logo} alt="" />
        <p>
            Journalism without Fear or Favour
        </p>
    </div>
 )
};

export default Header;
