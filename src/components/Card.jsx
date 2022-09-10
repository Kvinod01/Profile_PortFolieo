import React from "react";
import { motion } from "framer-motion";
import style from "./Navbar.module.css";
const Card = (props) => {
  const {
    projectName,
    sourceCode,
    imageUrl,
    imageUrl1,
    imageUrl2,
    netlifyLink,
    descripriction,
    toolsStack
  } = props;
  console.log(projectName);
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8"
    >
    
        <img class="rounded-t-lg w-full h-60" src={imageUrl} alt="" />
     
    
      <div class="p-4">
        <h5 class="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-blue-500">
          {projectName}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {descripriction}
        </p>
       
        <h5 class="mt-2 flex text-x py-3 font-bold tracking-tight text-fuchsia-700 dark:text-blue-500">
        ToolStack : <p class="mb-3 font-normal text-sky-600 dark:text-gray-400"> {toolsStack}</p>
        </h5>
        <div className={style.viewItems}>
          <a
            href={sourceCode} target="_blank"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Github Code
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href={netlifyLink} target="_blank"
            class="inline-flex items-center  py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            View site
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
