/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const CategoryCard = ({ category }) => {

    const { _id, categoryName,categoryLogo } = category || {};

    const { isDarkMode } = useContext(AuthContext);
    return (
        <div>

            <div className="card card-compact bg-base-100 shadow-xl mt-[30px]" style={{ background: isDarkMode ? "#2C3333" : "white", color: isDarkMode ? "white" : "black" }}>
                <figure><img className="h-[200px] w-full object-contain" src={categoryLogo} alt="Shoes" /></figure>
                <div className="card-body" style={{ background: isDarkMode ? "#3C4048" : "white", color: isDarkMode ? "white" : "black" }}>
                    {/* <h2 className="card-title">id: {id}</h2> */}

                    <p className="text-[25px] font-bold mt-[25px] mb-[25px] text-center">Category : {categoryName} </p>

                    <Link to={`/categoryDetails/${_id}`}>
                        <button className="btn btn-primary mt-[15px] mb-[20px] w-full">See Detail</button>
                    </Link>


                </div>
            </div>

        </div>
    );
};

export default CategoryCard;