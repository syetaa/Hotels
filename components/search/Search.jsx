import styles from "./Search.module.css"

import { BsCalendarDateFill } from "react-icons/bs";
import { MdPlace } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { useState } from "react";
import { Hotels } from "../hotels/Hotels";
import { Find } from "../find/Find";
import { getHotels } from "@/api/search";





function Search () {
    
    const [city, setCity] = useState(' ');
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [capacity, setCapacity] = useState(0);

    const [hotels, setHotels] = useState([]);
    console.log(hotels)


    function onSetHotelsClick(city, minPrice, maxPrice, capacity){
        setHotels(getHotels(city, minPrice, maxPrice, capacity))
    }


    return(
        <div>
            <div id="searchpage" className={styles.textmain}>
                <div className={styles.cont1}>
                    <div className={styles.video_home}>
                    {/* <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/jzx9bpFXSzE"
                        title="How Does Taranify Work?"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                        ></iframe> */}
                    </div>
                </div>
                <div className={styles.cont2}>
                    <div className={styles.form_search}>
                        <div className={styles.city}>
                            <BsCalendarDateFill size={30} color="#11100F"/>
                            <input  onChange={(event) => {
                    setCity(event.target.value)}} value={city} type="text" placeholder="Город, отель или направление"/>
                        </div>
                        <div className={styles.date}>
                            <MdPlace size={60} color="#11100F"/>
                            <input onChange={(event) => {
                    setMinPrice(event.target.value)}} value={minPrice} type="text" placeholder="Цена 1"/>
                            <input onChange={(event) => {
                    setMaxPrice(event.target.value)}} value={maxPrice} type="text" placeholder="Цена 2"/>
                        </div>
                        <div className={styles.people_count}>
                            <IoPeopleSharp size={30} color="#11100F"/>
                            <input onChange={(event) => {
                    setCapacity(event.target.value)}} value={capacity} type="text" placeholder="2 взрослых"/>
                        </div>
                        <a href="#" onClick={onSetHotelsClick(city, minPrice, maxPrice, capacity)}>Найти</a>
                    </div>
                </div>
                <Find/>
                <Hotels data={hotels}/>
            </div>
            
        </div>
    )
}

export {Search};