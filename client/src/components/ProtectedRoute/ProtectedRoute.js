import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ component: Component, ...props }) => {
    const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

  return isLoggedIn ? <Component {...props} /> : <Navigate to="/" />
}

export default ProtectedRoute