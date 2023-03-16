import React from "react";
import "./hero.css";
import IMG from "../../assets/pic.webp";
import { data } from "./data";

const Hero = () => {
  return (
    <section className="hero" id="about">
      <div className="container hero__container">
        <div className="hero__left">
          <h1>
            Hello, I am <span>Naunihal Dhillon</span>
          </h1>
          <h2>A Full Stack Web Developer</h2>

          <p>
            I am a Web Developer with strong experience in building modern,
            responsive web interfaces. I specialize in ReactJS, HTML, PHP, CSS
            and JavaScript.
          </p>

          <div className="hero_btn d_flex">
            <div className="col-1">
              <h4>Social Profiles</h4>

              <div className="socials">
                {data.map((item) => (
                  <a
                    href={item.link}
                    key={item.id}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icons"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero__right">
          <div className="hero__right-image">
            <img src={IMG} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
