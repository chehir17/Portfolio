import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faLaptop, faMobileScreen } from "@fortawesome/free-solid-svg-icons";

const icons = {
  faCode: faCode,
  faLaptop: faLaptop,
  faMobileScreen: faMobileScreen,
};

const InformationSummary = ({ item }) => {
  return (
    <div className="bg-[#a7defc] text-center shadow-md hover:shadow-lg rounded-lg cursor-pointer transition duration-400 ease-in-out transform hover:-translate-y-3 hover:scale-105">
      <div className="w-auto h-auto mx-2 sm:mx-4 my-5 xxs:my-5 sm:my-[15px]">
        <FontAwesomeIcon
          icon={icons[item.icon]}
          className="bg-[#4FC3F7] px-3 py-2 rounded-lg text-white text-2xl "
        />
        <p className="text-[16px] text-white xxs:text-[18px] sm:text-[20px] font-semibold text-gray-700 flex items-center justify-center gap-2">
          {item.description}
        </p>
      </div>
    </div>
  );
};

export default InformationSummary;