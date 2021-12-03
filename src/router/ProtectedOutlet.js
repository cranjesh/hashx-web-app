import React from "react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedOutlet = () => {
    const SessionUUID = localStorage.getItem('SessionUUID')
    const UserUUID = localStorage.getItem('UserUUID')
    const isAuthenticated = SessionUUID?.length > 0 && UserUUID.length > 0
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedOutlet
