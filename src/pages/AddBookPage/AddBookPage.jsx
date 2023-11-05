import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const AddBookPage = () => {

    const { user } = useContext(AuthContext);

    const [selectedItem, setSelectedItem] = useState('');

    const handleSelectChange = (event) => {
        setSelectedItem(event.target.value);
    }

    const handleAdd = event => {
        event.preventDefault();

        const form = event.target;

        const userName = form?.userName?.value||"";
        const userEmail = form?.userEmail?.value||"";
        const photo = form.photo.value||"";
        const bookName = form.bookName.value||"";
        const quantityOfTheBook = form.quantityOfTheBook.value||"";
        const authorName = form.authorName.value||"";
        const categoryName = selectedItem||"";
        const shortDescription = form.shortDescription.value||"";
        const rating = form.rating.value||"";


        const newBook = { userName, userEmail, photo, bookName, quantityOfTheBook,authorName,categoryName, shortDescription, rating }

        console.log(newBook);



        fetch('http://localhost:5000/books', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log("add  : ", data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Wow...',
                        text: 'Book add successfully',

                    })
                }
            })
    }

    
    return (
        <div>
            <div>
                <p className="text-5xl font-bold text-center my-[30px] pt-[20px]">Add Book</p>

                <div className="bg-[#EEEEEE] p-10 text-black">


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
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full" required />
                            </label>
                        </div>

                        {/*Book Name */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Book Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='bookName' placeholder="Book Name" className="input input-bordered w-full" required />
                            </label>
                        </div>

                        {/* Quantity of the book */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text"> Quantity of the book</span>
                            </label>
                            <label className="input-group">
                                <input type="number" name='quantityOfTheBook' placeholder=" Quantity of the book" className="input input-bordered w-full" required />
                            </label>
                        </div>

                        {/*Author Name */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Author Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name='authorName' placeholder="Author Name" className="input input-bordered w-full" required />
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



                        {/* Short description */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Short description </span>
                            </label>
                            <label className="input-group text-are">
                                <input type="text" name='shortDescription' placeholder="Short description " className="input input-bordered w-full" required />
                            </label>
                        </div>


                        {/* Rating */}
                        <div className="form-control w-full mb-4">
                            <label className="label">
                                <span className="label-text">Rating </span>
                            </label>
                            <label className="input-group">
                                <input type="number" step="0.1" min="0" max="5" name='rating' placeholder="Rating" className="input input-bordered w-full" required />
                            </label>
                        </div>






                        <input type="submit" value="Add" className="btn btn-block btn-primary mt-[20px]" />


                    </form>

                </div>


            </div>
        </div>
    );
};

export default AddBookPage;