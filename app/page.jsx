'use client'

import {Search} from "@/components/search/Search";
import SignInComponent from "@/components/signin/SignIn";
import {useEffect, useRef, useState} from "react";
import Carousel from "@/components/carousel/Carousel";
import {Special} from "@/components/special/Special";
import {Hotels} from "@/components/hotels/Hotels";
import {Popular} from "@/components/popular/Popular";
import {Find} from "@/components/find/Find";
import { getHotels } from "@/api/search";
import { Popular_cards } from "@/components/popular_cards/Popular_cards";

import Carousel2 from "@/components/carousel2/Carousel2";


export default function Home() {
    const [token, setToken] = useState('');
    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);
    const registered = (token !== undefined && token !== null && token !== "")
    return (
        <>
            <div>
                <div className="textmain">
                    {registered ?
                        <>
                            <Search/>
                            {/* <Find/> */}
                            {/* <Hotels data={hotels}/> */}
                            <Special/>
                            <Carousel2/>
                            {/* <Carousel/> */}
                            <Popular/>
                            <Popular_cards/>
                            {/* <Popular_cards2/> */}
                        </> : <SignInComponent/>
                    }
                </div>
            </div>
        </>
    );

}