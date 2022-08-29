import './Footer.css'
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-left col-md-4 col-sm-6">
                    <p className="about">
                        <span> About the company</span> 
                        dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text 
                        ever since the 1500s, when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also 
                    </p>
                    <div className="icons">
                        <a href="#"><i className="fa fa-facebook"></i></a>
                        <a href="#"><i className="fa fa-twitter"></i></a>
                        <a href="#"><i className="fa fa-linkedin"></i></a>
                        <a href="#"><i className="fa fa-google-plus"></i></a>
                        <a href="#"><i className="fa fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-center col-md-4 col-sm-6">
                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span> Street name and number</span> City, Country</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p> (+00) 0000 000 000</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="#"> office@company.com</a></p>
                    </div>
                </div>
                <div className="footer-right col-md-4 col-sm-6">
                    <h2> Company<span> logo</span></h2>
                    <p className="menu">
                        <a href="/"> Main</a> |
                        <a href="employees"> Employees</a> |
                        <a href="#"> Feedback</a> 
                  
                    </p>
                    <p className="name"> Company Name &copy; 2022</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer