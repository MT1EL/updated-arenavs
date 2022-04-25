import React from "react";
import { useMemo, useRef, useEffect } from "react";
import mainLeft from ".//images/mainleft.png";
import mainRight from ".//images/mainright.png";

function Home({ setIsVisible, setSelected }) {
  const targetRef = useRef(null);
  const callbackFunction = (entries) => {
    const [entry] = entries;
    console.log(entry);
    if (entry.boundingClientRect.top > 0) {
      setIsVisible(entry.isIntersecting);
      setSelected("HOME");
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
    <section className="HOME" id="HOME">
      <div className=" mainLeft mainImg ">
        <div className="scale">
          <img src={mainLeft} alt="" />
        </div>
      </div>
      <div className=" mainImg mainRight">
        <div className="scale ">
          <img src={mainRight} alt="" />
        </div>
      </div>
      <div className="Home__Title">
        MEET YOU AT
        <br />
        <span>arena</span>
      </div>
      <div className="desc">FIGHT TO EARN</div>
      <div className="Discover__button">
        <a href="#ABOUT">Discover more</a>
      </div>
      <div className="downloads " ref={targetRef}>
        <div className="inner__downloads">
          <a
            href="https://apps.apple.com/us/app/arena-master/id1527871139"
            target="_blank"
            className="appleStore"
          >
            <img src="https://arenavs.com/images/ml1.png" alt="apple store" />
          </a>{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.Sambrela.ArenaMaster&hl=en&gl=US"
            target="_blank"
            className="appStore"
          >
            <img src="https://arenavs.com/images/ml2.png" alt="app store" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
