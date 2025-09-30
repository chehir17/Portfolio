import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Profession from "../components/profession/Profession";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-gray-100 pt-30">
        <WorkProcess />
      </div>
      <div className="portfolio-background">
        <Portfolio />
      </div>
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      {/* <div className="blog-background">
        <Blog />
      </div> */}
      <div className="blog-background">
        <Profession />
      </div>
      {/* <HappyClients /> */}
      <Contact />
    </div>
  );
};

export default Home;
