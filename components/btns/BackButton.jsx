'use client';
import { useRouter } from 'next/navigation'
import styles from "./BackButton.module.css"
import { IoIosArrowBack } from "react-icons/io";

export default function BackButton() {
  const router = useRouter()
  return (
    <a className={styles.btn} type="button" onClick={() => router.back()}>
        <IoIosArrowBack size={20}/>К списку отелей
    </a>
  )
}