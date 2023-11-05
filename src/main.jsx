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
        path: "/categoryBookRead/:_id",
        element: <CategoryBookRead></CategoryBookRead>
       
        
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
        element: <BorrowedBooksPage></BorrowedBooksPage>
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </React.StrictMode>,
)
