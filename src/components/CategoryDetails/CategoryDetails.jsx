import { useParams } from "react-router-dom";


const CategoryDetails = () => {

    const {_id}=useParams();
    let categoryName = "";

    if(_id == "65469079b95ec08f6d878730"){
        categoryName = "History"
    }
    
    if(_id == "65469079b95ec08f6d878731"){
        categoryName = "Thriller"
    }
    
    if(_id == "65469079b95ec08f6d878732"){
        categoryName = "Novel"
    }
    
    if(_id == "65469079b95ec08f6d878733"){
        categoryName = "Drama"
    }
    
    if(_id == "65469079b95ec08f6d878734"){
        categoryName = "Sci-Fi"
    }
    
    return (
        <div>
            <p>id: {_id}</p>
            <p className="text-4xl font-bold text-center my-[50px]">{categoryName} Books</p>
           
            
        </div>
    );
};

export default CategoryDetails;