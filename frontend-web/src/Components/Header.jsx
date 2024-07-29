import React from 'react'
import HorizontalScrollCards from './HorizontalScrollCards'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className="top-strip">
                <div className="inner-strip ">
                    <p><i className="bi bi-megaphone"></i> Free Shipping Over Rs 1,999!| Delivery Time: 5 to 7 days <a href="">Buy Now</a></p>
                </div>
            </div>
            {/* top-strip */}

            <div className="nav-main">
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#"><img src="\public\logo darimuch.webp" alt="" className='img' /></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#"><i className="bi bi-person-fill"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" className="btn btn-primary position-relative">
                                        <a className="nav-link" href="#"><i className="bi bi-bag"></i></a>
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                {/* 99+ */}
                                                <span className="visually-hidden">unread messages</span>
                                            </span>
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i className="bi bi-search"></i></a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* nav-main */}

            <div id="navbar-wrapper">
                <div className="inner-navbar">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                    <Link to="/Products" className='underline-animation link'>Products</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/Hair" className='underline-animation link'>Hair</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/Trackorder" className='underline-animation link'>Track Order</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/Products" className='underline-animation link'>Buy Now</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/Trimmer" className='underline-animation link'>Trimmer</Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to="/Trimmer" className='underline-animation link'>All Products</Link>

                                    </li>
                                    <li className="nav-item">
                                    <Link to="/Contact" className='underline-animation link'>Contact</Link>
                                    </li>
                                  
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <HorizontalScrollCards />
        </>
    )
}

export default Header
