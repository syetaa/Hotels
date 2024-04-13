import styles from "./ProfileCard.module.css"
import Image from "next/image";

import { BsFillPersonFill } from "react-icons/bs";

const ProfileCard = () => {

    return(
        <div>
            <div id="profilecardpage" className={styles.textmain}>
                <div className={styles.cont1}>
                    <div className={styles.card}>
                        <div className={styles.card_cont1}>
                            <div className={styles.avatar}>
                                <BsFillPersonFill size={65} color="#fff"/>
                            </div>
                            <div className={styles.text1}>
                                Михаил Соинов
                            </div>
                            <div className={styles.text2}>
                                mich2004@yandex.ru
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cont2}>
                    <button className={styles.exit_btn}>Выйти из профиля</button>
                    <button className={styles.edit_btn}>Редактировать профиль</button>
                </div>
                
            </div>
        </div>
    )
}

export {ProfileCard};