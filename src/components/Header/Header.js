import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg site-navbar navbar-light bg-light" id="pb-navbar">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample09">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#section-home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section-portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section-about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#section-contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className="site-hero" style={{ backgroundImage: 'url(images/sadaf.jpg)' }} id="section-home" data-stellar-background-ratio="0.5">
                <div className="container">
                    <div className="row intro-text align-items-center justify-content-center">
                        <div className="col-md-10 text-center pt-5">
                            <h1 className="site-heading site-animate">
                                Hello, I'm <strong className="d-block">Sadaf Rahman</strong>
                            </h1>
                            <strong className="d-block text-white text-uppercase letter-spacing">and I am a Frontend Developer</strong>
                            <br />
                            <a className="btn btn-primary px-4 py-2 btn-sm smoothscroll" target="_blank" href="https://drive.google.com/file/d/1_6LoCXxDGSi4WXahUs3zXANcagh2ctgk/view?usp=sharing">My
                  Resume</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;