import React, { useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import AdminPage from "./admin/AdminPage";
import LoginForm from "./admin/LoginForm";
import {motion} from "framer-motion";

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = () => {
        setIsAuthenticated(false);
    };

    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route
                    path="/login"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/VideoBg0312" />
                        ) : (
                            <LoginForm login={login} isAuthenticated={isAuthenticated} />
                        )
                    }
                />
                <Route
                    path="/admin/*"
                    element={
                        isAuthenticated ? (
                            <AdminPage isAuthenticated={isAuthenticated} logout={logout} />
                        ) : (
                            <Navigate to="/" />
                        )
                    }
                />
                <Route path="*" element={<AdminPage/> } />
            </Routes>
        </div>
    );
};

export default App;
