import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import BorrowedBookCard from "./BorrowedBookCard";


const BorrowedBooksPage = () => {
    const borrowBooks = useLoaderData();
    console.log(borrowBooks);
    const { user } = useContext(AuthContext);
    const [myBorrowBooks, setMyBorrowBooks] = useState([]);

    useEffect(() => {
        const rec = borrowBooks.filter(item => item?.userEmail == user?.email)
        setMyBorrowBooks(rec)
    }, [borrowBooks, user?.email])

    return (
        <div>
            <p>BorrowedBooksPage  : {myBorrowBooks.length}</p>

            {
                myBorrowBooks.map(myBorrowBook => <BorrowedBookCard key={myBorrowBook._id} myBorrowBook={myBorrowBook}></BorrowedBookCard> )
            }


        </div>
    );
};

export default BorrowedBooksPage;