function footerSection() {
    return (
        <footer className="bg-dark text-light">
            <div className="container py-4">
                <div className="d-flex flex-column flex-md-row justify-content-between text-center ">
                    <div className="d-flex flex-column flex-md-row">
                        <p className="fs-2">3legant.</p>
                        <div className="vertical-line  d-none d-md-block" />
                        <p className="fs-1.5 mt-4 footer-gray font-family-inter">
                            Headphone Store
                        </p>
                    </div>
                    <div>
                        <ul className="d-flex flex-column flex-md-row list-inline ">
                            <li> Home</li>
                            <li>Shop </li>
                            <li>Product</li>
                            <li> Blog</li>
                            <li> Contact Us</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="d-flex content-lap-mob">
                    {/* <div> */}
                    <p className="footer-gray">
                        Copyright © 2023 3legant. All rights reserved
                    </p>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    {/* </div> */}
                    <div>
                        <img src="./images/instagram.png" />
                        <img src="./images/facebook.png" />
                        <img src="./images/youtube.png" />
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default footerSection;