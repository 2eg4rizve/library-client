/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";


const AllBooksPage = () => {
    const books = useLoaderData();
    const [nowBooks, setNowBooks] = useState(books);

    //console.log(books);


    return (
        <div>

            AllBooksPage
            <p>books: {books.length}</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    nowBooks.map(book => <BookCard key={book._id} book={book}></BookCard>)
                }

            </div>
        </div>
    );
};

export default AllBooksPage;