/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import BorrowedBookCard from "./BorrowedBookCard";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";


const BorrowedBooksPage = () => {
    const borrowBooks = useLoaderData();
    //console.log(borrowBooks);
    const { user } = useContext(AuthContext);
    const [myBorrowBooks, setMyBorrowBooks] = useState([]);

    useEffect(() => {
        const rec = borrowBooks.filter(item => item?.userEmail == user?.email)
        setMyBorrowBooks(rec)
    }, [borrowBooks, user?.email])

    const { data: realAllBook, isLoading, isFetching,refetch } = useQuery({
        queryKey: ["deleteBook"],
        queryFn: async () => {

            const data = await fetch('https://a11-kappa.vercel.app/books');
         
            return await data.json();
        }
       
      
    

    })
    // console.log("all book : ",realAllBook)

    if (isLoading) {
        return <p>Loading........</p>
    }

  

    const handleDelete = (_id,bookId) => {
        console.log("delete id :  ", _id);
        console.log("Book id :  ", bookId);
        const hereBook = realAllBook?.filter(item => item._id == bookId)
        console.log("here book : ",hereBook[0])
        let qtob = hereBook[0].quantityOfTheBook;
        console.log("now qtop : " ,qtob);
        let quantityOfTheBook =qtob+1;

       

        const id = _id;

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
                fetch(`https://a11-kappa.vercel.app/borrowBooks/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        

                        console.log("hereBook : ",hereBook);

                       
                        const newProduct = { quantityOfTheBook }

                        if (data.deletedCount > 0) {

                           

                            fetch(`https://a11-kappa.vercel.app/books/${bookId}`, {
                                method: 'PUT',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(newProduct)
                            })
                                .then(res => res.json())
                                .then(data => {
                                  
                                    console.log("update product data : ", data)


                                })

                            

                            Swal.fire(
                                'Deleted!',
                                'Your Book has been deleted.',
                                'success'




                            )
                            // console.log("qtob aga : ", qtob - 1);
                            // // qtob = qtob + 1
                            // console.log("qtob pora : ", qtob);
                            // let quantityOfTheBook = qtob;
                            

                            const remaining = myBorrowBooks.filter(item => item._id !== id)
                            setMyBorrowBooks(remaining)
                           
                        }

                    })

            }
        })

    }



    return (
        <div>
            <p>Borrowed Books  : {myBorrowBooks.length}</p>

            {
                myBorrowBooks.map(myBorrowBook => <BorrowedBookCard key={myBorrowBook._id} myBorrowBook={myBorrowBook} setMyBorrowBooks={setMyBorrowBooks} handleDelete={handleDelete}></BorrowedBookCard>)
            }


        </div>
    );
};

export default BorrowedBooksPage;