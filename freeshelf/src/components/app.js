import React, { useState } from 'react'
import { books as data } from '../data'
import { Book } from './book'

export const App = () => {
    const [books, setBooks] = useState(data)

    return (
        <>
            <div>
                <h1>Books!</h1>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {books.map((book) => {
                        return <Book book={book} />
                    })}
                </div>
            </div>
        </>
    )
}