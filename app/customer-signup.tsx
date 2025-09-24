
import CustomerSignUp from '@/pages/CustomeSignUp';
import React from 'react';
import tw, { useDeviceContext } from "twrnc";

const CustomerRegisteration = () => {
    useDeviceContext(tw)
    return (
        <>
            <CustomerSignUp />
        </>
    )
}

export default CustomerRegisteration;