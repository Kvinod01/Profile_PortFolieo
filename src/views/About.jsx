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
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4 md:mt-0 pt-24 pb-1">
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
            className="md:w-40 hidden sm:block mx-auto"
          />
          <motion.div>
           
            <p
              className={
                darkMode
                  ? "mt-4 text-xl text-justify text-cyan-500"
                  : "mt-4 text-xl text-justify text-white"
              }
            >
              An aspiring Full Stack Web Developer My Name is Katravath Prabhu  from Masai School having
              specialization in MERN stack. Self-motivated, logical, curious,
              observant, multitasking, problem-solving, team player that has the
              technical skills to write web-based products using JavaScript,
              HTML, CSS, React, Redux, Bootstrap, and CHAKRA UI. Have a deep
              passion for coding and looking for a job opportunity in a
              technology-driven organization that would help to enhance my
              career and my technical knowledge and at the same time showcase my
              technical skills to the best of my ability.
            </p>
          </motion.div>
         
        </div>
      </div>
    </div>
  );
};

export default About;
