import React, { useMemo, useRef, useEffect } from "react";
import { TeamData } from "./teamData";
import linkedinImg from "../team/teamImages/in.png";
function Team({ setSelected }) {
  const targetRef = useRef(null);
  const callbackFunction = (entries) => {
    // const [entry] = entries;
    if (entries[0].boundingClientRect.top > 0) {
      setSelected("OUR TEAM");
    }
  };

  const options = useMemo(() => {
    return {
      root: null,
      rootMargin: "50px",
      threshold: 0.3,
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);
  return (
    <section className="TEAM" id="TEAM" ref={targetRef}>
      <div className="team__title">
        <p className="team">TEAM</p>
        <div className="Team__bottom__title">OUR TEAM</div>
      </div>
      <div className="Teamgrid">
        {/* ref={targetRef} */}
        {TeamData.map((item, index) => (
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
                <img src={linkedinImg} alt="linkedin" />
              </a>
              <img src={item.image} alt="team member" />
            </div>
            <div className="name">
              <p className="fullname">{item.name}</p>
              <p className="position">{item.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
