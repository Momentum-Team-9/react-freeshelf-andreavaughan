import React, { useState } from 'react'
import '../index.css'



export const Book = ({ book }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className="col Book">
            <div className="card mb-3">
                <div className="card-header">
                    <h3 className="card-title">{ book.title }</h3>
                    <h5 className="card-text">{ book.author }</h5>
                </div>
                <div className="row card-body">
                    <div className="col-md-8">
                        <div>
                            <p className="card-text">{ book.shortDescription }</p>
                            { isExpanded ? 
                                <button className="btn btn-primary bi bi-caret-up-fill" onClick={handleExpanded} aria-expanded="true" aria-controls="expanded-div">
                                Show Less </button> :
                                <button className="btn btn-success bi bi-caret-down-fill" onClick={handleExpanded} aria-expanded="false" aria-controls="expanded-div">
                                Show More</button>
                            }
                            { isExpanded &&
                                <div className="expanded-div">
                                    <p><a href={ book.url } target="_blank" rel="noopener noreferrer">Link to URL</a></p>
                                    { book.publisher ? <p>Publisher: { book.publisher }</p> : <p></p>}
                                    { book.publicationDate ? <p>Published: { book.publicationDate }</p> : <p></p>}
                                    <p>{ book.detailedDescription }</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={ book.coverImageUrl } className="img-fluid" alt={ book.title } />
                    </div>
                </div>
            </div>
        </div>
    )
}