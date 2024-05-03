import { Link } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { skills, experiences } from "../constants";
import CtaComp from "../components/CtaComp";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I&apos;m{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Sasindu
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I am a Computer Engineer with a passion for building innovative
          solutions that harness the full potential of technology. I have
          experience in developing web applications using modern technologies
          across software, hardware, networking, and databases. I specialize in
          software technologies such as C, Java, Python, C++, HTML, CSS, and
          JavaScript, with expertise in frameworks like React.js, Next.js,
          Django, node js, express js, fast API and Django Rest Framework.
          Additionally, I have hands-on experience with hardware design using
          components like Arduino. My networking skills encompass knowledge of
          AWS services for cloud computing. I am proficient in database
          technologies and have worked with databases such as MySQL, MongoDB,
          and PostgreSQL. I am a quick learner and always eager to learn new
          technologies to enhance my skills and contribute effectively in the
          field of computer engineering.
        </p>
      </div>

      <div className="py-10 flex flex-col ">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div key={index} className="block-container w-28 h-28">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/4 h-1/4 object-contain"
                />
                <p className="mt-3 text-slate-500">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            As a Software Developer at{" "}
            <Link
              to="https://www.Xoftify.com"
              className="text-blue-500 hover:text-blue-800 underline"
            >
              Xoftify
            </Link>
            , I was instrumental in developing innovative web applications using
            modern technologies. This professional experience, along with the
            collaborative academic projects I undertook at my university, has
            significantly shaped my technical expertise. This journey has not
            only enhanced my understanding of software engineering but also
            ignited an enduring passion for technology.
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex items-center justify-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
                iconStyle={{ background: experience.iconBg }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base m-0">
                    {experience.desc}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      className="text-black-500/50 font-normal pl-1 text-small"
                      key={index}
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
      <CtaComp />
    </section>
  );
};

export default About;
