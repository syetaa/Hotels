import styles from "./Room_btns.module.css"

import { IoIosArrowBack } from "react-icons/io";
import { IoShareOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";


const Room_btns = () => {

    return(
        <div>
            <div id="room_btnspage" className={styles.textmain}>
                <div className={styles.cont1}>
                    <div className={styles.btn}>
                        <IoIosArrowBack size={20}/>К списку отелей
                    </div> 
                </div>
                <div className={styles.cont2}>
                    <div className={styles.cont2_1}>
                        <div className={styles.btn}>
                            <IoShareOutline size={20}/>Поделиться
                        </div> 
                    </div>
                    <div className={styles.cont2_2}>
                        <div className={styles.btn}>
                            <IoMdHeartEmpty size={20}/>В избранное
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Room_btns};