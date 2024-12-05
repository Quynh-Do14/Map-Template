import React from 'react'
import "../../assets/css/style.css"
import MenuHeader from './Menu'
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
                    <div className="header-title">Nghiên cứu hệ thống nhận dạng và giám sát rác thải nhựa trên mặt vùng ven biển Việt nam từ dữ liệu Địa tin học.</div>
                    <div className="header-info">Cơ quan chủ trì: Viện KHCN Cơ khí, Tự động hóa và Môi trường</div>
                </div>
                <MenuHeader />
            </header>

        </div>
    )
}

export default HeaderClient