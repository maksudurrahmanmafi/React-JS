import { use } from "react";
import { Link } from "react-router";
const Book = ({ booksData }) => {
  const result = use(booksData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
  {result.map((book) => {
    const { bookId, image, bookName, author, rating, publisher } = book;

    return (
      <Link key={bookId} to={`/booksDetails/${bookId}`}>
        <div className="card bg-base-100 shadow-sm hover:shadow-xl transition duration-300">
          <figure>
            <img
              className="w-11/12 p-4 h-[200px] bg-blue-100 mt-2 object-contain rounded-xl"
              src={image}
              alt={bookName}
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{bookName}</h2>
            <p>Author: {author}</p>
            <p>Publisher: {publisher}</p>
            <p>⭐ {rating}</p>
          </div>
        </div>
      </Link>
    );
  })}
</div>
  );
};

export default Book;
