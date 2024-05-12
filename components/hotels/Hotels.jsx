import styles from "./Hotels.module.css"
import Image from "next/image";

import {FiHeart} from "react-icons/fi";
import {Find} from "../find/Find";
import {addBookmark, deleteBookmark} from "@/api/bookmarks";
import {useEffect, useState} from "react";
import {addOrder, deleteOrder} from "@/api/orders";


function handleLike(id, token, liked) {
    liked ? deleteBookmark(id, token) : addBookmark(id, token);
}

function handleOrder(id, token, ordered) {
    ordered ? deleteOrder(id, token) : addOrder(id, token);
}

function RoomCard({room}) {
    const [token, setToken] = useState('');
    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);
    const [liked, setLiked] = useState(false);
    useEffect(() => {
        setLiked(room.liked);
    }, [room]);
    const [ordered, setOrdered] = useState(false);
    useEffect(() => {
        setOrdered(room.ordered);
    }, [room]);
    return (
        <div className={styles.card}>
            <a href={`/rooms/${room.id}`}>
                <div className={styles.img}>
                    <Image src={`/${room.id}.png`} alt="1" width={200} height={300}/>
                </div>
            </a>
            <div className={styles.card_info}>
                <a href={`/rooms/${room.id}`}>
                    <div className={styles.cont1}>
                        <div className={styles.text1}>
                            {room.hotel}
                        </div>
                        <div className={styles.text2}>
                            <div className={styles.text2_1}>
                                {room.city}
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
                                {room.price} ₽ / ночь
                            </div>
                        </div>
                    </div>
                </a>
                <div className={styles.cont2}>
                    <div className={styles.like}>
                        <FiHeart size={20} color={liked === true ? 'red' : 'black'} onClick={() => {
                            handleLike(room.id, token, liked);
                            setLiked(!liked)
                        }}/>
                    </div>
                    <button className={styles.score} onClick={() => {
                        handleOrder(room.id, token, ordered);
                        setOrdered(!ordered)
                    }}>{ordered === true ? 'Забронировано' : 'Забронировать'}
                    </button>
                </div>
            </div>
        </div>

    );
}

export function HotelsComponent(data) {
    const newRooms = data.data.map(room => (
        <div key={room.id}>
            <RoomCard room={room}/>
        </div>
    ));

    return (
        <div className={styles.textmain}>
            <div className={styles.find_comp}>
                <Find/>
            </div>
            <div className={styles.room_comp}>
                {newRooms}
            </div>
        </div>

    )
}
