import React from 'react'
import HorizontalScrollCards from './HorizontalScrollCards'

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
                                        <a className="nav-link active" aria-current="page" href="#"><i class="bi bi-person-fill"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <button type="button" class="btn btn-primary position-relative">
                                        <a className="nav-link" href="#"><i class="bi bi-bag"></i></a>
                                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                {/* 99+ */}
                                                <span class="visually-hidden">unread messages</span>
                                            </span>
                                        </button>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#"><i class="bi bi-search"></i></a>
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
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">

                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a class="nav-link active underline-animation" aria-current="page" href="#">Products </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link underline-animation" href="#">Build your own Bundle</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link underline-animation" href="#">Order Tracker</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link underline-animation" href="#">Buy Now</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link underline-animation" href="#">Blog</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link underline-animation" href="#">
                                            Deals</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link underline-animation" href="#">Trimmers</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link underline-animation" href="#">All Products</a>
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
