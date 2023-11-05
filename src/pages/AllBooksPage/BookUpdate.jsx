/* eslint-disable no-unused-vars */
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";


const BookUpdate = () => {

    const { id } = useParams();

    const { user } = useContext(AuthContext);

    const books = useLoaderData();

    const [nowBook, setNowBook] = useState([]);


    useEffect(() => {
        const rec = books?.filter(item => item._id == id)
        setNowBook(rec)
    }, [books, id])

    console.log(nowBook);


    const [selectedItem, setSelectedItem] = useState('');

    const handleSelectChange = (event) => {
        setSelectedItem(event.target.value);
    }



    const handleUpdate = event => {
        event.preventDefault();

        const form = event.target;

        const userName = form?.userName?.value;
        const userEmail = form?.userEmail?.value;
        const photo = form.photo.value;
        const bookName = form.bookName.value;
        const authorName = form.authorName.value;
        const categoryName = selectedItem;
        const rating = form.rating.value;


        const newProduct = { userName, userEmail, photo, bookName,authorName,categoryName,rating }

        console.log(newProduct);

        fetch(`http://localhost:5000/Books/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log("update product data : ", data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow...',
                        text: 'Product Updated successfully',
                        confirmButtonText: 'cool'

                    })
                }
            })




    }

    return (
        <div>
            <p className="text-5xl font-bold text-center my-[20px] pt-[20px]">Update Book </p>

            <div className="bg-[#EEEEEE] p-10 text-black">


                <form onSubmit={handleUpdate}>


                    {/*User Name  */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='UserName' value={user?.displayName} placeholder="User Name" className="input input-bordered w-full" />
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
                            <input type="text" name='photo'defaultValue={nowBook[0]?.photo} placeholder="Photo URL" className="input input-bordered w-full"  />
                        </label>
                    </div>

                    {/*Book Name */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Book Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='bookName' defaultValue={nowBook[0]?.bookName} placeholder="Book Name" className="input input-bordered w-full"  />
                        </label>
                    </div>

                   

                    {/*Author Name */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='authorName' defaultValue={nowBook[0]?.authorName} placeholder="Author Name" className="input input-bordered w-full"  />
                        </label>
                    </div>



                    {/* Category Name */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <div>
                            <select
                                onChange={handleSelectChange}
                                value={selectedItem}
                                required
                                className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            >
                                <option value="">Select a Category </option>
                                <option value="History">History</option>
                                <option value="Thriller">Thriller</option>
                                <option value="Novel">Novel</option>
                                <option value="Drama">Drama</option>
                                <option value="Sci-Fi">Sci-Fi</option>

                            </select>

                        </div>

                    </div>



                   

                    {/* Rating */}
                    <div className="form-control w-full mb-4">
                        <label className="label">
                            <span className="label-text">Rating </span>
                        </label>
                        <label className="input-group">
                            <input type="number" step="0.1" min="0" max="5" name='rating' defaultValue={nowBook[0]?.rating}placeholder="Rating" className="input input-bordered w-full" required />
                        </label>
                    </div>






                    <input type="submit" value="Add" className="btn btn-block btn-primary mt-[20px]" />


                </form>

            </div>



        </div>
    );
};

export default BookUpdate;