function bannerSection() {
    return (
        <section className="banner-title">
            <div className="row me-0 w-100">
                <div className="banner-img col-md-6 col-sm-12 pe-0 order-2 order-md-1">
                    <img
                        src="./images/Image Placeholder.png"
                        className="img-fluid"
                        alt="banner"
                    />
                </div>
                <div className="banner-content d-flex align-items-center col-md-6 col-sm-12 order-1 order-md-2">
                    <div className="banner-text  ms-md-5  m-4">
                        <span className="fw-bold fs-16">PROMOTION</span>
                        <h2 className="fw-medium fs-34">Hurry up! 40% OFF</h2>
                        <p>Thousands of high tech are waiting for you</p>
                        <div className="offer-content my-2">
                            <p className="mb-0">Offer expires in:</p>
                            <div className="countdown d-flex">
                                <div className="timer">
                                    <span className=" num days">02</span>
                                    <div className="text">Days</div>
                                </div>
                                <div className="timer">
                                    <span className=" num hours">12</span>
                                    <div className="text ">Hours</div>
                                </div>
                                <div className="timer">
                                    <span className="num minutes">45</span>
                                    <div className="text">Minutes</div>
                                </div>
                                <div className="timer">
                                    <span className=" num seconds">05</span>
                                    <div className="text">Seconds</div>
                                </div>
                            </div>
                        </div>
                        <a
                            className="btn btn-dark btn-medium px-5 fw-medium"
                            href="#"
                            role="button"
                        >
                            Shop Now
                        </a>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default bannerSection;