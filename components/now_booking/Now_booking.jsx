import styles from "./Now_booking.module.css"
import Image from "next/image";

import Now_booking_img from "@/public/Now_booking_img.png"

const Now_booking = () => {

    return(
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
                        Предстоящих бронирований пока нет, завершённые брони<br/> можно посмотреть во вкладке «Прошлые»
                    </div>
                </div>
                <div className={styles.cont3}>
                    <button>Выбрать отель</button>
                </div>
            </div>
        </div>
    )
}

export {Now_booking};