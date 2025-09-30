import { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`rounded-xl hover:drop-shadow-2xl shadow-gray-300 ease-out duration-1000 ${
        style && style
      }`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className={`w-70 h-6 sm:w-55 sm:h-8 sm:m-0 ${
          hover ? "bg-blue-400 shadow-xl text-white cursor-pointer" : "bg-[#E1F5FE]"
        } text-center center rounded-full transition-all duration-300`}
      >
      <h3 className="text-sm font-semibold">{data?.date}</h3>
      </div>
      <div className="mt-1 xs:mt-3 sm:mt-4">
        <p className="font-bold sm:text-xl xs:text-sm text-gray-600">{`${data?.title}`} - <span className="text-sm font-semibold text-[14px] sm:text-[14px] xs:text-[10px] text-gray-400">{data?.establishment}</span></p>
      </div>
    </div>
  );
};

export default WorkSteps;
