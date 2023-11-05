import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const CategoryBookDetails = () => {
    const { _id } = useParams();
    let id = _id;
    console.log(id);

    const books = useLoaderData();

    const [nowBook, setNowBook] = useState();

    useEffect(() => {
        const rec = books?.filter(item => item._id == id)
        setNowBook(rec[0])
    }, [books, id])

    console.log(nowBook);

    const { photo, bookName, quantityOfTheBook, authorName, categoryName, shortDescription, rating } = nowBook || {}

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

                    <Link to={`/categoryBookRead/${_id}`}>
                        <button className="btn btn-primary w-full  mt-[30px]">Read</button>
                    </Link>


                    {/* <Link to={`/categoryBookBorrow/${_id}`}>
                        <button className="btn btn-primary w-full  mt-[15px]">Borrow</button>
                    </Link> */}

                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close Press ESC key or click the button below to close Press ESC key or click the button below to close</p>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <p className="py-4">Press ESC key or click the button below to close</p>
                            <p className="py-4">Press ESC key or click the button below to close</p>
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