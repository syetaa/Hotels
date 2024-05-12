'use client';

import {useEffect, useState} from "react";
import Orders from "@/components/now_booking/Orders";


function Now_booking () {
    const [token, setToken] = useState('');
    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);
    return (
        <Orders token={token}/>
    )
}

export {Now_booking};
