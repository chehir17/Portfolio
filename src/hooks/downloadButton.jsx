import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function DownloadButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
      >
        <FontAwesomeIcon icon={faDownload} /> Download CV
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <a
            href="Chehir-Ben-Slim.pdf"
            download="Chehir-Ben-Slim.pdf"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            📄 French
          </a>
          <a
            href="Ben_SLIM_Chehir_CV_ENG_2.pdf"
            download="Ben_SLIM_Chehir_CV_ENG_2.pdf"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            📄 English
          </a>
        </div>
      )}
    </div>
  );
}
