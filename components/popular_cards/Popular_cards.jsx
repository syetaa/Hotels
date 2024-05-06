import styles from "./Popular_cards.module.css"
import Image from "next/image";

import { IoMdSunny } from "react-icons/io";

import krasnodar_img from "@/public/krasnodar.v2.jpg.png"
import kazan_img from "@/public/kazan.v2.jpg.png"
import sochi_img from "@/public/sochi.v2.jpg.png"
import kalinin_img from "@/public/sochi.v2.jpg.png"
import resp_karel_img from "@/public/sochi.v2.jpg.png"

import vladiv_img from "@/public/vladivostok.v2.jpg.png"
import ekb_img from "@/public/ekaterinburg.v2.jpg.png"
import novosib_img from "@/public/novosibirsk.v1.jpg.png"

const Popular_cards = () => {

    return(
        <div>
            <div id="popular_cardspage" className={styles.textmain}>
                <div className={styles.cont1}>
                    <div className={styles.cont1_1}>
                        <div className={styles.img1}>
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
                        <div className={styles.img1}>
                            <Image src={kazan_img}/>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.name}>
                                Казань
                            </div>
                            <div className={styles.price}>
                                от 1420 ₽
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.cont2}>
                    <div className={styles.cont1_1}>
                        <div className={styles.img2}>
                            <Image src={sochi_img}/>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.name}>
                                Сочи
                            </div>
                            <div className={styles.price}>
                                от 1420 ₽
                            </div>
                        </div>
                    </div>
                    <div className={styles.cont1_2}>
                        <div className={styles.img2}>
                            <Image src={kalinin_img}/>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.name}>
                                Калининград
                            </div>
                            <div className={styles.price}>
                                от 1420 ₽
                            </div>
                        </div>
                    </div>
                    <div className={styles.cont1_3}>
                        <div className={styles.img2}>
                            <Image src={resp_karel_img}/>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.name}>
                                Республика Карелия
                            </div>
                            <div className={styles.price}>
                                от 1420 ₽
                            </div>
                        </div>
                    </div>
                </div>


                <div className={styles.cont3}>
                <div className={styles.cont1_1}>
                        <div className={styles.img2}>
                            <Image src={vladiv_img}/>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.name}>
                                Владивосток
                            </div>
                            <div className={styles.price}>
                                от 1420 ₽
                            </div>
                        </div>
                    </div>
                    <div className={styles.cont1_2}>
                        <div className={styles.img2}>
                            <Image src={ekb_img}/>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.name}>
                                Екатеринбург
                            </div>
                            <div className={styles.price}>
                                от 1420 ₽
                            </div>
                        </div>
                    </div>
                    <div className={styles.cont1_3}>
                        <div className={styles.img2}>
                            <Image src={novosib_img}/>
                        </div>
                        <div className={styles.text}>
                            <div className={styles.name}>
                                Новосибирск
                            </div>
                            <div className={styles.price}>
                                от 1420 ₽
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Popular_cards};