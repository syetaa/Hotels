import { ProfileCard } from "@/components/profilecard/ProfileCard"
import styles from "./page.module.css"


export default function Profile() {
  return (
    <div>
        <div className={styles.textmain}>
          <ProfileCard/>
        </div>
        
    </div>
  )
}
