import styles from "./Search.module.css"

import { BsCalendarDateFill } from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";

const Search = () => {

    return(
        <div>
            <div id="searchpage" className={styles.textmain}>
                <div className={styles.cont1}>
                    <div className={styles.video_home}>
                    {/* <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/jzx9bpFXSzE"
                        title="How Does Taranify Work?"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        ></iframe> */}
                    </div>
                </div>
                <div className={styles.cont2}>
                    <div className={styles.form_search}>
                        <div className={styles.city}>
                            <BsCalendarDateFill size={30} color="#11100F"/>
                            <input type="text" placeholder="Город, отель или направление"/>
                        </div>
                        <div className={styles.date}>
                            <MdPlace size={30} color="#11100F"/>
                            <input type="text" placeholder="Выберите даты"/>
                        </div>
                        <div className={styles.people_count}>
                            <IoPeopleSharp size={30} color="#11100F"/>
                            <input type="text" placeholder="2 взрослых"/>
                        </div>
                        <a href="#">Найти</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Search};