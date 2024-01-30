import React from "react";

function instgramSection() {
    return (
        <React.Fragment>
            <div className="container pb-4">
                <div className="text-center">
                    <p className=" gray-color fs-6">NEWSFEED</p>
                    <p className="display-5 fw-medium">Instagram</p>
                    <p>Follow us on social media for more discount &amp; promotions</p>
                    <p className="gray-color">@3legant_official</p>
                </div>
                <div className="row text-center ">
                    <div className="col-md-3 col-12 mb-3">
                        <img src="./images/instgram-4.png" className="img-fluid" alt="Image 1" />
                    </div>
                    <div className="col-md-3 col-12 mb-3">
                        <img src="./images/instagram-1.png" className="img-fluid" alt="Image 2" />
                    </div>
                    <div className="col-md-3 col-12 mb-3">
                        <img src="./images/instgram-2.png" className="img-fluid" alt="Image 3" />
                    </div>
                    <div className="col-md-3 col-12 mb-3">
                        <img src="./images/instgram-3.png" className="img-fluid" alt="Image 4" />
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}
export default instgramSection;