import styles from "./Hotels.module.css"
import Image from "next/image";

import { FiHeart } from "react-icons/fi";

import hotels_card2 from "@/public/hotels_card2.png"
import hotels_card3 from "@/public/hotels_card3.png"

function RoomCard (id, city, hotel, price, capacity) {
    
    return (
        <div className={styles.card}>
                    <div className={styles.img}>
                        <Image src={hotels_card2}/>
                    </div>
                    <div className={styles.card_info}>
                        <div className={styles.cont1}>
                            <div className={styles.text1}>
                                {hotel}
                            </div>
                            <div className={styles.text2}>
                                <div className={styles.text2_1}>
                                    {city}
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
                                    {price}
                                </div>
                                <div className={styles.text3_2}>
                                8280 ₽ / ночь
                                </div>
                            </div>
                        </div>
                        <div className={styles.cont2}>
                            <div className={styles.score}>
                                4.5
                            </div>
                            <div className={styles.like}>
                                <FiHeart size={20}/>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

function Hotels (data) {
    const rooms = data.map((room) => {
        <RoomCard key={room.id} id={room.id} city={room.city} hotel={room.hotel} price={room.price} capacity={room.capacity}/>
    })
    return(
        <div>
          { rooms }
        </div>
        
    )
}

export {Hotels};