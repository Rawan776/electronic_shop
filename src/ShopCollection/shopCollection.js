function shopCollection() {
    return (
        <section className="new-collection">
            <div className="container">
                <div>
                    <h4 className="section-title text-center text-md-start">
                        {" "}
                        Shop Collection
                    </h4>
                </div>
                <div className="row">
                    <div className="category-card-left card card rounded-0 card border-0 col-lg-6 mb-4">
                        <img
                            src="./images/Headband.png"
                            className="card-img rounded-0"
                            alt="Headband"
                        />
                        <div className="card-img-overlay d-flex flex-column justify-content-end ms-5">
                            <h3 className="card-title ">Headband</h3>
                            <div className="btn-left">
                                <a href="#" className="btn btn-medium">
                                    Collection
                                </a>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-arrow-right"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="category-card-right col-lg-6 ">
                        <div className="category-top card card rounded-0 card border-0 mb-4">
                            <img
                                src="./images/Earbuds.png"
                                className="card-img rounded-0"
                                alt="Earbuds"
                            />
                            <div className="card-img-overlay d-flex flex-column justify-content-end ms-5">
                                <h3 className="card-title ">Earbuds</h3>
                                <div className="btn-left">
                                    <a href="#" className="btn btn-medium pe-0">
                                        Collection
                                    </a>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-arrow-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="category-top card card rounded-0 card border-0">
                            <img
                                src="./images/Accessories.png"
                                className="card-img rounded-0"
                                alt="Accessories"
                            />
                            <div className="card-img-overlay d-flex flex-column justify-content-end ms-5">
                                <h3 className="card-title ">Accessories</h3>
                                <div className="btn-left">
                                    <a href="#" className="btn btn-medium pe-0">
                                        Collection
                                    </a>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-arrow-right"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default shopCollection;