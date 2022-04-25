import React from "react";
import sponsor1 from "../sponsors/sponsorsimages/p2.png";
import sponsor2 from "../sponsors/sponsorsimages/p3.png";
import sponsor3 from "../sponsors/sponsorsimages/p4.png";
import sponsor4 from "../sponsors/sponsorsimages/p5.png";
import sponsor5 from "../sponsors/sponsorsimages/p6.png";
import sponsor6 from "../sponsors/sponsorsimages/p7.png";
import sponsor7 from "../sponsors/sponsorsimages/p8.png";
import sponsor8 from "../sponsors/sponsorsimages/p9.png";
import News from "../news/News";
import { useMemo, useRef, useEffect } from "react";

function Sponsors({ setSelected }) {
  const targetRef = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    console.log(entry);
    if (entry.boundingClientRect.top > 0) {
      setSelected("PARTNERS");
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
    const observer = new IntersectionObserver(callbackFunction(), options);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, options]);
  const sponsors = [
    sponsor1,
    sponsor2,
    sponsor3,
    sponsor4,
    sponsor5,
    sponsor6,
    sponsor7,
    sponsor8,
  ];

  return (
    <section className="PARTNERS" id="PARTNERS" ref={targetRef}>
      <div className="team__title">
        <p className="team">PARTNERS</p>
        <div className="Team__bottom__title">OUR PARTNERS</div>
      </div>

      <div className="sponsorsGrid">
        {sponsors.map((item, index) => (
          <div
            className="card"
            key={item.name}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="sponsors__wraper">
              <div className="sponsors__image">
                <img src={item} alt="team member" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <News />
    </section>
  );
}

export default Sponsors;
