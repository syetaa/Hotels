import Link from "next/link";
import styles from "./Header.module.css"

import { FaSearch } from "react-icons/fa";
import { FaSuitcaseRolling } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";

const Header = () => {

    return(
        <div>
            <div id="navpage" className={styles.textmain}>
                <div className={styles.logo}>
                    LOGO
                </div>
                <div className={styles.links}>
                    <Link href="/"><FaSearch size={20}/>Поиск</Link>
                    <Link href="/booking"><FaSuitcaseRolling size={20}/>Брони</Link>
                    <Link href="/favourites"><FaHeart size={20}/>Избранное</Link>
                    <Link href="/profile"><IoPerson size={20}/>Профиль</Link>
                </div>
            </div>
        </div>
    )
}

export {Header};