import React from "react";
import "../../assets/css/page/MainLayout.css";

const MenuHeader = () => {
    return (
        <header className="header">
            <nav className="nav">
                <a href="#home" className="nav-link">Home</a>
                <a href="#about" className="nav-link">About</a>
                <a href="#services" className="nav-link">Services</a>
                <a href="#contact" className="nav-link">Contact</a>
            </nav>
        </header>
    );
};

export default MenuHeader;
