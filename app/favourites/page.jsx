import { Now_favorite } from "@/components/now_favorite/Now_favorite"
import styles from "./page.module.css"


export default function Favourites() {
  return (
    <div>
        <div className={styles.textmain}>
          <Now_favorite/>
        </div>
        
    </div>
  )
}
