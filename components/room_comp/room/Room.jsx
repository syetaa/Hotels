'use client';

import {getRoom} from "@/api/rooms";
import Image from "next/image";
import styles from "./Room.module.css"
import {FiHeart} from "react-icons/fi";
import {useEffect, useState} from "react";
import {addBookmark, deleteBookmark} from "@/api/bookmarks";
import {addOrder, deleteOrder} from "@/api/orders";

function handleLike (id, token, liked) {
    liked ? deleteBookmark(id, token) : addBookmark(id, token);
}

function handleOrder(id, token, ordered) {
    ordered ? deleteOrder(id, token) : addOrder(id, token);
}

function RoomComponent({roomData}) {
    const [token, setToken] = useState('');
    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);
    const [liked, setLiked] = useState(false);
    useEffect(() => {
        setLiked(roomData.liked);
    }, [roomData]);
    const [ordered, setOrdered] = useState(false);
    useEffect(() => {
        setOrdered(roomData.ordered);
    }, [roomData]);
    return (
        <div>
            <div className={styles.card}>
                <div className={styles.img}>
                    <Image src={`/${roomData.id}.png`} alt="1" width={200} height={300} />
                </div>
                <div className={styles.room_info}>
                    <div className={styles.cont1}>
                        <div className={styles.text1}>
                            {roomData.hotel}
                        </div>
                        <div className={styles.text2}>
                            <div className={styles.text2_1}>
                                {roomData.city}
                            </div>
                            <div className={styles.text2_2}>
                                -
                            </div>
                            <div className={styles.text2_3}>
                                1 км до центра
                            </div>
                        </div>
                        <div className={styles.text3}>
                            <div className={styles.text3_2}>
                                {roomData.price} ₽ / ночь
                            </div>
                        </div>
                    </div>
                    <div className={styles.cont2}>
                        
                        <div className={styles.like}>
                            <FiHeart size={20} color={liked === true ? 'red' : 'black'} onClick={() => {
                                handleLike(roomData.id, token, liked);
                                setLiked(!liked)
                            }}/>
                        </div>
                        <button className={styles.score} onClick={() => {
                            handleOrder(roomData.id, token, ordered);
                            setOrdered(!ordered)
                        }}>{ordered === true ? 'Забронировано' : 'Забронировать'}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default function Room({params}) {
    const [token, setToken] = useState('');
    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);
    const [roomData, setRoomData] = useState([]);
    useEffect(() => {
        getRoom(params.id, token).then(res => setRoomData(res))
    }, [token, params.id])
    console.log(roomData)
    return (
        <div>
            <RoomComponent roomData={roomData} />
        </div>
    )
}
