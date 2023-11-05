import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CategoryBookCard from "./CategoryBookCard";


const CategoryDetails = () => {

    const { _id } = useParams();
    let categoryName = "";

    if (_id == "65469079b95ec08f6d878730") {
        categoryName = "History"
    }

    if (_id == "65469079b95ec08f6d878731") {
        categoryName = "Thriller"
    }

    if (_id == "65469079b95ec08f6d878732") {
        categoryName = "Novel"
    }

    if (_id == "65469079b95ec08f6d878733") {
        categoryName = "Drama"
    }

    if (_id == "65469079b95ec08f6d878734") {
        categoryName = "Sci-Fi"
    }

    const [myCategory, setMyCategory] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const url = `http://localhost:5000/booksByCategory?categoryName=${categoryName}`

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setMyCategory(res.data);
                setIsLoading(false)
                console.log(res.data);
            })

    }, [url])

    if (isLoading) {
        return <p>Loading.................</p>
    }

    //console.log(myCategory);

    return (
        <div>
            <p>id: {_id}</p>
            <p className="text-4xl font-bold text-center my-[50px]">{categoryName} Books</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    myCategory.map(book => <CategoryBookCard key={book._id} book={book}></CategoryBookCard>)

                }
            </div>


        </div>
    );
};

export default CategoryDetails;