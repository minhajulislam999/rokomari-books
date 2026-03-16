import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addToStoredDb, addToWishlist } from '../../utility/adToDb';

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id)
    const data = useLoaderData();
    const singleBook = data.find(book=>book.bookId===bookId);
    const {bookName, image} = singleBook;

    const handleMarkAsread = id => {


        //store with id
        //where to store
        //array or collection
        //if book already exist the show a alart
        //it book not exist then push in the collection ar array

addToStoredDb(id)


    }

    const handleWish = (id) =>{
      addToWishlist(id);
    }
  return (
    <div className=' w-2/3'>
      <img src = {image}></img>
      <h5>{bookName}</h5>
      <button onClick={()=>handleMarkAsread(bookId)} className="btn btn-accent">Mark as Read</button>
<button onClick={()=>handleWish(bookId)}  className="btn btn-info">WishList</button>
    </div>
  )
}

export default BookDetails
