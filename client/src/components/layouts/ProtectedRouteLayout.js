import React from "react";
import NavBar from "../common/NavBar/NavBar";
import { Outlet } from "react-router-dom";

function ProtectedRouteLayout() {
    return (
        <>
        <NavBar />
        <Outlet />
        </>
    );
}

export default ProtectedRouteLayout;