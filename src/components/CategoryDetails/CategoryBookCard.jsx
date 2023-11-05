/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const CategoryBookCard = ({ book }) => {

    const { _id, photo, bookName, authorName, categoryName, rating,quantityOfTheBook} = book || {}
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl mt-[50px] space-y-5">
                <figure><img className="h-[200px] w-full object-contain" src={photo} alt="Shoes" /></figure>
                <div className="card-body  pb-[0px]">
                    <h2 className="card-title">Book Name : {bookName}</h2>
                    <h2 className="card-title">Author Name : {authorName}</h2>
                    <h2 className="card-title">Category Name : {categoryName}</h2>
                    <h2 className="card-title">Rating : {rating}</h2>
                    <h2 className="card-title">quantityOfTheBook : {quantityOfTheBook}</h2>


                    <Link to={`/categoryBookDetails/${_id}`}>
                        <button className="btn btn-primary w-full  mt-[30px]">Details</button>
                    </Link>

                   

                </div>
            </div>
        </div>
    );
};

export default CategoryBookCard;