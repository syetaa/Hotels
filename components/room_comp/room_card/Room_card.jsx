import styles from "./Room_card.module.css"
import Image from "next/image";

import { IoIosArrowBack } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";

import img1 from "@/public/room_card_img.jpg.png"
import img2 from "@/public/room_card_img2.jpg.png"


const Room_card = () => {

    return(
        <div>
            <div id="room_cardpage" className={styles.textmain}>
                <div className={styles.cont1}>
                    <div className={styles.imgs}>
                        <div className={styles.img_cont1}>
                            <Image src={img1}/>
                        </div>
                        <div className={styles.img_cont2}>
                            <div className={styles.img_cont2_1}>
                                <Image src={img2}/>
                            </div>
                            <div className={styles.img_cont2_2}>
                                <Image src={img2}/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.rating}>
                        <div className={styles.rating1}>

                        </div>
                        <div className={styles.rating2}>

                        </div>
                    </div>
                    <div className={styles.text1}>
                    Red stars hotel
                    </div>
                    <div className={styles.text2}>
                    Санкт-Петербург, набережная реки Пряжки, 30 - 2,5 км до центра
                    </div>
                </div>
                <div className={styles.cont2}>
                    aa
                </div>

            </div>
        </div>
    )
}

export {Room_card};