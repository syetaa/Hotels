import Image from "next/image";
import styles from "./page.module.css";
import { SignInComponent } from "@/components/signin/SignIn";


export default function SignInPage() {

    
  return (
    <>
      <div>
        <div className="textmain">  
          <SignInComponent/> 
        </div>
      </div>
    </>
  );
}
