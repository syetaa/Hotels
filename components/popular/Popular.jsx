import styles from "./Popular.module.css"

import { IoMdSunny } from "react-icons/io";

const Popular = () => {

    return(
        <div>
            <div id="popularpage" className={styles.textmain}>
                <div className={styles.icon}>
                    <span><IoMdSunny size={25}/></span>
                </div>
                <div className={styles.text1}>
                    Популярные направления
                </div>
            </div>
        </div>
    )
}

export {Popular};