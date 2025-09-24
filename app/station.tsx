
import StationSignUp from '@/pages/StationSignUp';
import React from 'react';
import tw, { useDeviceContext } from "twrnc";

const StationRegisteration = () => {
    useDeviceContext(tw)
    return (
        <>
            <StationSignUp />
        </>
    )
}

export default StationRegisteration;