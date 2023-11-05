/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */


const BorrowedBookCard = ({myBorrowBook}) => {

    const { userName, userEmail, photo, bookName, quantityOfTheBook, authorName, categoryName, rating, borrowDate, returnDate } = myBorrowBook || {}

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl mt-[50px] border-2 text-black">
                <figure><img className="h-[200px] w-full  object-contain" src={photo} alt="Shoes" /></figure>
                <div className="card-body  mt-[20px] ">
                    <h2 className="card-title">Book Name : {bookName}</h2>
                    <h2 className="card-title">Category Name : {categoryName}</h2>
                    <h2 className="card-title">Borrowed Date : {borrowDate}</h2>
                    <h2 className="card-title">Return Date : {returnDate} </h2>
                    
                   
                    <button className="btn btn-primary my-[20px]">DELETE</button>
                   


                </div>
            </div>
        </div>
    );
};

export default BorrowedBookCard;