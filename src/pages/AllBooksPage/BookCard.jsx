/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


import Rating from 'react-rating-stars-component';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";
const starStyles = {
    color: 'transparent',
    WebkitBackgroundClip: 'text',
    background: `linear-gradient(90deg, #FFD700 ${3.8 * 20}%, #fff 0%)`,
};

const BookCard = ({ book }) => {

    const { _id, photo, bookName, authorName, categoryName, rating } = book || {}

    const { isDarkMode, setIsDarkMode } = useContext(AuthContext);


    return (
        <div style={{ background: isDarkMode ? "#45474B" : "white", color: isDarkMode ? "black" : "black" }}>

            <div className="card card-compact  bg-base-100 shadow-xl mt-[50px] space-y-5">
                <figure><img className="h-[200px] w-full object-contain" src={photo} alt="Shoes" /></figure>
                <div className="card-body  pb-[0px]">
                    <h2 className="card-title">Book Name : {bookName}</h2>
                    <h2 className="card-title">Author Name : {authorName}</h2>
                    <h2 className="card-title">Category Name : {categoryName}</h2>
                    {/* <h2 className="card-title">Rating : {rating}</h2> */}

                    <div className='flex  '>
                        <h2 className="card-title pb-[20px] ">Rating : </h2>
                        <div className='mt-[5px] ml-[5px]'>
                            <Rating

                                value={rating}
                                count={5} // Only one star
                                size={24} // Size of the star
                                edit={false} // Disable user interaction
                                isHalf={true} // Enable half-star display
                                emptyIcon={<span style={starStyles}>&#9733;</span>}
                                halfIcon={<span style={starStyles}>&#9733;</span>}
                                fullIcon={<span style={starStyles}>&#9733;</span>}
                            />
                        </div>


                    </div>



                    <Link to={`/bookUpdate/${_id}`}>
                        <button className="btn btn-primary w-full  mt-[30px]">Update</button>
                    </Link>

                </div>
            </div>

        </div>
    );
};

export default BookCard;


{/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {
                            nowBooks?.map(book => <BookCard key={book._id} book={book}></BookCard>)
                        }

                    </div> */}