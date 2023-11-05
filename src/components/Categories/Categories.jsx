import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";


const Categories = () => {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get('http://localhost:5000/categories')
            .then(data => {
                console.log(data.data)
                setCategories(data.data);
                setIsLoading(false);

            })

    }, [])
    //console.log(categories);

    if (isLoading) {
        return <p>Loading............</p>
    }

    return (
        <div>

            categoryBooks : {categories.length};

            <p className="text-5xl font-bold text-center my-[40px] py-[40px]">Book Category</p>

            <div className="grid  grid-cols-1 lg:grid-cols-3 gap-10 ">

                {
                  categories.map(category => <CategoryCard key={category._id} category={category} ></CategoryCard>)


                }







            </div>



        </div>
    );
};

export default Categories;