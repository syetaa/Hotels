'use client'
import styles from "./Carousel2.module.css"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from "next/image";

import card_img1 from "@/public/card_img1.png"
import card_img2 from "@/public/card_img2.png"
import card_img3 from "@/public/card_img3.png"
import card_img4 from "@/public/card_img4.png"

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { FiHeart } from "react-icons/fi";




function Carousel2() {

   const renderNextButton = ({ isDisabled }) => {
     return <FaArrowRight size={20} color='#11100F' className={styles.next_btn}/>;
   };

   const renderPrevButton = ({ isDisabled }) => {
     return <FaArrowLeft size={20} color='#11100F' className={styles.prev_btn}/>;
   };



    //Responsiveness 
  const responsive = {
    400: { items: 2 },
    840: { items: 3 },
    1220: { items: 4 },
    1600: { items: 4 },
    2200: { items: 5}
  };



   //The carousel items 
   const items = [
        <div key={1} className={styles.item}>
            <div className={styles.card}>
                <div className={styles.cont1}>
                    <Image src={card_img1}/>
                    <div className={styles.rating}>
                        <div className={styles.rating_text1}>
                            4.5
                        </div>
                        <div className={styles.rating_text2}>
                            146 отзывов
                        </div>
                    </div>
                </div>
                <div className={styles.cont2}>
                    <div className={styles.text1}>
                        Марити
                    </div>
                    <div className={styles.text2}>
                        Анапа
                    </div>
                    <div className={styles.text3}>
                        <div className={styles.text3_1}>
                            2-3 апреля
                        </div>
                        <div className={styles.text3_2}>
                            -
                        </div>
                        <div className={styles.text3_2}>
                            2 зрослых
                        </div>
                    </div>
                    <div className={styles.text4}>
                        От 15000₽
                    </div>
                </div>
            </div>
        </div>,

       <div key={2} className={styles.item}>
           <div className={styles.card}>
               <div className={styles.cont1}>
                   <Image src={card_img2} />
                   <div className={styles.rating}>
                       <div className={styles.rating_text1}>
                           4.9
                       </div>
                       <div className={styles.rating_text2}>
                           1456 отзывов
                       </div>
                   </div>
               </div>
               <div className={styles.cont2}>
                   <div className={styles.text1}>
                       Звезды Арбата
                   </div>
                   <div className={styles.text2}>
                       Москва
                   </div>
                   <div className={styles.text3}>
                       <div className={styles.text3_1}>
                           15-17 мая
                       </div>
                       <div className={styles.text3_2}>
                           -
                       </div>
                       <div className={styles.text3_2}>
                           2 зрослых
                       </div>
                   </div>
                   <div className={styles.text4}>
                       От 45000₽
                   </div>
               </div>
           </div>
       </div>,

       <div key={3} className={styles.item}>
           <div className={styles.card}>
               <div className={styles.cont1}>
                   <Image src={card_img3} />
                   <div className={styles.rating}>
                       <div className={styles.rating_text1}>
                           4.5
                       </div>
                       <div className={styles.rating_text2}>
                           146 отзывов
                       </div>
                   </div>
               </div>
               <div className={styles.cont2}>
                   <div className={styles.text1}>
                        Valo Mercure
                   </div>
                   <div className={styles.text2}>
                       Санкт-Питербург
                   </div>
                   <div className={styles.text3}>
                       <div className={styles.text3_1}>
                           2-3 апреля
                       </div>
                       <div className={styles.text3_2}>
                           -
                       </div>
                       <div className={styles.text3_2}>
                           2 зрослых
                       </div>
                   </div>
                   <div className={styles.text4}>
                       От 15000₽
                   </div>
               </div>
           </div>
       </div>,

       <div key={4} className={styles.item}>
           <div className={styles.card}>
               <div className={styles.cont1}>
                   <Image src={card_img4} />
                   <div className={styles.rating}>
                       <div className={styles.rating_text1}>
                           4.5
                       </div>
                       <div className={styles.rating_text2}>
                           146 отзывов
                       </div>
                   </div>
               </div>
               <div className={styles.cont2}>
                   <div className={styles.text1}>
                       Марити
                   </div>
                   <div className={styles.text2}>
                       Анапа
                   </div>
                   <div className={styles.text3}>
                       <div className={styles.text3_1}>
                           2-3 апреля
                       </div>
                       <div className={styles.text3_2}>
                           -
                       </div>
                       <div className={styles.text3_2}>
                           2 зрослых
                       </div>
                   </div>
                   <div className={styles.text4}>
                       От 15000₽
                   </div>
               </div>
           </div>
       </div>,



       

        

      
     


  ];



    return (
      <>
        <div className={styles.cont}>
          <div className={styles.carousell}>
            <div className={styles.slider_main}>
              <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                // autoPlay="true"
                // autoPlayInterval="1500"
                infinite="true"
                disableDotsControls="true"
                // disableButtonsControls="true"
                renderPrevButton={renderPrevButton}
                renderNextButton={renderNextButton}

              />
            </div>
          </div>
        </div>
        
        
        
      </>
    )
  }
  
  export default Carousel2