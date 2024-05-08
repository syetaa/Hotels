import { Room_btns } from "@/components/room_comp/room_btns/Room_btns";
import styles from "./page.module.css"
import Room from "@/components/room_comp/room/Room";

export default function RoomPage({params}){
    return (
        <div className={styles.textmain}>
            <Room_btns/>
            <Room params={params} />
        </div>
    )
}