/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookCard from "./BookCard";


const AllBooksPage = () => {
    const books = useLoaderData();
    const [nowBooks, setNowBooks] = useState(books);
    const [minBooks, setMinBooks] = useState(books);

    const [showingAllBook, setShowingAllBook] = useState(true);





    useEffect(() => {
        const rec = books.filter(item => item.quantityOfTheBook > 0)
        setMinBooks(rec);
    }, [books])


    // console.log(nowBooks);
    // console.log(minBooks);
    console.log("showingAllBook : ", showingAllBook);

    return (
        <div>
            <p className="mt-[50px] text-3xl font-bold text-center">All Books</p>
            {/* <p>books: {books.length}</p>
            <p>nowBooks: {nowBooks.length}</p>
            <p>minBooks: {minBooks.length}</p>
            <p>showingAllBook : {showingAllBook}</p> */}


            <button className="btn btn-primary" onClick={() => setShowingAllBook(true)} >All</button>
            <button className="btn btn-primary ml-4" onClick={() => setShowingAllBook(false)} >available</button>

            {
                showingAllBook ?

                    (
                        <div>
                            <p className="font-bold mt-[20px]" >Total Books: {nowBooks.length}</p>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                {
                                    nowBooks?.map(book => <BookCard key={book._id} book={book}></BookCard>)
                                }

                            </div>
                        </div>

                    )
                    :
                    (
                        <div>

                            <p className="font-bold mt-[20px]">Available Books: {minBooks.length}</p>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                                {
                                    minBooks?.map(book => <BookCard key={book._id} book={book}></BookCard>)
                                }

                            </div>

                        </div>





                    )



            }
        </div>
    );
};

export default AllBooksPage;