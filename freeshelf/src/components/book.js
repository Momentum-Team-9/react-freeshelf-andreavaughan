
export const Book = ({ book }) => {
    console.log(book.coverImageUrl)


    return (
        <div className="col">
            <div className="card mb-3" style={{maxWidth: 540}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ book.coverImageUrl } className="img-fluid rounded-start"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title">{ book.title }</h4>
                            <h5 className="card-text">{ book.author }</h5>
                            <p className="card-text">{ book.shortDescription }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}