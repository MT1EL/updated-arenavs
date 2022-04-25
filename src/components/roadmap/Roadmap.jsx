import React, { useRef, useMemo, useEffect } from "react";
import { Data } from "./roadmapData";
import image1 from "../images/contentbg_left.png";
import image2 from "../images/contentbg_right.png";
function Roadmap({ setSelected }) {
  const targetRef = useRef(null);
  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.boundingClientRect.top > 0) {
      setSelected("ROADMAP");
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
    <section className="ROADMAP" id="ROADMAP" ref={targetRef}>
      <img src={image1} alt="contentbg" className="contentbackground" />
      <img src={image2} alt="contentbg" className="contentbackground" />
      <div className="road__title">
        <p className="roadmap">ROADMAP</p>
        <div className="Roadmap__bottom__title">PROJECT ROADMAP</div>
      </div>
      <div className="roadmap__container">
        {Data.map((item, index) => (
          <div key={item.title} className={`wrapper  wraper${index}`}>
            <div className="image">
              <div className="image__container">
                <img src={item.image} alt="numbeer" />
                <span className="imageSpan"></span>
              </div>
              <div className="imageShadow"> </div>
            </div>
            <div>
              <div className="roadmap__title">{item.title}</div>
              <div className="lists">
                {item.list.map((lis, index) => (
                  <ul className="list" key={index}>
                    <div className={lis.checked ? "cheked" : "noCHek"}></div>
                    <li className="roamap__li ">{lis.li}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Roadmap;
