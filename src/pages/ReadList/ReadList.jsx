import React from 'react'
import {getSoteredBook} from '../../utility/adToDb'
import { useLoaderData } from 'react-router'
// import Book from '../../components/Book/Book'
// import Book from '../../components/Book/Book'
import Book from '../Book/Book'


const ReadList = () => {

    const ids = getSoteredBook()
    
    const data = useLoaderData();
    // console.log(data)
    const readBooks = data.filter(d => ids.includes(d.bookId))
console.log(readBooks)
  return (
    <div>
      {
        readBooks.map(book => <Book key={book.bookId} b={book}/> )
      }

    </div>
  )
}

export default ReadList
