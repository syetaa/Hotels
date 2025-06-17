import Link from "next/link";
import styles from "./Footer.module.css"




const Footer = () => {

    return(
        <div>
            <div id="footerpage" className={styles.textmain}>
                <div className={styles.cont1}>
                    © 2025
                </div>
                <div className={styles.cont2}>
                    <div className={styles.text1}>
                        Лицензионное соглашение
                    </div>
                    <div className={styles.text2}>
                        Политика конфиденциальности
                    </div>
                    <div className={styles.text3}>
                        Политика обработки ПД
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Footer};