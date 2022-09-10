import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import heroBg from "../assets/giphy.gif";
const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={darkMode === true ? "bg-white" : "bg-gray-900"}>
      <div className="max-w-6xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt- pt-20 pb-1">
        <h2
          className={
            darkMode
              ? "text-5xl font-bold px-4 md:px-0 text-center"
              : "text-5xl font-bold px-4 md:px-0 text-center text-white"
          }
        >
          About Me
        </h2>
        <div>
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={heroBg}
            alt=""
            className="md:w-60 hidden sm:block mx-auto"
          />
          <motion.div>
            <p
              className={
                darkMode
                  ? "m-auto mt-4 text-xl text-justify text-cyan-500 "
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              An aspiring full-stack web developer specializing in MERN Stack.
              Skilled, collaborative, and attentive developer with a drive to
              develop the most relevant products with more than five
              collaborative and single personal projects. Willing to learn and
              work across new technologies in the web development domain.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
