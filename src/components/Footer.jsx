import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReddit } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import img from "../components/images/mainright.png";
function Footer() {
  return (
    <section className="Footer">
      <div className="f__container">
        <div className="footer__title" data-aos="fade-right">
          <p className="team">GET IN TOUCH</p>
          <div className="Team__bottom__title">
            FOR PARTNERSHIPS & CONTENT CREATION
          </div>
        </div>
        <p className="footer__paragraph" data-aos="fade-right">
          Interestingly, there is no limit to growing your skills in-game, and
          we ensure this by ranking you based on your skills and rewarding you
          with our token as you grow in skills.
        </p>
        <div className="inputs" data-aos="fade-right">
          <input type="text" className="input" placeholder="Enter your name" />
          <input
            type="email"
            className="input"
            placeholder="Enter your Email"
          />
          <input
            type="text"
            className="input email"
            placeholder="Enter your message"
          />
          <button
            type="submit"
            className="footer__button"
            data-aos="fade-right"
          >
            get in touch
          </button>
          <span className="line"></span>
        </div>
        <div className="footer__downloads" data-aos="fade-up">
          <div className="footer__inner__downloads">
            <a
              href="https://apps.apple.com/us/app/arena-master/id1527871139"
              target="_blank"
              rel="noreferrer"
              className="appleStore"
            >
              <img src="https://arenavs.com/images/ml1.png" alt="apple store" />
            </a>{" "}
            <a
              href="https://play.google.com/store/apps/details?id=com.Sambrela.ArenaMaster&hl=en&gl=US"
              target="_blank"
              rel="noreferrer"
              className="appStore"
            >
              <img src="https://arenavs.com/images/ml2.png" alt="app store" />
            </a>
          </div>
        </div>
        <div className="footer__icons" data-aos="fade-up">
          <p>Join our community</p>
          <div className="icons__flex">
            <a
              href="https://www.reddit.com/user/ArenaMasterToken"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faReddit} className="brandIcons" />
            </a>
            <a
              href="https://t.me/ArenaMasters"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faTelegram} className="brandIcons" />
            </a>
            <a
              href="https://twitter.com/arenamastergame"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faTwitter} className="brandIcons" />
            </a>
            <a
              href="https://discord.com/invite/9U72nUJDAM"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faDiscord} className="brandIcons" />
            </a>
            <a
              href="https://medium.com/@ArenaMasterGame"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <FontAwesomeIcon icon={faMedium} className="brandIcons" />
            </a>
          </div>
        </div>

        <div className="newsletter" data-aos="fade-up">
          <p className="news__title">Subscribe to our newsletter</p>
          <input
            type="email"
            className="news__input "
            placeholder="Enter your Email"
          />
          <button type="button" className="news__button">
            Subscribe
          </button>
        </div>
        <p className="copyRight">© 2022 Arena. All rights reserved.</p>
      </div>
      <img src={img} alt="footer" className="footerImg" />
    </section>
  );
}

export default Footer;
