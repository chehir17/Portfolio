import Projects from "./Projects";
import belongAppposter from "../../assets/images/portfolio-images/belongAppposter.png";
import belong2 from "../../assets/images/portfolio-images/belong2.png";
import belong3 from "../../assets/images/portfolio-images/belong3.png";
import belong4 from "../../assets/images/portfolio-images/belong4.png";
import belong5 from "../../assets/images/portfolio-images/belong5.png";
import belong6 from "../../assets/images/portfolio-images/belong6.png";
import belong7 from "../../assets/images/portfolio-images/belong7.png";
///
import agileposter from "../../assets/images/portfolio-images/agilepPoster.jpg";

import kablem1 from "../../assets/images/portfolio-images/kablem1.png";
import kablem2 from "../../assets/images/portfolio-images/kablem2.png";
import kablem3 from "../../assets/images/portfolio-images/kablem3.png";
import kablem4 from "../../assets/images/portfolio-images/kablem4.png";
import kablem5 from "../../assets/images/portfolio-images/kablem5.png";
import kablem6 from "../../assets/images/portfolio-images/kablem6.png";
import kablem7 from "../../assets/images/portfolio-images/kablem7.png";
import kablem8 from "../../assets/images/portfolio-images/kablem8.png";
import kablem9 from "../../assets/images/portfolio-images/kablem9.png";
import kablem10 from "../../assets/images/portfolio-images/kablem10.png";
import kablem11 from "../../assets/images/portfolio-images/kablem11.png";
import kablem12 from "../../assets/images/portfolio-images/kablem12.png";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./portfolio.css"
const projectData = [
  {
    id: 1,
    images: [
      { original: belongAppposter, thumbnail: belongAppposter },
      { original: belong2, thumbnail: belong2 },
      { original: belong3, thumbnail: belong3 },
      { original: belong4, thumbnail: belong4 },
      { original: belong5, thumbnail: belong5 },
      { original: belong6, thumbnail: belong6 },
      { original: belong7, thumbnail: belong7 },
    ],
    category: "Mobile Appllication Ios/Android",
    title: "Coaching Mobile App",
    description:
      "Crafting Coaching Application, responsive interfaces that balance aesthetic appeal with practical functionality.",
    link: "https://github.com/chehir17/Belong",
  },
  {
    id: 2,
    images: [
      { original: agileposter, thumbnail: agileposter },
    ],
    category: "Mobile & web APP",
    title: " web and mobile application for queue management.",
    description:
      "Design and development of a web and mobile application for queue management with the integration of a mini AI chatbot.",
    link: "https://github.com/chehir17/QMSAgileMobile/tree/master",
  },
  {
    id: 3,
    images: [
      { original: kablem1, thumbnail: kablem1 },
      { original: kablem2, thumbnail: kablem2 },
      { original: kablem3, thumbnail: kablem3 },
      { original: kablem4, thumbnail: kablem4 },
      { original: kablem5, thumbnail: kablem5 },
      { original: kablem6, thumbnail: kablem6 },
      { original: kablem7, thumbnail: kablem7 },
      { original: kablem8, thumbnail: kablem8 },
      { original: kablem9, thumbnail: kablem9 },
      { original: kablem10, thumbnail: kablem10 },
      { original: kablem11, thumbnail: kablem11 },
      { original: kablem12, thumbnail: kablem12 },
    ],
    category: "Mobile & web APP",
    title: "Web and Mobile Application for Quality Tools Management and Optimization. ",
    description:
      "Design and development of a web and mobile application for Quality Tools Management and Optimization.",
    link: "https://github.com/chehir17/platform_KablemSPA_Front_End",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content md:pt-15 xl:pt-25 pb-10 md:pb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <h2 class="title section-title mb-5">
            <span class="bg">Portfolio</span>
            <span class="fg">My <span>Projects</span></span>
          </h2>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my skills in creating web and mobile applications with user-centric and visually appealing interfaces.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 rounded-lg">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#!"
          className="btn bg-[#4FC3F7] hover:gap-5 hover:bg-[#4faef7] hover:shadow-xl hover:text-white text-white rounded-md py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
          <span className="ms-1 xs:ms-3">
            <FontAwesomeIcon icon={faCaretDown} size="l" className="" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
