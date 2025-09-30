import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import paralaximg from "../../assets/images/portfolio-images/paralax.png";

gsap.registerPlugin(ScrollTrigger);

const WorkTogether = () => {
  const bgRef = useRef(null);

  useEffect(() => {
    const el = bgRef.current;

    gsap.to(el, {
      backgroundPosition: "50% 100%", // moves the background image
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom", // when section enters viewport
        end: "bottom top",   // when section leaves viewport
        scrub: true,         // smooth scroll effect
      },
    });
  }, []);

  return (
    <div
      ref={bgRef}
      className="relative py-20 max-w-full bg-center bg-cover"
      style={{
        backgroundImage: `url(${paralaximg})`,
        backgroundAttachment: "scroll",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/70 bg-opacity-60"></div>

      <div className="relative z-10 max-w-169 mx-auto px-2 text-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Do you have a Project Idea? Let's discuss your project!
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          I'm always open to discussing new projects and creative ideas. Let's
          connect and build something amazing together.
        </p>
        <a
          href="mailto:benslimchehir@gmail.com?subject=Work%20Inquiry&body=Hello,%20I%20would%20like%20to%20discuss%20a%20project."
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
        >
          Let's work Together
          <FontAwesomeIcon
            icon={faArrowRight}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
