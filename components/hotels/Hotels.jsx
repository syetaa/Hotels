import styles from "./Hotels.module.css"
import Image from "next/image";

import { FiHeart } from "react-icons/fi";

import hotels_card2 from "@/public/hotels_card2.png"
import hotels_card3 from "@/public/hotels_card3.png"

function RoomCard ({room}) {
    
    return (
        <div key={room.id} className={styles.card}>
                    <div className={styles.img}>
                        <Image src={hotels_card2}/>
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

export function HotelsComponent (data) {
    console.log(typeof data);
    const roooms = [
        {
          "city": "Москва",
          "hotel": "Элеон",
          "price": 1000,
          "capacity": 2,
          "id": 1
        },
        {
          "city": "Москва",
          "hotel": "Элеон",
          "price": 1200,
          "capacity": 3,
          "id": 2
        }
      ]
    // const { data: rooms } = data;   
    const newRooms = roooms.map(room => <RoomCard
            key={room.id}
            room={room}
        />
        
    )
    console.log(newRooms)
    return(
        <div>
          { roooms }
        </div>
        
    )
}