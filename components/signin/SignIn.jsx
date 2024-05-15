'use client'
import {onSignIn} from "@/api/auth"
import styles from "./SignIn.module.css"
import React, {useState} from "react"


export default function SignInComponent() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <div id="searchpage" className={styles.textmain}>
                <div className={styles.card}>
                    <div className={styles.cont1}>
                        Вход
                    </div>
                    <div className={styles.cont2}>
                        <input name="username" onChange={(event) => {
                            setUsername(event.target.value)
                        }} placeholder="Логин"></input>
                        <input name="password" onChange={(event) => {
                            setPassword(event.target.value)
                        }} placeholder="Пароль"></input>
                        <button className={styles.btn} type="submit" onClick={() => onSignIn(username, password)}>Войти</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}