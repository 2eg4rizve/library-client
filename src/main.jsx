import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import HomePage from './pages/HomePage/HomePage';
import AuthProvider from './AuthProvider/AuthProvider';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import AddBookPage from './pages/AddBookPage/AddBookPage';
import AllBooksPage from './pages/AllBooksPage/AllBooksPage';
import BorrowedBooksPage from './pages/BorrowedBooksPage/BorrowedBooksPage';
import CategoryDetails from './components/CategoryDetails/CategoryDetails';
import BookUpdate from './pages/AllBooksPage/BookUpdate';
import CategoryBookRead from './components/CategoryDetails/CategoryBookRead';
import CategoryBookDetails from './components/CategoryDetails/CategoryBookDetails';
import CategoryBookBorrow from './components/CategoryDetails/CategoryBookBorrow';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import PrivateRoute from './PrivateRoute/PrivateRoute';
import About from './pages/About/About';
import Speciality from './pages/Speciality/Speciality';
import ContactUs from './pages/ContactUs/ContactUs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/categoryDetails/:_id",
        element: <CategoryDetails></CategoryDetails>


      },
      {
        path: "/categoryBookDetails/:_id",
        element: <PrivateRoute><CategoryBookDetails></CategoryBookDetails>,</PrivateRoute>
        // loader: () => fetch("https://a11-kappa.vercel.app/books")

      },
      {
        path: "/categoryBookRead/:_id",
        element: <PrivateRoute><CategoryBookRead></CategoryBookRead></PrivateRoute>


      },
      {
        path: "/categoryBookBorrow/:_id",
        element: <PrivateRoute><CategoryBookBorrow></CategoryBookBorrow></PrivateRoute>


      },
      {
        path: "/addBook",
        element: <PrivateRoute><AddBookPage></AddBookPage></PrivateRoute>
      },
      {
        path: "/allBooks",
        element: <PrivateRoute><AllBooksPage></AllBooksPage></PrivateRoute>,
        loader: () => fetch("https://a11-kappa.vercel.app/books")
      },
      {
        path: "/bookUpdate/:id",
        element:<PrivateRoute><BookUpdate></BookUpdate>,</PrivateRoute>,
        loader: () => fetch("https://a11-kappa.vercel.app/books")
      },
      {
        path: "/borrowedBooks",
        element: <PrivateRoute><BorrowedBooksPage></BorrowedBooksPage></PrivateRoute>,
        loader: () => fetch("https://a11-kappa.vercel.app/borrowBooks")
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/speciality",
        element: <Speciality></Speciality>

      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>

      }

    ]
  },
]);


const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>


  </React.StrictMode>,
)

//https://a11-kappa.vercel.app

//  https://library-cb6f7.web.app

