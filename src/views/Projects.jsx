import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const Projecs = [
    {
      id: 1,
      projectName: "Bath and Body works Front-End Devloper",
      imageUrl:
        "https://i.pinimg.com/originals/8b/d4/68/8bd4680f9123e5063b7c512c6e8ae2a2.jpg",
      imageUrl1:
        "https://www.wjtv.com/wp-content/uploads/sites/72/2020/03/bath-and-body-hand-sanitizer.jpg?strip=1",
      imageUrl2:
        "https://logos-world.net/wp-content/uploads/2020/11/Bath-Body-Works-Symbol.png",
      descripriction:
        "In our project, we construct the layout of some pages of Bath & Body Works, creating a visually interesting home page and user-friendly design, After our website was up and running we ensure that it's functioned on all web browsers, testing, and updating as needed.",
      sourceCode: "https://github.com/Arfeen98/Bathanbodyworks-clone",
      netlifyLink: "https://arfeen98.github.io/Bathanbodyworks-clone/",
      toolsStack:"Java Script ,HTML ,CSS ,Bootstrap,Github"
    },
    {
      id: 2,
      projectName: "BuyWow Clone Front-End Devloper",
      imageUrl1: "https://m.media-amazon.com/images/I/61btBJIfrpL.jpg",
      imageUrl2:
        "https://content.any.run/tasks/6f3d1ed4-3180-40fe-a7ad-e51cfa9e4084/download/screens/524070d0-a20b-4485-ab79-d75633c17e03/image.jpeg",
      imageUrl:
        "https://hungamadeal.co.in/wp-content/uploads/2021/06/mamaearth-wow-wednesday-offer-2-848x477.png",
      descripriction:
        "This project is a clone of , which is a health, grooming, and beauty Products website.This website has end-to-end functionalities from Signup/login and searching the Products and adding products and removing the products from the cart page. .",
      sourceCode: "https://github.com/kosireddisreeram/unit3_constructweek",
      netlifyLink: "https://dazzling-horse-5169fb.netlify.app/",
      toolsStack:"Java Script ,HTML ,CSS ,Bootstrap,Github,Fecth"    },
    {
      id: 3,
      projectName: "Sugar Cosmetics Front-End Devloper",
      imageUrl:
        "https://www.designnominees.com/application/upload/Websites/2020/01/sugar-cosmetics-150.jpg",
      imageUrl1:
        "http://thehardcopy.co/wp-content/uploads/1-1packs-sugarsheetmask-1200x880.jpg",
      imageUrl2:
        "https://www.couponmoto.com/storage/store/description/sugar-cosmetics-coupon-code.png",
      descripriction:
        "sugarcosmetics is an Indian company of cosmetics products. It is one of the leading company or a brand which intends to make lives of mums & expectant mums better and beautiful. India has a growing market demand for cosmetics. People struggle to find the right shade and product and often switch to big foreign brands.",
      sourceCode: "https://github.com/goutham41/sugarcosmetics-app-clone",
      netlifyLink:
        "https://627903a070c89c2f8de0ca72--netlify-thinks-anurag-pverma-is-great.netlify.app/",
        toolsStack:"HTML ,CSS ,Bootstrap,Github,ReactJS,Redux"
    },
    {
      id: 4,
      projectName: "Everhour.com Full Stack Devloper",
      imageUrl:
        "https://camo.githubusercontent.com/11493df939158f4355126aa4185e97bc2ad7db7b5543e6b6d1c657b45e266352/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a4350656a2d65615272576c2d6d5545427064717834512e706e67",
      imageUrl1:
        "http://thehardcopy.co/wp-content/uploads/1-1packs-sugarsheetmask-1200x880.jpg",
      imageUrl2:
        "https://www.couponmoto.com/storage/store/description/sugar-cosmetics-coupon-code.png",
      descripriction:
        "Everhour is an app that calculates your work hours, the work hours of your team, or a particular team member and collaborate this data together into handy detailed reports.Powerful time tracking software with hassle-free integrations",
      sourceCode: "https://github.com/prabhuRV/smooth-dock-1057",
      netlifyLink:
        "https://everhour.netlify.app/",
        toolsStack:"HTML, CSS, Github, ReactJS, Redux, Node JS, MongoDB, Express"
    },
  ];

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-18 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
       
        <div className="mt-8 flex justify-between items-stretch flex-wrap">
          {Projecs.map((ele) => {
            return <Card key={ele.id} {...ele} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
