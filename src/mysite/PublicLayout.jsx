import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PublicLayout = () => {
    const auth = sessionStorage.getItem('user');
    return (
        (auth && auth !== 'undefined')? <Navigate to='/' /> : <Outlet />
    )
}

export default PublicLayout
