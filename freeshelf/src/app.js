import React, { useState } from 'react'
import { books as data } from './data'

export const Book = ({ title }) => {
    const [books, viewBooks] = useState(data)
    
    return (
        <div>
            <header>
                <h2>{ title }</h2>
            </header>
        </div>
    )
}


export const App = () => {
    const [books, viewBooks] = useState(data)

    return (
        <>
            <div>
                <h1>Books!</h1>
                <div>
                    {books.map((book, idx) => {
                        return <Book key={idx} title={book.title} />
                    })}
                </div>
            </div>
        </>
    )
}