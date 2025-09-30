import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tilt from 'react-parallax-tilt';

gsap.registerPlugin(ScrollTrigger);

// ProgressCircle component
function ProgressCircle({ percent, index }) {
    const circleRef = useRef(null);
    const groupRef = useRef(null);

    useEffect(() => {
        const circle = circleRef.current;
        const group = groupRef.current;
        const radius = 45;
        const circumference = 2 * Math.PI * radius;

        // Animation du cercle avec ScrollTrigger
        gsap.fromTo(
            circle,
            { strokeDashoffset: circumference },
            {
                strokeDashoffset: circumference * (1 - percent / 100),
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: group,
                    start: "top 80%",
                    toggleActions: "play none none reset",
                },
            }
        );

        // Effet "scale + glow" au chargement
        gsap.fromTo(
            group,
            { scale: 0.8, opacity: 0 },
            {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: group,
                    start: "top 90%",
                },
            }
        );
    }, [percent]);

    return (
        <svg
            ref={groupRef}
            className="w-24 h-24"
            viewBox="0 0 100 100"
        >
            <circle cx="50" cy="50" r="45" stroke="#5fb7fa" strokeWidth="10" fill="none" opacity="0.2" />
            <circle
                ref={circleRef}
                cx="50"
                cy="50"
                r="45"
                stroke="#5fb7fa"
                strokeWidth="10"
                fill="none"
                strokeDasharray={2 * Math.PI * 45}
                strokeLinecap="round"
            // className="drop-shadow-[0_2px_2px_rgba(30,58,138,0.7)]"
            />
            <text x="50%" y="50%" textAnchor="middle" dy="0.3em" className="fill-[#5fb7fa] font-bold text-lg">
                {percent}%
            </text>
        </svg>
    );
}

// SkillCard component
function SkillCard({ title, percent, index }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(card, {
                x: x * 0.1,
                y: y * 0.1,
                rotationX: -y * 0.05,
                rotationY: x * 0.05,
                duration: 0.25,
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card, {
                x: 0,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                duration: 0.5,
                ease: "elastic.out(1,0.4)",
            });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <>
            <Tilt tiltReverse={true}>
                <div
                    ref={cardRef}
                    className="bg-white shadow-xl rounded-2xl p- flex flex-col items-center justify-center w-45 h-45 cursor-pointer"
                >
                    <h3 className="text-xl font-bold text-[#039BE5] mb-4">#{title}</h3>
                    <ProgressCircle percent={percent} index={index} />
                </div>
            </Tilt>
        </>


    );
}

// Main Skills List
export default function Skills() {
    const [showAll, setShowAll] = useState(false);

    const skills = [
        { title: "JavaScript", percent: 75 },
        { title: "Python", percent: 65 },
        { title: "Node.JS", percent: 75 },
        { title: "React.JS", percent: 70 },
        { title: "Express.JS", percent: 80 },
        { title: "Angular.JS", percent: 65 },
        { title: "Flutter", percent: 80 },
        { title: "Laravel", percent: 70 },
        { title: "Django", percent: 65 },
        { title: "MySQL", percent: 85 },
        { title: "MongoDB", percent: 85 },
        { title: "Docker", percent: 50 },
        { title: "DevOps", percent: 60 },
        { title: "Figma", percent: 70 },
        { title: "Bootstrap", percent: 95 },
        { title: "Material-UI", percent: 90 },
        { title: "AGILE/SCRUM", percent: 95 },
        { title: "UML", percent: 95 },
    ];

    const visibleSkills = showAll ? skills : skills.slice(0, 4);

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-10 p-10">
                {visibleSkills.map((skill, index) => (
                    <SkillCard
                        key={index}
                        title={skill.title}
                        percent={skill.percent}
                        index={index}
                    />
                ))}
            </div>

            {/* Toggle button */}
            <button
                onClick={() => setShowAll(!showAll)}
                className="btn hover:bg-[#4faef7] text-white hover:shadow-2xl shadow-lg bg-[#4FC3F7] text-sm sm:py-5 xs:text-[17px] font-semibold hover:gap-3 xs:hover:gap-5 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
            >
                {showAll ? "See less" : "See more"}
                <span className="ms-1 xs:ms-3">
                    <FontAwesomeIcon
                        icon={faCaretDown}
                        size="l"
                        className={`transform transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                    />
                </span>
            </button>
        </div>
    );
}

