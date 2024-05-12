'use client';

import styles from "./Orders.module.css";
import Image from "next/image";
import {FiHeart} from "react-icons/fi";
import getOrders from "@/api/orders";
import Now_booking_img from "@/public/Now_booking_img.png";
import {useEffect, useState} from "react";

function OrderCard({order}) {
    return (
        <div className={styles.card}>
            <a href={`/rooms/${order.id}`}>
                <div className={styles.img}>
                    <Image src={`/${order.id}.png`} alt="1" width={200} height={300} />
                </div>
                <div className={styles.card_info}>
                    <div className={styles.cont1}>
                        <div className={styles.text1}>
                            {order.hotel}
                        </div>
                        <div className={styles.text2}>
                            <div className={styles.text2_1}>
                                {order.city}
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
                                {order.price} ₽ / ночь
                            </div>
                        </div>

                    </div>
                    <div className={styles.cont2}>
                        <div className={styles.like}>
                            <FiHeart size={20} />
                        </div>
                        <div className={styles.score}>
                            Бронь
                        </div>
                    </div>
                </div>
            </a>

        </div>
    )
}

export default function Orders({token}) {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        getOrders(token).then(res => setOrders(res))
    }, [token])
    return (
        <div>
            {orders.length === 0 || orders === false ?
                <div>
                    <div id="nowbookingpage" className={styles.textmain}>
                        <div className={styles.cont1}>
                            <Image src={Now_booking_img}/>
                        </div>
                        <div className={styles.cont2}>
                            <div className={styles.text1}>
                                Пора в путешествие!
                            </div>
                            <div className={styles.text2}>
                                Предстоящих бронирований пока нет, завершённые брони<br/> можно посмотреть во вкладке
                                «Прошлые»
                            </div>
                        </div>
                        <div className={styles.cont3}>
                            <a href="#searchpage">Выбрать отель</a>
                        </div>
                    </div>
                </div> :
                <div className={styles.textmain}>
                    <div className={styles.text_fav}>
                        Брони:
                    </div>
                    <div className={styles.card_fav}>
                        {orders.map(order => (
                            <div key={order.id}>
                                <OrderCard order={order}/>
                            </div>
                        ))}
                    </div>

                </div>
            }
        </div>
    )
}
