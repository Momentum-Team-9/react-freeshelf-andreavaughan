import React, { useState } from 'react'

export const Book = ({ book }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <div className="col">
            <div className="card mb-3 h-100">
                <div className="card-header">
                    <h4 className="card-title">{ book.title }</h4>
                    <h5 className="card-text">{ book.author }</h5>
                </div>
                <div className="row card-body">
                    <div className="col-md-8">
                        <div>
                            <p className="card-text">{ book.shortDescription }</p>
                            { isExpanded ? 
                                <button className="btn btn-primary" onClick={handleExpanded} aria-expanded="false" aria-controls="collapseExample">
                                Show Less </button> :
                                <button className="btn btn-primary" onClick={handleExpanded} aria-expanded="false" aria-controls="collapseExample">
                                Show More </button>
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