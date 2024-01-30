//will be dynamic using api to get images and add div according to number of element in api
function bestSeller() {
    return (
        <section className="best-seller">
            <div className="container">
                <div>
                    <h4 className="section-title text-center text-md-start">Best Seller</h4>
                </div>
                <div className="row mb-5">
                    <div className="col-6 col-md-3 ">
                        <div className="card card rounded-0 card border-0">
                            <img
                                src="images/best-seller/Sony - WH-1000XM5 Wireless Noise Canceling.png"
                                className="card-img"
                                alt="Sony "
                            />
                            <div className="custom-hot-text">Hot</div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Sony - WH-1000XM5 Wireless Noise Canceling
                                </h5>
                                <p className="card-text">$299.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="card card rounded-0 card border-0">
                            <img
                                src="images/best-seller/Beats.png"
                                className="card-img-top"
                                alt="Beats
            Studio Pro "
                            />
                            <div className="custom-hot-text">Hot</div>
                            <div className="card-body">
                                <h5 className="card-title">Beats Studio Pro</h5>
                                <p className="card-text">$349.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 ">
                        <div className="card card rounded-0 card border-0">
                            <img
                                src="images/best-seller/Sony - WH-CH720N Wireless Noise Canceling.png"
                                className="card-img-top"
                                alt="Sony - WH-CH720N Wireless Noise Canceling "
                            />
                            <div className="custom-hot-text">Hot</div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Sony - WH-CH720N Wireless Noise Canceling
                                </h5>
                                <p className="card-text">$149.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 ">
                        <div className="card card rounded-0 card border-0">
                            <img
                                src="images/best-seller/Skullcandy - Rail True Wireless Earbuds.png"
                                className="card-img-top"
                                alt="Skullcandy - Rail True Wireless Earbuds "
                            />
                            <div className="custom-hot-text">Hot</div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    Skullcandy - Rail True Wireless Earbuds
                                </h5>
                                <p className="card-text">$79.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 ">
                        <div className="card card rounded-0 card border-0">
                            <img
                                src="images/best-seller/Beats1.png"
                                className="card-img-top"
                                alt="Beats 
            Studio Pro "
                            />
                            <div className="custom-hot-text">Hot</div>
                            <div className="card-body">
                                <h5 className="card-title">Beats Studio Pro</h5>
                                <p className="card-text">$249.99</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 ">
                        <div className="card card rounded-0 card border-0">
                            <img
                                src="images/best-seller/JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports.png"
                                className="card-img-top"
                                alt="JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports "
                            />
                            <div className="custom-hot-text">Hot</div>
                            <div className="card-body">
                                <h5 className="card-title">
                                    JBL Reflect Flow Pro+ Bluetooth Truly Wireless Sports
                                </h5>
                                <p className="card-text">$179.95</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 ">
                        <div className="card card rounded-0 card border-0">
                            <img
                                src="images/best-seller/Bose.png"
                                className="card-img-top"
                                alt="Bose
            QuietComfort Headphones "
                            />
                            <div className="custom-hot-text">Hot</div>
                            <div className="card-body">
                                <h5 className="card-title">Bose QuietComfort Headphones</h5>
                                <p className="card-text">$349.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3 ">
                        <div className="card card rounded-0 card border-0">
                            <img
                                src="images/best-seller/AKG.png"
                                className="card-img-top"
                                alt="AKG
            Y600NC Wireless "
                            />
                            <div className="custom-hot-text">Hot</div>
                            <div className="card-body">
                                <h5 className="card-title">AKG Y600NC Wireless</h5>
                                <p className="card-text">$349.99</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default bestSeller;