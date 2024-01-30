function valueSection() {
    return (
        <section className="values mb-5 mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-6 col-md-3">
                        <div className="card card border-0 mb-3 cust-min-width">
                            <div className="card-body p-4">
                                <img src="images/fast delivery.png" alt="fast delivery" />
                                <h5 className="card-title pt-2">Free Shipping</h5>
                                <p className="card-text gray-color">Order above $200</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="card card border-0 mb-3 cust-min-width">
                            <div className="card-body p-4">
                                <img src="images/money.png" alt="Money-back" />
                                <h5 className="card-title pt-2">Money-back</h5>
                                <p className="card-text gray-color">30 days guarantee</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="card card border-0 mb-3 cust-min-width">
                            <div className="card-body p-4">
                                <img src="images/security.png" alt="security" />
                                <h5 className="card-title pt-2">Secure Payments</h5>
                                <p className="card-text gray-color">Secured by Stripe</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-3">
                        <div className="card card border-0 mb-3 cust-min-width">
                            <div className="card-body p-4">
                                <img src="images/call.png" alt="call-icon" />
                                <h5 className="card-title pt-2">24/7 Support</h5>
                                <p className="card-text gray-color">Phone and Email support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default valueSection;