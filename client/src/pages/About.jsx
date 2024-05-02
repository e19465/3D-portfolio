import { skills } from "../constants";

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
    </section>
  );
};

export default About;
