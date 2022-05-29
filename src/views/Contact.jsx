import React from "react";
import style from "./Contact.module.css";
import { contactLinks } from "../constants";



export const Contact = () => {
   return (
     <div className={style.contact} id="connect">
       <div className={style.number}>
         <p>Contact Me</p>
         <p id="phone-number">+91 8008811572</p>
         <p>katravthprabhu151@gmail.com </p>
         <div className={style.cont}>
           <div className="flex md:justify-start ">
             {contactLinks.map((el) => (
               <a
                 href={el.link}
                 className="mr-5 cursor-pointer mt-8 hover:scale-125"
               >
                 <img alt="" className={style.logo} src={el.url} />
                 {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
               </a>
             ))}
           </div>
         </div>
       </div>
       <div className={style.copyright}>
         No © copyright issues | Designed and developed by Akash
       </div>
     </div>
   );
}
