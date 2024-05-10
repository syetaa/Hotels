'use client'

import { useEffect, useState } from "react";
import styles from "./ProfileCard.module.css";
import { BsFillPersonFill } from "react-icons/bs";
import { getUserInfo } from "@/api/profile";

function logout(storage) {
    storage.removeItem("token")
    window.location.replace("/")
}

const ProfileCard = () => {
    const [storage, setStorage] = useState();
    useEffect(() => {
        setStorage(localStorage);
    }, []);
    const [token, setToken] = useState('');
    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);
    const [userInfo, setUserInfo] = useState([]);
    useEffect(() => {
        getUserInfo(token).then(res => setUserInfo(res))
    }, [token])
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
                                {userInfo.name} {userInfo.surname}
                            </div>
                            <div className={styles.text2}>
                                {userInfo.email}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.cont2}>
                    <button className={styles.exit_btn} onClick={() => logout(storage)}>Выйти из профиля</button>
                </div>
                
            </div>
        </div>
    )
}

export { ProfileCard };
