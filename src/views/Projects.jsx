import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const Projecs = [
    {
      id: 1,
      projectName: "Bath and Body works Clone",
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
    },
    {
      id: 2,
      projectName: "BuyWow Clone",
      imageUrl1: "https://m.media-amazon.com/images/I/61btBJIfrpL.jpg",
      imageUrl2:
        "https://content.any.run/tasks/6f3d1ed4-3180-40fe-a7ad-e51cfa9e4084/download/screens/524070d0-a20b-4485-ab79-d75633c17e03/image.jpeg",
      imageUrl:
        "https://hungamadeal.co.in/wp-content/uploads/2021/06/mamaearth-wow-wednesday-offer-2-848x477.png",
      descripriction:
        "This project is a clone of , which is a health, grooming, and beauty Products website.This website has end-to-end functionalities from Signup/login and searching the Products and adding products and removing the products from the cart page. We had added many sorting techniques to sort the products on their based on their ratings, and prices, alphabetically. We had incorporated an API to automatically detect the user location which has been entered in the shipping address.",
      sourceCode: "https://github.com/kosireddisreeram/unit3_constructweek",
      netlifyLink: "https://dazzling-horse-5169fb.netlify.app/",
    },
    {
      id: 3,
      projectName: "Sugar Cosmetics clone",
      imageUrl:
        "https://www.designnominees.com/application/upload/Websites/2020/01/sugar-cosmetics-150.jpg",
      imageUrl1:
        "http://thehardcopy.co/wp-content/uploads/1-1packs-sugarsheetmask-1200x880.jpg",
      imageUrl2:
        "https://www.couponmoto.com/storage/store/description/sugar-cosmetics-coupon-code.png",
      descripriction:
        "In this project we have tried to manipulate Dom elements, Styling using  CSS with React JS and tried to make website more dynamic and responsive. With our efforts and the technology that we have learned in Unit-4 in the Masai School, we were able to clone the website in 6 days with the same looking and some features.",
      sourceCode: "https://github.com/goutham41/sugarcosmetics-app-clone",
      netlifyLink:
        "https://627903a070c89c2f8de0ca72--netlify-thinks-anurag-pverma-is-great.netlify.app/",
    },
  ];

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
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
