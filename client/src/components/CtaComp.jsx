import { Link } from "react-router-dom";
import "./styles.css";

const CtaComp = () => {
  return (
    <section className="cta">
      <p className="custom-gradient-text cta-text">
        Have a project in mind? <br className="sm:block hidden" /> Let&apos;s
        build something amazing together!
      </p>
      <Link to="/contact" className="custom-btn-bg">
        Contact Me
      </Link>
    </section>
  );
};

export default CtaComp;
