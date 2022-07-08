import React from "react";
import { Outlet} from 'react-router-dom';
import SideBar from "./SideBar";
import './css/SideBar.css'

const AppLayout = () => {
    return (
        <>
            <SideBar/>
            <section className="home-section">
                <div className="home-content">
                    <Outlet/>
                </div>
            </section>

        </>
    )
}
export default AppLayout;