import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import style from "./Home.module.css";
export const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id="contact"
      className={
        darkMode
          ? "bg-gray-100 pt-24 md:h-screen"
          : "bg-black pt-24 text-white md:h-screen"
      }
    >
      <div className="max-w-6xl mx-auto x-4 sm:px-6 lg:px-8 px-4 ">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center z-0">
          Contact
        </h2>
        <div>
          <h4 className="mt-12 text-3xl font-semibold text-blue-500">
            Connect with me
          </h4>
          <p className="text-gray-500 text-xl">
            If you want to know more about me or my work, or if you would just
            <br />
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>
<div className="flex justify-between items-center md:items-stretch  flex-col md:flex-row pb-24">
        <div className="w-80  md:items-end  mt-12 md:mt-6">
          <h1 className="text-2xl font-bold">Email:</h1>
          <a
            href="https://katravthprabhu151@gmail.com"
            className="mb-2 mt-2 font-semibold text-blue-700 block text-2xl"
          >
            katravthprabhu151@gmail.com
          </a>
          <h1 className="text-2xl font-bold">Phone:</h1>
          <a
            href=""
            className="mb-2 mt-2 font-semibold text-blue-700 block text-2xl"
          >
            +91 8008811572
          </a>
          <h1 className="text-2xl font-bold">Address :</h1>
          <a
            href="hello"
            className="mb-2 mt-2 font-semibold text-blue-700 block uppercase"
          >
             Hydrabad, Telangana,
             <br />
            India
          </a>
          
        </div>
        <div>
          <h1 className="text-3xl  font-bold">Social</h1>
          <div className="flex md:justify-start ">
            {contactLinks.map((el) => (
              <a
                href={el.link}
                target="_blank"
                className="mr-5 cursor-pointer mt-8 hover:scale-125"
              >
                <img alt="" className={style.logo} src={el.url} />
                {/* <p className="text-md mt-2 hover:hidden">{el.name}</p> */}
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>

      
    </div>
  );
};
