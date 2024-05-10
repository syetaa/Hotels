'use client';

import styles from "./Bookmarks.module.css";
import Image from "next/image";
import hotels_card2 from "@/public/hotels_card2.png";
import {FiHeart} from "react-icons/fi";
import getBookmarks from "@/api/bookmarks";
import Now_booking_img from "@/public/Now_booking_img.png";
import {useEffect, useState} from "react";

function BookmarkCard({bookmark}) {
    return (
        <div className={styles.card}>
                <a href={`/rooms/${bookmark.room_id}`}>
                    <div className={styles.img}>
                    <Image src={`/${bookmark.room_id}.png`} alt="1" width={200} height={300} />
                    </div>
                    <div className={styles.card_info}>
                        <div className={styles.cont1}>
                            <div className={styles.text1}>
                                {bookmark.hotel}
                            </div>
                            <div className={styles.text2}>
                                <div className={styles.text2_1}>
                                    {bookmark.city}
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
                                    {bookmark.price} ₽ / ночь
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

export default function Bookmarks({token}) {
    const [bookmarks, setBookmarks] = useState([]);
    useEffect(() => {
        getBookmarks(token).then(res => setBookmarks(res))
    }, [token])
    console.log(bookmarks[0]);
    return (
        <div>
            {bookmarks.length === 0 || bookmarks === false ?
                <div id="nowbookingpage" className={styles.textmain_now}>
                    <div className={styles.cont1_now}>
                        <Image src={Now_booking_img}/>
                    </div>
                    <div className={styles.cont2_now}>
                        <div className={styles.text1_now}>
                            Здесь пока ничего нет
                        </div>
                        <div className={styles.text2_now}>
                            Нажимайте на значок сердечка у понравившихся отелей, <br/>чтобы сохранить и просматривать их
                            в
                            этом разделе
                        </div>
                    </div>
                    <div className={styles.cont3_now}>
                        <a href="#">Выбрать отель</a>
                    </div>
                </div> :
                <div className={styles.textmain}>
                    <div className={styles.text_fav}>
                        Избранное:
                    </div>
                    <div className={styles.card_fav}>
                        {bookmarks.map(bookmark => (
                            <div key={bookmark.id}>
                                <BookmarkCard bookmark={bookmark} />
                            </div>
                        ))}
                    </div>
                    
                </div>
                }
        </div>
    )
}
