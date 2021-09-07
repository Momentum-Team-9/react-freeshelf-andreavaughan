import React, { useState } from 'react'
import { books as data } from '../data'
import { Book } from './book'
import '../index.css'

export const App = () => {
    const [books] = useState(data)

    return (
        <>
            <div>
                <nav className="Nav navbar navbar-light">
                    <div className="container-fluid">
                        <h1>Books</h1>
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