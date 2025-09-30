import Skills from "../../hooks/skillsCard";
import { Experience } from "../experionce/experience";
import WorkSteps from "./WorkSteps";
import "../portfolio/portfolio.css"

const workStepData = [
  {
    date: "2021 – 2024 Ariana, Tunisia ",
    title: "Engineering degree in computer science ",
    establishment: " Tek-up university ",
  },
  {
    date: "2018 – 2021 Bizerte, Tunisia",
    title: "Applied bachelor's degree in information technology ",
    establishment: " ISET Bizerte ",
  },
  {
    date: "2017 Bizerte,Tunisia",
    title: "High school diploma ",
    establishment: "High school Bach hamba ",
  },
];

const ExperienceList = [
  {
    id: 1,
    title: "Freelance mobile developer ",
    date: "2024 - Present",
    location: "Tunisia, Bizerte",
    establishment: "Freelance",
    description: [
      "Mobile coaching application (Belong).",
      "Web and mobile hospitalization application for a clinic.",
      "Full-stack development aimed at enhancing user experience, strengthening customer engagement, and increasing productivity by 25%.",
      "Designed and implemented modern interfaces and RESTful APIs with Node.js, adopting a modular architecture and clean, well-structured code.",
      "Implemented secure authentication, compliant with established standards, using JWT and robust access controls.",
      "Secured data and request transfer through the use of middleware and pipes in Express.js.",
      "Applied the SCRUM methodology to ensure quality standards, meet delivery deadlines, and guarantee user satisfaction."
    ],
    capsule: ["Flutter", "Dart","Node.js","MongoDB", "REST API", "Figma", "realTime", "FCM", "SCRUM","Typescript","JWT","Agile","Express.js"]
  },
  {
    id: 2,
    title: "Graduation project - Full-stack developer",
    date: " 03/2024 – 09/2024 ",
    location: "Tunisia, Ariana",
    establishment:"SNDP Agile",
    description: [
      "Design and development of a web and mobile application for queue management with the integration of a mini AIchatbot.",
      "Designed an innovative solution to improve productivity and simplify queue management, while assisting customers through AI model implementation, achieving +35% productivity gains and +25% customer satisfaction improvement.",
      "Refactored legacy code, enhancing long-term system stability and maintainability.",
      "Integrated external mailing and SMS services (Twilio, EmailJS, etc.).",
      "Developed a real-time notification system using Firebase Cloud Messaging (FCM) and WebSocket.",
      "Implemented a scalable architecture with a secure REST API (Express.js, MongoDB) and a robust JWT-based authentication system.",
      "Developed and trained an AI-powered chatbot capable of answering questions and assisting users in real time.",
      "Applied Agile/SCRUM methodology, ensuring 90% on-time delivery rate."
    ],
    capsule: ["Flutter", "Angular", "Node.js", "Dart", "MongoDB", "WebSocket", "Firebase", "FCM", "Twilio", "REST API", "JWT", "SCRUM", "Material-UI", "Python", "NLTK", "ChatBot", "AI", "Flask", "Keras"]
  },
  {
    id: 1,
    title: "Full-stack developer",
    date: "2022 - 2023",
    location: "Tunisia, Ariana",
    establishment: "XFLOWDATA",
    description: [
      "Developed and maintained web and mobile applications, delivering innovative and high-performance solutions.",
      "Actively participated in the development cycle, including sprint planning, task estimation, and continuous delivery of high-quality features.",
      "Collaborated closely with cross-functional teams to ensure smooth integration and an optimal user experience."
    ],
    capsule: ["MobileAPP", "Web development", "REST API", "Figma", "JavaScript", "SCRUM", "Agile"]
  },
];

const WorkProcess = () => {
  return (
    <div
      className="content flex flex-col items-center px-2 py-5 md:py-10 xl:py-35 max-xxl:px-4"
      id="work-process"
    >
      <h2 class="title section-title mb-20">
        <span class="bg">Achievements </span>
        <span class="fg">My <span>Resume</span></span>
      </h2>

      <div className="flex flex-col w-full max-w-3xl space-y-6">
        <h3 className="text-left w-full text-3xl text-gray-700 font-bold mb-6">
          Education
        </h3>
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              style="p-4 sm:p-8 bg-white shadow-md rounded-lg"
              key={index}
            />
          );
        })}
        <h3 className="text-left w-full text-3xl text-gray-700 font-bold mb-6 mt-3">
          Experience
        </h3>
        {
          ExperienceList.map((data, idex) => {
            return (
              <Experience
                title={data.title}
                date={data.date}
                location={data.location}
                establishment={data.establishment}
                description={data.description}
                capsule={data.capsule}
                key={idex}
              />
            )
          })
        }
        <h3 className="text-left w-full text-3xl text-gray-700 font-bold mb-1 mt-10">
          Skills
        </h3>
      </div>
      <div className="flex ">
        <Skills />

      </div>
    </div>
  );
};

export default WorkProcess;
