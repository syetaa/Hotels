// import styles from "./Now_favorite.module.css"
// import Image from "next/image";

// import Now_booking_img from "@/public/Now_booking_img.png"

// const Now_favorite = () => {

//     return(
//         <div>
//             <div id="nowbookingpage" className={styles.textmain}>
//                 <div className={styles.cont1}>
//                     <Image src={Now_booking_img}/>
//                 </div>
//                 <div className={styles.cont2}>
//                     <div className={styles.text1}>
//                         Здесь пока ничего нет
//                     </div>
//                     <div className={styles.text2}>
//                     Нажимайте на значок сердечка у понравившихся отелей, <br/>чтобы сохранить и просматривать их в этом разделе
//                     </div>
//                 </div>
//                 <div className={styles.cont3}>
//                     <a>Выбрать отель</a>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export {Now_favorite};


'use client';

import {useEffect, useState} from "react";
import Bookmarks from "@/components/now_favorite/Bookmarks";


function Now_favorite() {
    const [token, setToken] = useState('');
    useEffect(() => {
        setToken(localStorage.getItem("token"));
    }, []);
    return (
        <Bookmarks token={token}/>
    )
}

export {Now_favorite};
