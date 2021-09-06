import React, { useState } from 'react'
import { books as data } from '../data'
import { Book } from './book'

export const App = () => {
    const [books] = useState(data)

    return (
        <>
            <div>
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Books</a>
                    </div>
                </nav>
                <div className="row row-cols-1 row-cols-xxl-2">
                    {books.map((book, idx) => {
                        return <Book key={idx} book={book} />
                    })}
                </div>
            </div>
        </>
    )
}