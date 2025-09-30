import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "./GaspButton.css";

const GsapButton = () => {
  const openModalRef = useRef(null);
  const modalRef = useRef(null);
  const closeModalRef = useRef(null);
  const [isClient, setIsClient] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");

  const baseWidth = 50;
  const IS_VISIBLE_CLASS = "is-visible";

  useEffect(() => {
    setIsClient(true);

    setPdfUrl("https://drive.google.com/uc?export=download&id=1EkUiYS7VHxCj9WAtb4FtLrWJ9xslMBuy");
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const openModal = openModalRef.current;
    const modal = modalRef.current;
    const closeModal = closeModalRef.current;

    if (!openModal || !modal || !closeModal) return;

    const handleOpen = () => {
      modal.classList.add(IS_VISIBLE_CLASS);
      gsap.to(modal, { autoAlpha: 1, duration: 0.5 });
    };

    const handleClose = () => {
      gsap.to(modal, {
        autoAlpha: 0,
        duration: 0.5,
        onComplete: () => modal.classList.remove(IS_VISIBLE_CLASS)
      });
    };

    openModal.addEventListener("click", handleOpen);
    closeModal.addEventListener("click", handleClose);

    const handleEsc = (e) => {
      if (e.key === "Escape" && modal.classList.contains(IS_VISIBLE_CLASS)) {
        handleClose();
      }
    };
    document.addEventListener("keyup", handleEsc);

    return () => {
      openModal.removeEventListener("click", handleOpen);
      closeModal.removeEventListener("click", handleClose);
      document.removeEventListener("keyup", handleEsc);
    };
  }, [isClient]);


  const PdfViewer = () => {
    if (!pdfUrl) return <div className="text-white p-4">Loading...</div>;

    return (
      <div className="text-white p-8">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">My Resume</h3>
          <p className="text-gray-400 mb-6">Available for viewing and download</p>

          <div className="space-y-4">
   
            <a
              href="https://drive.google.com/file/d/1EkUiYS7VHxCj9WAtb4FtLrWJ9xslMBuy/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-lg transition-colors font-medium gap-3"
            >
              <span>📄</span>
              View in Google Drive
            </a>
            
            <a
              href={pdfUrl}
              download="Chehir-Ben-Slim-Resume.pdf"
              className="flex items-center justify-center w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-lg transition-colors font-medium gap-3"
            >
              <span>📄</span>
              Download PDF
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-600">
            <p className="text-sm text-gray-400">
              File hosted on Google Drive
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="wrapper">
        <button className="open-modal shadow-lg" ref={openModalRef}>
          View Resume
        </button>
      </div>

      <div className="modal" ref={modalRef} style={{ opacity: 0 }}>
        <div className="modal-dialog">
          <button className="close-modal cursor-pointer" ref={closeModalRef}>✕</button>
          <section className="modal-content">
            {isClient && <PdfViewer />}
          </section>
        </div>
      </div>
    </>
  );
};

export default GsapButton;