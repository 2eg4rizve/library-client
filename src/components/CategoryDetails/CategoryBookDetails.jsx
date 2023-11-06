/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";



const CategoryBookDetails = () => {



    const { _id } = useParams();
    let id = _id;
    //console.log(id);

    // let books = useLoaderData();

    // const [nowBook, setNowBook] = useState();

    const { user } = useContext(AuthContext);


    // useEffect(() => {
    //     const rec = books?.filter(item => item._id == id)
    //     setNowBook(rec[0])
    // }, [books, id])

    // const URL = 'http://localhost:5000/books'

    const { data: nowBook, isLoading, isFetching,refetch } = useQuery({
        queryKey: ["xyz"],
        queryFn: async () => {

            const data = await fetch(`http://localhost:5000/books/${_id}`);
         
            return await data.json();
        }
       
      
    

    })

    // const { refetch } = useQuery(["xyz"]);

    if (isLoading) {
        return <p>Loading........</p>
    }

    console.log("nowBook : ", nowBook);

  
    // const rec = books?.filter(item => item._id == id)
    //     setNowBook(rec[0])


    //console.log(nowBook);

    const { photo, bookName, quantityOfTheBook, authorName, categoryName, shortDescription, rating } = nowBook || {}

    const currentDate = new Date();

    // Format the date as 'YYYY-MM-DD'
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    // console.log(formattedDate)


    let qtob = quantityOfTheBook;
    let cn = categoryName;


    




    const handleAdd = event => {
        event.preventDefault();

        const form = event.target;

        const userName = form?.userName?.value;
        const userEmail = form?.userEmail?.value;
        const photo = form.photo.value;
        const bookName = form.bookName.value;
        const quantityOfTheBook = qtob;
        const authorName = form.authorName.value;
        const categoryName = cn;
        const bookId = form.bookId.value;
        const rating = form.rating.value;
        const borrowDate = formattedDate;
        const returnDate = form.returnDate.value;

        // console.log("currentDate : ", formattedDate);
        // console.log("returnDate : ", returnDate);

       



        const newBook = { userName, userEmail, photo, bookName, quantityOfTheBook, authorName, categoryName,bookId, rating, borrowDate, returnDate }

        console.log("Borrow book details : ",newBook);

        console.log("bookId : ",bookId)



        fetch('http://localhost:5000/borrowBooks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => {
                // console.log("add  : ", data)
              
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Thanks...',
                        text: 'Book Borrow successfully',




                    })
                }
                console.log("aga : ", qtob);
                qtob = qtob - 1
                let quantityOfTheBook = qtob;

               
                


                console.log("akon : ", quantityOfTheBook);

                const newProduct = { quantityOfTheBook }

             

                fetch(`http://localhost:5000/books/${id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newProduct)
                })
                    .then(res => res.json())
                    .then(data => {
                        refetch();
                        //console.log("update product data : ", data)
                        
                       
                    })
                  

            })

           
           



    }





    return (
        <div>
            <p>category Book Details</p>
            <p>id : {id}</p>



            <div className="card card-compact bg-base-100 shadow-xl mt-[50px] border-2 text-black">
                <figure><img className="h-[300px] w-full  object-contain" src={photo} alt="Shoes" /></figure>
                <div className="card-body  mt-[20px] ">
                    <h2 className="card-title">Book Name : {bookName}</h2>
                    <h2 className="card-title">Quantity Of The Book : {quantityOfTheBook}</h2>
                    <h2 className="card-title">Author Name : {authorName}</h2>
                    <h2 className="card-title">Category Name : {categoryName}</h2>
                    <h2 className="card-title">Description : {shortDescription} </h2>

                    <h2 className="card-title pb-[20px]">Rating : {rating} / 5</h2>

                    <h2 className="card-title pb-[20px]">quantityOfTheBook : {qtob}</h2>

                    <Link to={`/categoryBookRead/${_id}`}>
                        <button className="btn btn-primary w-full  mt-[30px] mb-[10px]">Read</button>
                    </Link>


                    {/* <Link to={`/categoryBookBorrow/${_id}`}>
                        <button className="btn btn-primary w-full  mt-[15px]">Borrow</button>
                    </Link> */}

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">

                            <h3 className="font-bold text-lg">Hello!</h3>

                            <form onSubmit={handleAdd}>


                                {/*User Name  */}
                                <div className="form-control w-full mb-4">
                                    <label className="label">
                                        <span className="label-text">User Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='userName' value={user?.displayName} placeholder="User Name" className="input input-bordered w-full" />
                                    </label>
                                </div>

                                {/*User Email  */}
                                <div className="form-control w-full mb-4">
                                    <label className="label">
                                        <span className="label-text">User Email</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='userEmail' value={user?.email} placeholder="User Name" className="input input-bordered w-full" />
                                    </label>
                                </div>



                                {/* Photo */}
                                <div className="form-control w-full mb-4">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='photo' value={photo} placeholder="Photo URL" className="input input-bordered w-full" />
                                    </label>
                                </div>

                                {/*Book Name */}
                                <div className="form-control w-full mb-4">
                                    <label className="label">
                                        <span className="label-text">Book Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='bookName' value={bookName} placeholder="Book Name" className="input input-bordered w-full" required />
                                    </label>
                                </div>



                                {/*Author Name */}
                                <div className="form-control w-full mb-4">
                                    <label className="label">
                                        <span className="label-text">Author Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='authorName' value={authorName} placeholder="Author Name" className="input input-bordered w-full" required />
                                    </label>
                                </div>


                                {/*Category Name */}
                                <div className="form-control w-full mb-4">
                                    <label className="label">
                                        <span className="label-text">Category Name</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='categoryName' value={categoryName} placeholder="Category Name" className="input input-bordered w-full" required />
                                    </label>
                                </div>

                                 {/*Book Id */}
                                 <div className="form-control w-full mb-4">
                                    <label className="label">
                                        <span className="label-text">Book ID</span>
                                    </label>
                                    <label className="input-group">
                                        <input type="text" name='bookId' value={id} placeholder="Category Name" className="input input-bordered w-full" required />
                                    </label>
                                </div>




                                {/* Rating */}
                                <div className="form-control w-full mb-4">
                                    <label className="label">
                                        <span className="label-text">Rating </span>
                                    </label>
                                    <label className="input-group">
                                        <input type="number" name='rating' value={rating} placeholder="Rating" className="input input-bordered w-full" required />
                                    </label>
                                </div>


                                {/* Borrow date */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Borrow date</span>
                                    </label>
                                    <input type="date" name="borrowDate" value={formattedDate} className="input input-bordered" required />

                                </div>


                                {/* Return Date */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Return Date</span>
                                    </label>
                                    <input type="date" name="returnDate" className="input input-bordered" required />

                                </div>



                                <input type="submit" value="Add" className="btn btn-block btn-primary mt-[20px]" />


                            </form>





                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>



                </div>

            </div>
        </div>
    );
};

export default CategoryBookDetails;