import React from 'react';

const Footer = () => {
    return (
        <div>
            <section className="site-section" id="section-contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5">
                            <div className="section-heading text-center">
                                <h2>Get <strong style={{ color: '#BCCA68' }}>In Touch</strong></h2>
                            </div>
                        </div>
                        <div className="col-md-12 pl-md-12 d-flex justify-content-center">
                            <ul className="site-contact-details">
                                <li>
                                    <span className="text-uppercase">Email</span>
                    rahmansadaf46@gmail.com
                  </li>
                                <li>
                                    <span className="text-uppercase">Phone</span>
                    +880 163 065 7735
                  </li>
                                <li>
                                    <span className="text-uppercase">Address</span>
                    171/1, Kathal Bagan<br />
                    Dhaka-1205<br />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="site-footer">
                <div className="container">
                    <div className="row mb-5">
                        <p className="col-12 text-center">
                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright © 2021 All rights reserved | Sadaf Rahman
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        </p>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-12 text-center">
                            <p>
                                <a target="_blank" href="https://www.facebook.com/syloxlr" className="social-item"><span className="icon-facebook2" /></a>
                                <a target="_blank" href="https://github.com/rahmansadaf46" className="social-item"><span className="icon-github2" /></a>
                                <a target="_blank" href="https://www.linkedin.com/in/md-sadaf-rahman-3695a21b1/" className="social-item"><span className="icon-linkedin2" /></a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;