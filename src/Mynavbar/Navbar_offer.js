import React from 'react';
//import { Button, Navbar, nav } from 'react-bootstrap';

function Navbar_offer() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container justify-content-center">
                    <div className="nav-content">
                        <a className="navbar-brand" href="#">
                        <img src="./images/ticket-percent.png" alt="right arrow icon" />
                        </a>
                        <span className="text-light me-3 pt-1">
                            30% off storewide — Limited time!{" "}
                        </span>
                        <a
                            href="#"
                            className="btn custom-text-color btn-sm border-0 border rounded-0 d-none d-md-inline p-0 fw-medium"
                        >
                            Shop Now <img src="./images/arrow-right.png" alt="right arrow icon" />
                        </a>
                        <span className=" close-icon d-lg-none d-inline">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={16}
                                height={16}
                                fill="currentColor"
                                className="bi bi-x-lg"
                                viewBox="0 0 16 16"
                            >
                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </nav>
        </React.Fragment>

    );
}


export default Navbar_offer;