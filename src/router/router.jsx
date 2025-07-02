import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import PrivateRoute from "../routes/PrivateRoute";
import AllBooks from "../pages/AllBooks/AllBooks";
import AddBook from "../pages/AddBook/AddBook";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/Signin/SignIn";
import BorrowedBooks from "../pages/BorrowedBooks/BorrowedBooks";
import ErrorPage from "../pages/Shared/ErrorPage";
import axios from "axios";
import UpdateBooks from "../pages/AllBooks/UpdateBooks";
import CategoriesBooks from "../pages/Home/CategoriesBooks";
import BooksDetails from "../pages/Details&Brow/BooksDetails";
import About from "../pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },

 {
        path: "allbooks",
        loader: () => axios(`${import.meta.env.VITE_API_URL}/books`),
        hydrateFallbackElement:(        <div className="text-center text-green-500 text-2xl p-5 mt-10">
<span className="loading loading-bars loading-xl"></span>
        </div>),
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
      },
        {
        path: "updateBook/:id",
        loader: ({params}) => axios(`${import.meta.env.VITE_API_URL}/books/${params.id}`),
        hydrateFallbackElement:(        <div className="text-center text-green-500 text-2xl p-5 mt-10">
<span className="loading loading-bars loading-xl"></span>
        </div>),
        element: (
          <PrivateRoute>
            <UpdateBooks></UpdateBooks>
          </PrivateRoute>
        ),
      },
      {
  path: "/details/:id",
  loader: ({ params }) =>
    axios(`${import.meta.env.VITE_API_URL}/books/${params.id}`),
  hydrateFallbackElement: (
            <div className="text-center text-green-500 text-2xl p-5 mt-10">
<span className="loading loading-bars loading-xl"></span>
        </div>
  ),
  element: (
    <PrivateRoute>
      <BooksDetails></BooksDetails>
    </PrivateRoute>
  ),
},
      {
        path: "addbook",
        element: (
          <PrivateRoute>
            <AddBook></AddBook>
          </PrivateRoute>
        ),
      },
      {
        path: "borrowedBooks",
        element: (
          <PrivateRoute>
            <BorrowedBooks></BorrowedBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "category/:categoryName",
        loader: ({params}) => axios(`${import.meta.env.VITE_API_URL}/books/category/${params.categoryName}`),
        
        hydrateFallbackElement:(<div className="text-center text-green-500 text-2xl p-5 mt-10">
<span className="loading loading-bars loading-xl"></span>
        </div>),
        element: (
            <CategoriesBooks></CategoriesBooks>
        ),
      },
      {
        path: "contact",
        Component:About
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "signIn",
        Component: SignIn,
      },
    ],
  },
]);

export default router;
