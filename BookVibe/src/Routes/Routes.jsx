import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import BookDetails from "../components/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage /> ,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader:()=>fetch('/booksData.json')

      },
      {
        path: "/about",
        Component: About
      },
      {
        path:"/booksDetails/:id",
        Component: BookDetails
      }
    ]
  },
]);