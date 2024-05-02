import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box text-sm">
    <p className="font-medium text-sm text-center">{text}</p>
    <Link to={link} className="neo-btn neo-brutalism-white">
      {btnText}
      <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
    </Link>
  </div>
);
InfoBox.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

const renderContent = {
  1: (
    <h1 className="text-sm sm:leading-snug text-center neo-brutalism-blue py-2 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Sasindu</span>👋
      <br />A Computer Engineer from Sri Lanka.
    </h1>
  ),
  2: (
    <InfoBox
      text={
        "I am a Computer Engineering undergraduate at the University of Peradeniya, Sri Lanka. Also work as a full stack developer in Xoftify company."
      }
      link={"/about"}
      btnText={"More about me"}
    />
  ),
  3: (
    <InfoBox
      text={
        "Contributed to Xoftify real world projects and also have my own projects. I love to work with new technologies and learn new things."
      }
      link={"/projects"}
      btnText={"Visit my portfolio"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Need a website or a web application? I can help you with that. Let's work together and make your dream project a reality."
      }
      link={"/contact"}
      btnText={"Let's talk "}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

HomeInfo.propTypes = {
  currentStage: PropTypes.number.isRequired,
};

export default HomeInfo;
