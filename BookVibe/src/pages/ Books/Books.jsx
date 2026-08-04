import { Suspense, useState } from "react";
import { useEffect } from "react";
import Book from "../Book/Book";
import { useLoaderData } from "react-router";

const Books = () => {
     const [books, setBooks] = useState([]);

  //1. Type of loading data from json file
/*   useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {console.log(data); setBooks(data)});
  }, []); */

    // 2. Type of loading data from local file
  const booksData = fetch("./booksData.json").then(res => res.json());

  // 3rd. type of loading data

  // const book = useLoaderData();
  // console.log

  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-8">Books</h1>
      {
        <Suspense fallback={<div>Loading...</div>}>
            <div>
                <Book booksData={booksData} />
            </div>

        </Suspense>
      }
    </div>
  );
};

export default Books;
