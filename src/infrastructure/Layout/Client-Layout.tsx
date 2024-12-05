import { useEffect, useState } from "react";
import "../../assets/css/page/MainLayout.css";
import HeaderClient from "./Header";
import MenuHeader from "./Menu";

const MainLayout = ({ ...props }: any) => {

    return (
        <div className="main-layout-client">
            <HeaderClient />
            {props.children}
        </div>

    )
}

export default MainLayout