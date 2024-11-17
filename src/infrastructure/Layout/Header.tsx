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

            <header className="site-navbar js-sticky-header site-navbar-target" role="banner">
                <div className="container-fluid header-section">
                    <div className="header-title">RÁC THẢI TỈNH QUẢNG NINH</div>
                    <div className="header-info">Thuộc đề tài: Rác thải tỉnh quảng ninh</div>
                </div>
            </header>

        </div>
    )
}

export default HeaderClient