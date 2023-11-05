import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import BorrowedBookCard from "./BorrowedBookCard";
import Swal from "sweetalert2";


const BorrowedBooksPage = () => {
    const borrowBooks = useLoaderData();
    console.log(borrowBooks);
    const { user } = useContext(AuthContext);
    const [myBorrowBooks, setMyBorrowBooks] = useState([]);

    useEffect(() => {
        const rec = borrowBooks.filter(item => item?.userEmail == user?.email)
        setMyBorrowBooks(rec)
    }, [borrowBooks, user?.email])

    const handleDelete = _id => {
        console.log("delete id :  ", _id);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/borrowBooks/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )

                            const remaining = myBorrowBooks.filter(item => item._id !== _id)
                            setMyBorrowBooks(remaining)
                        }

                    })

            }
        })

    }

    

    return (
        <div>
            <p>BorrowedBooksPage  : {myBorrowBooks.length}</p>

            {
                myBorrowBooks.map(myBorrowBook => <BorrowedBookCard key={myBorrowBook._id} myBorrowBook={myBorrowBook} setMyBorrowBooks={setMyBorrowBooks} handleDelete={handleDelete}></BorrowedBookCard> )
            }


        </div>
    );
};

export default BorrowedBooksPage;