import React, { Suspense } from 'react'
import Book from '../Book/Book'

const Books = ({data}) => {
    const bookPromise = fetch("/data.json").then(res => res.json())
  return (
    <div className = 'text-3xl text-center p-6'>
      <h1>Books</h1>

      <Suspense fallback = {<span>loading...</span>}>
      {/* <Book data={data}></Book> */}
      <div className="grid grid-cols-1  md:grid-cols-3 gap-20  mx-auto">
{
        data.map((b)=><Book key={b.bookId} b={b}></Book>)
    }
      </div>
    
      </Suspense>
    </div>
  )
}

export default Books
