import Image from "next/image";
import styles from "./page.module.css";
import { Search } from "@/components/search/Search";
import { Special } from "@/components/special/Special";
import Carousel from "@/components/carousel/Carousel";
import { Hotels } from "@/components/hotels/Hotels";
import { Find } from "@/components/find/Find";
import { Popular } from "@/components/popular/Popular";



export default function Home() {



  
  return (
    <>
      <div>
        <div className="textmain">  
          <Search/>
          <Find/>
          <Hotels/>
          <Special/>
          <Carousel/>
          <Popular/>
        </div>
      </div>
    </>
  );

}