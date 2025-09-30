import { useState } from "react";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Projects = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-106 rounded-lg outline-[#FFFFFF] bg-white hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200">
      <div className="relative cursor-pointer group" onClick={() => setIsOpen(true)}>
        <img
          src={data?.images[0].original}
          alt={`${data?.title} image`}
          className="w-full h-auto hover:shadow-lg"
        // className="w-full h-auto rounded-none transition-transform duration-200 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <FontAwesomeIcon icon={faPlus} size="xl" className="text-white" />
        </div>
      </div>

      <div className="p-4 xs:p-8">
        <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 text-xs xxs:text-[14px] text-wrap"
        >
          {data?.description}
        </p>
        <a
          href={data?.link}
          className="btn hover:border-blue-700 hover:text-blue-700 bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
        >
         View code
          <span className="ms-1 xs:ms-3">
            <FontAwesomeIcon icon={faArrowRight} size="l" />
          </span>
        </a>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="w-[70%] max-w-5xl">
            <ImageGallery
              items={data.images}
              showPlayButton={true}
              showFullscreenButton={true}
              lazyLoad={true}
              showNavigation={true}
              useBrowserFullscreen={true}
              showBullets={true}
              showIndex={true}
            />
            <button
              className="absolute top-5 right-5 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
