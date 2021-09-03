import React, { useState } from 'react'
import { books as data } from './data'


export const Book = ({ book }) => {
    
    return (
        <div class="col">
            <div className="card mb-3" style={{maxWidth: 540}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="#" className="img-fluid rounded-start"></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{ book.title }</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


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