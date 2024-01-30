import React from 'react';
import { NavLink } from 'react-router-dom';
import Dashboard from './Dashboard';
function Navbar_main() {

    return (
            <nav className="nav-main navbar navbar-expand-md">
                <div className="container">
                    <span className="navbar-brand mt-2 h4 fw-bold order-2 order-md-0">
                        3legant.
                    </span>
                    {/*for mobile view*/}
                    <button
                        className="navbar-toggler order-1 me-2 collapsed"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="sideBar offcanvas offcanvas-start"
                        tabIndex={-1}
                        id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel"
                    >
                        <div className="offcanvas-header">
                            <h5
                                className="offcanvas-title fs-3 fw-bold ps-4"
                                id="offcanvasExampleLabel"
                            >
                                3legant.
                            </h5>
                            <button
                                type="button"
                                className="btn-close text-reset"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            />
                        </div>
                        <div className="offcanvas-body justify-content-center">
                            <ul className="navbar-nav align-items-center">
                            <li className="nav-item">
                                    <NavLink className="nav-link custom-font-family  py-2" to="/Dashboard" >
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link custom-font-family  py-2" to="/">
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink
                                        className="nav-link custom-font-family  dropdown-toggle py-2"
                                        to="/"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >
                                        Shop
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <NavLink
                                        className="nav-link custom-font-family dropdown-toggle py-2"
                                        to="/"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >
                                        Produt
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link custom-font-family py-2" to="/">
                                        Contact Us
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <ul className="navbar-nav ms-auto order-3">
                        <li className="nav-icon">
                            <a className="nav-link d-none d-md-inline" href="#">
                                {" "}
                                <img src="./images/search-icon.png" alt="search icon" />
                            </a>
                        </li>
                        <li className="nav-icon">
                            <a className="nav-link d-none d-md-inline" href="#">
                                {" "}
                                <img src="./images/profile-icon.png" alt="profile icon" />
                            </a>
                        </li>
                        <li className="nav-icon">
                            <a className="nav-link " href="#">
                                {" "}
                                <img src="./images/Cart-Button.png" alt="cart button" />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
    );
}

export default Navbar_main;