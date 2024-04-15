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
                <input name="username" onChange={(event) => {
                    setUsername(event.target.value)
                }} placeholder="Логин"></input>
                <input name="password" onChange={(event) => {
                    setPassword(event.target.value)
                }} placeholder="Пароль"></input>
                <input type="submit" onClick={() => onSignIn(username, password)}/>
            </div>
        </div>
    )
}