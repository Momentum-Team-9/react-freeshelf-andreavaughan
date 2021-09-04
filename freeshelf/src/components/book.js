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
                </div>
                <div className="row g-0 card-body">
                    <div className="col-md-4">
                        <img src={ book.coverImageUrl } className="img-fluid rounded-start" alt={book.title} />
                    </div>
                    <div className="col-md-8">
                        <div>
                            <h5 className="card-text">{ book.author }</h5>
                            <p className="card-text">{ book.shortDescription }</p>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    { isExpanded ? 
                        <button className="btn btn-primary" onClick={handleExpanded} aria-expanded="false" aria-controls="collapseExample">
                        Show Less </button> :
                        <button className="btn btn-primary" onClick={handleExpanded} aria-expanded="false" aria-controls="collapseExample">
                        Show More </button>
                    }
                    { isExpanded &&
                        <div>
                        Some placeholder content for the collapse component.
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}