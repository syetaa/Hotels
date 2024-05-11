import styles from "./Hotels.module.css"
import Image from "next/image";

import {FiHeart} from "react-icons/fi";

import hotels_card2 from "@/public/hotels_card2.png"
import { Find } from "../find/Find";

function RoomCard({room}) {

    return (
            <div className={styles.card}>
                <a href={`/rooms/${room.id}`}>
                    <div className={styles.img}>
                    <Image src={`/${room.id}.png`} alt="1" width={200} height={300} />
                    </div>
                    <div className={styles.card_info}>
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
                                <div className={styles.text3_1}>
                                    {room.price}
                                </div>
                                <div className={styles.text3_2}>
                                    8280 ₽ / ночь
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
        
    );
}

export function HotelsComponent(data) {
    const newRooms = data.data.map(room => (
        <div key={room.id}>
            <RoomCard room={room}/>
        </div>
    ));

    console.log(newRooms)
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