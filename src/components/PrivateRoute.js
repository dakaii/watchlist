import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const auth = useSelector((state) => state.auth);
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    useEffect(() => {
        const token = localStorage.getItem('access');
        if (token) {
            const tokenExpiration = jwtDecode(token).exp;
            const dateNow = new Date();

            if (tokenExpiration < dateNow.getTime() / 1000) {
                setIsAuthenticated(false);
            } else {
                setIsAuthenticated(true);
            }
        } else {
            setIsAuthenticated(false);
        }
    }, [auth]);

    if (isAuthenticated === null) {
        return <></>;
    }

    return (
        <Route
            {...rest}
            render={(props) =>
                !isAuthenticated ? (
                    <Redirect to="/login" />
                ) : (
                    <Component {...props} />
                )
            }
        />
    );
};
