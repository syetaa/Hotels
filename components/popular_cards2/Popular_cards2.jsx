import styles from "./Popular_cards2.module.css"
import Image from "next/image";

import { IoMdSunny } from "react-icons/io";

import krasnodar_img from "@/public/krasnodar.v2.jpg.png"

const Popular_cards2 = () => {

    return(
        <div>
            <div id="popular_cards2page" className={styles.textmain}>
                <div className={styles.cont1}>
                    <div className={styles.cont1_1}>
                        <div className={styles.img}>
                            <Image src={krasnodar_img}/>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.name}>
                                Краснодар
                            </div>
                            <div className={styles.price}>
                                от 1420 ₽
                            </div>
                        </div>
                    </div>
                    <div className={styles.cont1_2}>
                        <div className={styles.img}>
                            <Image src={krasnodar_img}/>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.name}>
                                Краснодар
                            </div>
                            <div className={styles.price}>
                                от 1420 ₽
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.cont2}>

                </div>


                <div className={styles.cont3}>

                </div>
            </div>
        </div>
    )
}

export {Popular_cards2};