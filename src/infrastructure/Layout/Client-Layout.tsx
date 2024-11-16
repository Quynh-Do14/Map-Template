import { useEffect, useState } from "react";
import "../../assets/css/page/MainLayout.css";
import HeaderClient from "./Header";

const MainLayout = ({ ...props }: any) => {

    return (
        <div className="main-layout-client">
            <HeaderClient />
            {props.children}
        </div>

    )
}

export default MainLayout