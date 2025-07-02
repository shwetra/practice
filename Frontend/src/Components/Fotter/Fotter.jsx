import React from 'react'

import "./Footer.css"
import { Link } from 'react-router-dom';
const Fotter = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 about-footer">
                                <h3>Lorem Ipsum dummy text </h3>
                                <ul>
                                    <li>
                                        <a href="tel:(010) 1234 4321">
                                            <i className="fas fa-phone fa-flip-horizontal" />
                                            (010) 1234 4321
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fas fa-map-marker-alt" />
                                        1 / 105 Bay Lights,
                                        <br />
                                        Lorem Ipsum,
                                        <br />
                                        LIC 3201
                                    </li>
                                </ul>
                                <a href="" className="btn red-btn">
                                    Book Now
                                </a>
                            </div>
                            <div className="col-md-6 col-lg-2 page-more-info">
                                <div className="footer-title">
                                    <h4>Page links</h4>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Testimonial</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-3 page-more-info">
                                <div className="footer-title">
                                    <h4>More Info</h4>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">Lorem ipsum</a>
                                    </li>
                                    <li>
                                        <a href="#">Dolor sit amet</a>
                                    </li>
                                    <li>
                                        <a href="#">Consectetur Adipisicing </a>
                                    </li>
                                    <li>
                                        <a href="#">Ed do eiusmod tempor incididunt</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-4 open-hours">
                                <div className="footer-title">
                                    <h4>Open hours</h4>
                                    <ul className="footer-social">
                                        <li>
                                            <a href="" target="_blank">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="" target="_blank">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <i className="far fa-clock" />
                                                Monday Thursday
                                            </td>
                                            <td>9:00am - 5:00pm</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="far fa-clock" />
                                                Friday
                                            </td>
                                            <td>9:00am - 4:00pm</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="far fa-clock" />
                                                Sturday
                                            </td>
                                            <td>9:00am - 1:30pm</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <i className="far fa-clock" />
                                                Sunday
                                            </td>
                                            <td>9:30am - 12:00pm</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr />
                                <div className="footer-logo">
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer">
                                                        <img className="imgfooter" src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" width="40" />
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                                                        <img className="imgfooter" src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="40" />
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                                                        <img className="imgfooter" src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="40" />
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="mailto:youremail@example.com">
                                                        <img className="imgfooter" src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" width="40" />
                                                    </a>
                                                </td>
                                                <td>
                                                    <a href="tel:+919999999999">
                                                        <img className="imgfooter" src="https://cdn-icons-png.flaticon.com/512/724/724664.png" alt="Call" width="40" />
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-sm-4">
                                <a href="">Privacy policy</a>
                            </div>
                            <div className="col-sm-8">
                                <p>
                                    &copy; {currentYear} All rights reserved by{' '}
                                    <Link to="https://raicoder.com" target="_blank" rel="noopener noreferrer">
                                        Raicoder
                                    </Link>{' '}
                                    &amp;{' '}
                                    <Link to="https://asmessages.com" target="_blank" rel="noopener noreferrer">
                                        Asmessages
                                    </Link>
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Fotter
