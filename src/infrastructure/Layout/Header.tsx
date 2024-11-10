import React from 'react'
import "../../assets/css/style.css"
const HeaderClient = () => {
    return (
        <div>
            <div className="site-mobile-menu site-navbar-target">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close mt-3">
                        <span className="icon-close2 js-menu-toggle"></span>
                    </div>
                </div>
                <div className="site-mobile-menu-body"></div>
            </div>

            <div className="top-bar">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <a href="#" className=""><span className="mr-2 icon-envelope-open-o"></span> <span className="d-none d-md-inline-block">info@yourdomain.com</span></a>
                            <span className="mx-md-2 d-inline-block"></span>
                            <a href="#" className=""><span className="mr-2 icon-phone"></span> <span className="d-none d-md-inline-block">1+ (234) 5678 9101</span></a>

                            <div className="float-right">
                                <a href="#" className=""><span className="mr-2 icon-twitter"></span> <span className="d-none d-md-inline-block">Twitter</span></a>
                                <span className="mx-md-2 d-inline-block"></span>
                                <a href="#" className=""><span className="mr-2 icon-facebook"></span> <span className="d-none d-md-inline-block">Facebook</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
                <div className="container">
                    <div className="row align-items-center justify-content-between position-relative py-2">
                        <div className="site-logo col-2">
                            <a href="index.html" className="text-black"><span className="text-primary">Brand</span></a>
                        </div>

                        <div className="col-4">
                            <nav className="site-navigation text-right ml-auto" role="navigation">
                                <div>Hiện thị vùng Quảng Ninh theo dữ liệu GDB đã gửi</div>
                            </nav>
                        </div>

                        <div className="col-6">
                            <nav className="site-navigation d-flex justify-content-end text-right ml-auto" role="navigation">
                                <ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
                                    <li>
                                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            Home
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="btn btn-primary">
                                            Home
                                        </button>
                                    </li>

                                    <li><a href="#-section" className="nav-link">Why Us</a></li>
                                    <li><a href="#" className="nav-link">Testimonials</a></li>
                                    <li><a href="#" className="nav-link">Blog</a></li>
                                    <li><a href="#" className="nav-link">Contact</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        ...
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>

        </div>
    )
}

export default HeaderClient