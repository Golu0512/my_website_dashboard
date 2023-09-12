import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Layout = () => {
    const auth = sessionStorage.getItem('user');
    return (
        (auth && auth !== 'undefined')?<Outlet /> : <Navigate to='/login' />
    )
}

export default Layout
