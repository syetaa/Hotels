
import styles from "./Find.module.css"

import { IoSearch } from "react-icons/io5";
import { BsFillLightningChargeFill } from "react-icons/bs";

const Find = () => {

    return(
        <div>
            <div id="specialpage" className={styles.textmain}>
                <div className={styles.icon}>
                    <span><IoSearch size={25}/></span>
                </div>
                <div className={styles.text1}>
                    Найдено по вашему запросу:
                </div>
            </div>
        </div>
    )
}

export {Find};