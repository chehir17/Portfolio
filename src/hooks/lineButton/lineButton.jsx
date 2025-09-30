import React, { useRef } from "react";
import { TweenLite, Bounce } from "gsap";
import { Link } from "react-scroll";
import "./linebuttonStyle.css";

const LineButton = ({ text, width = 50, height = 50, strokeWidth = 2, to }) => {
    const pathTop = useRef(null);
    const pathBottom = useRef(null);
    const pathLeft = useRef(null);
    const pathRight = useRef(null);

    // Définition des chemins
    const topLine = `M ${width} ${strokeWidth / 2} L ${width} ${strokeWidth / 2} Z`;
    const topHover = `M ${width} ${strokeWidth / 2} L 0 ${strokeWidth / 2} Z`;

    const bottomLine = `M 0 ${height - strokeWidth / 2} L 0 ${height - strokeWidth / 2} Z`;
    const bottomHover = `M 0 ${height - strokeWidth / 2} L ${width} ${height - strokeWidth / 2} Z`;

    const leftLine = `M ${strokeWidth / 2} 0 L ${strokeWidth / 2} 0 Z`;
    const leftHover = `M ${strokeWidth / 2} 0 L ${strokeWidth / 2} ${height} Z`;

    const rightLine = `M ${width - strokeWidth / 2} ${height} L ${width - strokeWidth / 2} ${height} Z`;
    const rightHover = `M ${width - strokeWidth / 2} ${height} L ${width - strokeWidth / 2} 0 Z`;

    // Animation entrée (hover)
    const handleMouseOver = () => {
        TweenLite.killTweensOf([pathLeft.current, pathBottom.current, pathRight.current, pathTop.current]);

        TweenLite.to(pathLeft.current, 0.125, { attr: { d: leftHover }, delay: 0, ease: Bounce.easeOut });
        TweenLite.to(pathBottom.current, 0.125, { attr: { d: bottomHover }, delay: 0.125, ease: Bounce.easeOut });
        TweenLite.to(pathRight.current, 0.125, { attr: { d: rightHover }, delay: 0.25, ease: Bounce.easeOut });
        TweenLite.to(pathTop.current, 0.125, { attr: { d: topHover }, delay: 0.375, ease: Bounce.easeOut });
    };

    // Animation sortie
    const handleMouseOut = () => {
        TweenLite.killTweensOf([pathLeft.current, pathBottom.current, pathRight.current, pathTop.current]);

        TweenLite.to(pathLeft.current, 0.125, { attr: { d: leftLine }, delay: 0.375, ease: Bounce.easeOut });
        TweenLite.to(pathBottom.current, 0.125, { attr: { d: bottomLine }, delay: 0.25, ease: Bounce.easeOut });
        TweenLite.to(pathRight.current, 0.125, { attr: { d: rightLine }, delay: 0.125, ease: Bounce.easeOut });
        TweenLite.to(pathTop.current, 0.125, { attr: { d: topLine }, delay: 0, ease: Bounce.easeOut });
    };

    return (

        <Link
            to={to}
            smooth={true}
            duration={900}
            className="line-button"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            style={{ width: `${width}px`, height: `${height}px` }}
        >
            {text}
            <svg strokeWidth={strokeWidth}>
                <path ref={pathTop} d={topLine} stroke="black" />
                <path ref={pathBottom} d={bottomLine} stroke="black" />
                <path ref={pathLeft} d={leftLine} stroke="black" />
                <path ref={pathRight} d={rightLine} stroke="black" />
            </svg>
        </Link>
    );
};

export default LineButton;
