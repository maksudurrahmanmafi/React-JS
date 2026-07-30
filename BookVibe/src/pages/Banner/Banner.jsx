import bookImage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <section className="max-w-7xl mx-auto mt-10">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-50 to-gray-100 shadow-xl px-8 py-12 md:px-16 md:py-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10 transition-all duration-300 hover:shadow-2xl">

        {/* Decorative Circle */}
        <div className="absolute -top-16 -right-16 h-52 w-52 rounded-full bg-green-300 opacity-20"></div>

        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
            Books to
            <span className="text-green-600"> Freshen Up </span>
            <br />
            Your Bookshelf
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Discover thousands of amazing books from your favorite
            authors. Build your dream collection and enjoy reading
            anytime, anywhere.
          </p>

          <button className="btn bg-green-500 hover:bg-green-600 border-none text-white rounded-xl px-8 mt-8 shadow-lg transition duration-300 hover:scale-105">
            View The List
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center z-10">
          <img
            src={bookImage}
            alt="Books"
            className="w-72 md:w-96 lg:w-[430px] drop-shadow-2xl transition-transform duration-500 hover:scale-105 rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;

/* 
import bookImage from "../../assets/books.jpg";
const Banner = () => {
    return (
        <div className="max-w-7xl bg-[#f0f0f0]  md:h-[400px] lg:h-[554px] rounded-[24px] mt-10 flex flex-col md:flex-row justify-between items-center">
            <div >
                <h1 className="text-3xl font-bold leading-relaxed text-black">Books to freshen up<br></br> your bookshelf</h1>
                <button className="btn bg-[#23BE0A] text-white mt-6 border-none rounded-[8px] hover:bg-red-400 hover:text-white">
                    View The List
                </button>
                
            </div>
            <div>
                <img className="max-w-3/12" src={bookImage} alt="Book" />
            </div>
            
        </div>
    );
};

export default Banner; */