import Login from '@/pages/Login';
import React from 'react';
import tw, { useDeviceContext } from "twrnc";

const Auth = () => {
    useDeviceContext(tw)
    return (
        <>
            <Login />
        </>
    )
}

export default Auth;