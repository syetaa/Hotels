'use client'
import {onSignIn} from "@/api/auth"
import styles from "./SignIn.module.css"
import React, {useState} from "react"

import { MdEmail } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";


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
                        <div className={styles.inp1}>
                            <MdEmail size={20}/>
                            <input name="username" onChange={(event) => {
                            setUsername(event.target.value)
                            }} placeholder="Логин"></input>
                        </div>
                        
                        <div className={styles.inp1}>
                            <RiLockPasswordFill size={20}/>
                            <input name="password" onChange={(event) => {
                            setPassword(event.target.value)
                            }} placeholder="Пароль"></input>
                        </div>
                        
                        <button className={styles.btn} type="submit" onClick={() => onSignIn(username, password)}>Войти</button>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}