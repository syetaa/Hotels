import { Now_booking } from "@/components/now_booking/Now_booking"
import styles from "./page.module.css"


export default function Booking() {
  return (
    <div>
        <div className={styles.textmain}>
            <Now_booking/>
        </div>
        
    </div>
  )
}
