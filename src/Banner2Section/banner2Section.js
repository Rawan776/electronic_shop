function banner2Section() {
    return (
        <section className="banner2-section">
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-md-3 d-none d-lg-inline">
                        <img src="./images/bannet-left.png" />
                    </div>
                    <div className="col-12 col-md-6 my-auto">
                        <div className="join-content text-center">
                            <p className="fs-2 fw-medium">Join Our Newsletter</p>
                            <p>Sign up for deals, new products and promotions</p>
                            <div className="input-group custom-border-bottom  mb-3">
                                <span
                                    className="input-group-text bg-transparent border-0"
                                    id="basic-addon1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={16}
                                        height={16}
                                        fill="currentColor"
                                        className="bi bi-envelope"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                    </svg>
                                </span>
                                <input
                                    type="email"
                                    className="form-control ps-2 bg-transparent border-0"
                                    placeholder="Email address"
                                    aria-label="Email"
                                    aria-describedby="basic-addon1"
                                />
                                <button className="btn gray-color border-0" type="button">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 d-none d-lg-inline">
                        <img src="./images/banner-right.png" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default banner2Section;