import './PricingSection.css'
const PricingSection = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="pricing-table gprice-single">
                    <div className="head">
                        <h4 className="title">Basic</h4>
                    </div>
                    <div className="content">
                        <div className="price">
                            <h1>$19</h1>
                        </div>
                        <ul>
                            <li>5 GB Ram</li>
                            <li>40GB SSD Cloud Storage</li>
                            <li>Month Subscription</li>
                            <li>Responsive Framework</li>
                            <li> <del>Monthly Billing Software</del> </li>
                            <li> <del>1 Free Website</del></li>

                        </ul>
                        <div className="sign-up">
                            <a href="#" className="btn bordered radius">Signup Now</a>
                        </div>
                    </div>
                </div>
                <div className="pricing-table gprice-single">
                    <div className="head">
                        <h4 className="title">Standard</h4>
                    </div>
                    <div className="content">
                        <div className="price">
                            <h1>$29</h1>
                        </div>
                        <ul>
                            <li>5 GB Ram</li>
                            <li>40GB SSD Cloud Storage</li>
                            <li>Month Subscription</li>
                            <li>Responsive Framework</li>
                            <li>Monthly Billing Software</li>
                            <li><del>1 Free Website</del></li>

                        </ul>
                        <div className="sign-up">
                            <a href="#" className="btn bordered radius">Signup Now</a>
                        </div>
                    </div>
                </div>
                <div className="pricing-table gprice-single">
                    <div className="head">
                        <h4 className="title">Premium</h4>
                    </div>
                    <div className="content">
                        <div className="price">
                            <h1>$39</h1>
                        </div>
                        <ul>
                            <li>5 GB Ram</li>
                            <li>40GB SSD Cloud Storage</li>
                            <li>Month Subscription</li>
                            <li>Responsive Framework</li>
                            <li>Monthly Billing Software</li>
                            <li>1 Free Website</li>
                        </ul>
                        <div className="sign-up">
                            <a href="#" className="btn bordered radius">Signup Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingSection