import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import NavBar from "../common/NavBar/NavBar";
import "../layouts/Layout.css";

function Layout() {
    const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

    return (
        <>
            <Header />
            <div className="layout-container">
                {isLoggedIn ? <NavBar /> : null}
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Layout;