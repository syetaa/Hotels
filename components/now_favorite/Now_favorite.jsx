import styles from "./Now_favorite.module.css"
import Image from "next/image";

import Now_booking_img from "@/public/Now_booking_img.png"

const Now_favorite = () => {

    return(
        <div>
            <div id="nowbookingpage" className={styles.textmain}>
                <div className={styles.cont1}>
                    <Image src={Now_booking_img}/>
                </div>
                <div className={styles.cont2}>
                    <div className={styles.text1}>
                        Здесь пока ничего нет
                    </div>
                    <div className={styles.text2}>
                    Нажимайте на значок сердечка у понравившихся отелей, <br/>чтобы сохранить и просматривать их в этом разделе
                    </div>
                </div>
                <div className={styles.cont3}>
                    <button>Выбрать отель</button>
                </div>
            </div>
        </div>
    )
}

export {Now_favorite};