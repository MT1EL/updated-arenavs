import React from "react";
import { AdvisorData } from "./advisorsData";
import linkedinImg from "../team/teamImages/in.png";
import twitterImg from "../advisors/advisorImages/twitter.png";
function Advisors({ setSelected }) {
  return (
    <section className="TEAM">
      <div className="team__title">
        <p className="team">ADVISORS</p>
        <div className="Team__bottom__title">OUR ADVISORS</div>
      </div>
      <div className="Teamgrid">
        {AdvisorData.map((item, index) => (
          <div
            className="card"
            key={item.name}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="Team__image">
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="linkedinLink"
              >
                <img
                  src={item.name === "HANIFF KNIGHT" ? twitterImg : linkedinImg}
                  alt="linkedin"
                />
              </a>
              <img src={item.image} alt="team member" />
            </div>
            <div className="ad__name">
              <p className="fullname ">{item.name}</p>
              <p className="position ">{item.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Advisors;
