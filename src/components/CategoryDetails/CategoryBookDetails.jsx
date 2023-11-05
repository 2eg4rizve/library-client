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

    const {photo,bookName,quantityOfTheBook,authorName,categoryName,shortDescription,rating}=nowBook||{}

    return (
        <div>
            <p>category Book Details</p>
            <p>id : {id}</p>

            <div className="card card-compact bg-base-100 shadow-xl mt-[50px] border-2 text-black">
                <figure><img className="h-[300px] w-full  object-contain" src={photo} alt="Shoes" /></figure>
                <div className="card-body  mt-[20px] ">
                    <h2 className="card-title">bookName : {bookName}</h2>
                    <h2 className="card-title">quantityOfTheBook : {quantityOfTheBook}</h2>
                    <h2 className="card-title">authorName : {authorName}</h2>
                    <h2 className="card-title">categoryName : {categoryName}</h2>
                    <h2 className="card-title">Description : {shortDescription} </h2>

                    <h2 className="card-title pb-[20px]">Rating : {rating} / 5</h2>

                    <Link to={`/categoryBookRead/${_id}`}>
                        <button className="btn btn-primary w-full  mt-[30px]">Read</button>
                    </Link>

                    <button className="btn btn-primary mb-[10px]">Borrow</button>

                </div>
               
            </div>
        </div>
    );
};

export default CategoryBookDetails;