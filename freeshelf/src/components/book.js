import React, { useState, useEffect } from 'react'
import { Collapse } from 'bootstrap'

export const Book = ({ book }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    useEffect(() => {
        let myCollapse = document.getElementById('collapseTarget')
        let bsCollapse = new Collapse(myCollapse, {isExpanded: false})
        isExpanded ? bsCollapse.show() : bsCollapse.hide()
    })

    

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
                    <button className="btn btn-primary" onClick={() => setIsExpanded(isExpanded => !isExpanded)} aria-expanded="false" aria-controls="collapseExample">
                        Example
                    </button>
                    <div className="collapse" id="collapseTarget">
                        Some placeholder content for the collapse component.
                    </div>
                </div>
            </div>
        </div>
    )
}