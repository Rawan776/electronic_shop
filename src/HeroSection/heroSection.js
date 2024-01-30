function heroSection() {

    return (
        <section className="hero">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-sm-12 col-md-7 order-2 order-md-1">
                        <img
                            src="./images/hero-image.png"
                            className="hero-screen-img"
                            alt="hero-screen image"
                        />
                    </div>
                    <div className="col-sm-12 col-md-4 order-1 order-md-2 text-center text-md-start">
                        <h2>
                            <div className="display-3 fw-medium  ">
                                {" "}
                                Listen to <br /> the <span>amazing</span>
                                <br /> music sound.
                            </div>
                        </h2>
                        <div className="pb-4 fs-25 fw-medium">
                            Experience music like never before
                        </div>
                        <a
                            href="#shop-now"
                            className="btn btn-dark btn-md px-5 fs-18 fw-medium"
                        >
                            Shopping Now
                        </a>
                    </div>
                </div>
            </div>
        </section>




    );
}

export default heroSection;