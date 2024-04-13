import styles from "./Special.module.css"

import { BsFillLightningChargeFill } from "react-icons/bs";

const Special = () => {

    return(
        <div>
            <div id="specialpage" className={styles.textmain}>
                <div className={styles.icon}>
                    <span><BsFillLightningChargeFill size={25}/></span>
                </div>
                <div className={styles.text1}>
                    Специальные предложения
                </div>
            </div>
        </div>
    )
}

export {Special};