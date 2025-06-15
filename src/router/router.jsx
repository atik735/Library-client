import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import PrivateRoute from "../routes/PrivateRoute";
import BooksDetails from "../pages/BooksDetails/BooksDetails";
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
  path: "/books/:id",
  loader: ({ params }) =>
    axios(`${import.meta.env.VITE_API_URL}/books/${params.id}`),
  hydrateFallbackElement: (
    <span className="loading flex justify-center loading-spinner place-self-center loading-xl"></span>
  ),
  element: (
    <PrivateRoute>
      <BooksDetails></BooksDetails>
    </PrivateRoute>
  ),
},
 {
        path: "allbooks",
        loader: () => axios(`${import.meta.env.VITE_API_URL}/books`),
        hydrateFallbackElement:(<span className="loading flex justify-center loading-spinner place-self-center loading-xl"></span>),
        element: (
          <PrivateRoute>
            <AllBooks></AllBooks>
          </PrivateRoute>
        ),
      },
        {
        path: "updateBook/:id",
        loader: ({params}) => axios(`${import.meta.env.VITE_API_URL}/books/${params.id}`),
        hydrateFallbackElement:(<span className="loading flex justify-center loading-spinner place-self-center loading-xl"></span>),
        element: (
          <PrivateRoute>
            <UpdateBooks></UpdateBooks>
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
        
        hydrateFallbackElement:(<span className="loading flex justify-center loading-spinner place-self-center loading-xl"></span>),
        element: (
          <PrivateRoute>
            <CategoriesBooks></CategoriesBooks>
          </PrivateRoute>
        ),
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
