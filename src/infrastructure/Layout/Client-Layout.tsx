import { useEffect, useState } from "react";
import "../../assets/css/page/MainLayout.css";
import HeaderClient from "./Header";

const MainLayout = ({ ...props }: any) => {

    return (
        <div className="main-layout-client">
            <HeaderClient />
            <div className="container-layout-client">
                <div className="content-layout-client">
                    <div className="children">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MainLayout