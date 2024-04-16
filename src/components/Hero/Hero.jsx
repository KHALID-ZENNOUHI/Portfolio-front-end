import NavItem from "../NavItem/NavItem";
import ProfileImage from "../../assets/images/profile-2.jpeg";
import { FaCalendarDays } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaAt } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
const Hero = () => {
  return (
    <section className="hero">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-6 profile-pic">
          <div
            className="image clip-animation from-left"
            style={{ backgroundImage: `url(${ProfileImage})` }}
          >
            <img src={ProfileImage} alt="Profile" />
          </div>
        </div>
        <div className="col-xl-9 col-lg-8 col-md-6 right-content">
          <h5 className="hi classic-animation" data-delay=".5">
            Hello Everyone <span>👋</span>
          </h5>
          <div className="spacer-15"></div>
          <h1 className="hero-big classic-animation" data-delay=".7">
            I am David Fincher
            <br />I am a
            <span
              className="element"
              data-values="Full stack developer.,  designer.,  manager., "
              data-loop="true"
              data-backdelay="2"
            >
              Full Stack Developer.
            </span>
          </h1>
          <div className="spacer-30"></div>
          <hr className="clip-animation" data-delay="1" />
          <ul className="row profile-info clip-animation" data-delay="1">
            <NavItem classes="col-xl-4 col-lg-6">
              <span>
                <span style={{ color: "yellow" }}>
                  <FaCalendarDays />
                </span>
                &nbsp; 19.03.1988
              </span>
            </NavItem>
            <NavItem classes="col-xl-4 col-lg-6">
              <a target="_blank" href="#">
                <span>
                  <span style={{ color: "yellow" }}>
                    <FaWhatsapp />
                  </span>
                  &nbsp; 987-654-321
                </span>
              </a>
            </NavItem>
            <NavItem classes="col-xl-4 col-lg-6">
              <a target="_blank" href="mailto:example.email.com">
                <span>
                  <span style={{ color: "yellow" }}>
                    {" "}
                    <FaAt />{" "}
                  </span>{" "}
                  &nbsp; example@email.com
                </span>
              </a>
            </NavItem>
            <NavItem classes="col-xl-4 col-lg-6">
              <span>
                <span style={{ color: "yellow" }}>
                  <FaLocationDot />
                </span>
                &nbsp; New York, United States
              </span>
            </NavItem>
          </ul>
        </div>
      </div>
      <div className="spacer-30"></div>
      <p className="clip-animation" data-delay="1.1">
        I am a Creative Developer for interactive projects that usually are
        apps, VR and Creative websites. I Spend most of time coding outstanding
        projects or studying new technologies. to improve my development stack.
        I develop compelling designs that spring to life using transition and
        animations that suit my clients, using the most sophisticated
        technologies available today for fully interactive and responsive
        websites and apps.
      </p>
    </section>
  );
};

export default Hero;
