import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
const AdminRoute = ({ children }) => {
    const { userInfo } = useSelector((state) => state.auth);
    if (!userInfo) {
        return <Navigate to="/login" />;
    }
    if (!(userInfo.role == 'admin')) {
        return <Navigate to="/" />;
    }
    return children;
};
export default AdminRoute;
