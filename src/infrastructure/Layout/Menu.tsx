import React from "react";
import "../../assets/css/page/MainLayout.css";
import { useLocation } from "react-router-dom";
const menu = [
    {
        pathname: "/",
        name: "Bản đồ"
    },
    {
        pathname: "/file",
        name: "Tệp"
    },
]
const MenuHeader = () => {
    const { pathname } = useLocation();
    console.log("pathname", pathname);

    return (
        <header className="header">
            <nav className="nav">
                {
                    menu.map((item, index) => {
                        return (
                            <a key={index}
                                href={item.pathname}
                                className={`${pathname == item.pathname ? "active" : ""} nav-link`} >
                                <div>
                                    {item.name}
                                </div>
                            </a>
                        )
                    })
                }
            </nav>
        </header >
    );
};

export default MenuHeader;
