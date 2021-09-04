import React, { useState } from 'react'
import { books as data } from '../data'
import { Book } from './book'

export const App = () => {
    const [books, setBooks] = useState(data)

    return (
        <>
            <div>
                <h1>Books!</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-4">
                    {books.map((book, idx) => {
                        return <Book key={idx} book={book} />
                    })}
                </div>
            </div>
        </>
    )
}