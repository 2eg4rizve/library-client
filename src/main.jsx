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
        element: <CategoryBookDetails></CategoryBookDetails>,
        // loader: () => fetch("http://localhost:5000/books")

      },
      {
        path: "/categoryBookRead/:_id",
        element: <CategoryBookRead></CategoryBookRead>


      },
      {
        path: "/categoryBookBorrow/:_id",
        element: <CategoryBookBorrow></CategoryBookBorrow>


      },
      {
        path: "/addBook",
        element: <AddBookPage></AddBookPage>
      },
      {
        path: "/allBooks",
        element: <AllBooksPage></AllBooksPage>,
        loader: () => fetch("http://localhost:5000/books")
      },
      {
        path: "/bookUpdate/:id",
        element: <BookUpdate></BookUpdate>,
        loader: () => fetch("http://localhost:5000/books")
      },
      {
        path: "/borrowedBooks",
        element: <BorrowedBooksPage></BorrowedBooksPage>,
        loader: () => fetch("http://localhost:5000/borrowBooks")
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>
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
