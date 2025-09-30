import chehir from "../../assets/images/chehir.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import GsapButton from "../../hooks/GsapButton";
import { icon } from "@fortawesome/fontawesome-svg-core";

// Information summary data
const informationSummaryData = [
  { id: 1, icon: "faLaptop", description: "Front-End Dev" },
  { id: 2, icon: "faMobileScreen", description: "Flutter ,ios,Android" },
  { id: 3, icon: "faCode", description: "Full-Stack Apps" },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Ben Slim Chehir
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I'm a Full Stack Developer with solid experience in designing and developing web and mobile applications. Passionate
            about new technologies, I have strong proficiency in various frameworks and programming languages, both in front
            end and back-end development
          </p>
          <GsapButton />
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item}  icon={icon[item.icon]} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-300 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={chehir}
          alt="chehir"
        />
      </div>
    </div>
  );
};

export default Introduction;
