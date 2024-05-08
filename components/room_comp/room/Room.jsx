import {getRoom} from "@/api/rooms";
import Image from "next/image";
import styles from "./Room.module.css"
import {FiHeart} from "react-icons/fi";

function RoomComponent({roomData}) {
    return (
        <div>
            <div className={styles.img}>
                <Image src={`/${roomData.id}.png`} alt="1" width={200} height={300}/>
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
                    <div className={styles.score}>
                        4.5
                    </div>
                    <div className={styles.like}>
                        <FiHeart size={20}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default async function Room({params}) {
   const roomData = await getRoom(params.id)
    

    return (
        <div>
            <RoomComponent roomData={roomData}/>
        </div>
    )
}