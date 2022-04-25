import React from "react";
import { newsData } from "./newsData";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
function News() {
  const options = {
    dots: false,
    center: true,
    loop: true,
    responsive: {
      0: {
        items: 1.5,
      },
      990: {
        items: 1.6,
      },
    },
  };
  return (
    <section className="NEWS">
      <div className="team__title">
        <p className="team">NEWS</p>
        <div className="Team__bottom__title">GET THE LATEST INSIGHTS</div>
      </div>

      <OwlCarousel {...options} items="1.20" margin={10} data-aos="fade-left">
        {newsData.map((item, index) => {
          return (
            <div key={index} className="s">
              <a href={item.link} target="_blank" className="s">
                <img src={item.image} alt="news" className="nImage" />
                <h3>{item.text}</h3>
                <h5 className="read__more">Read more</h5>
              </a>
            </div>
          );
        })}
      </OwlCarousel>
    </section>
  );
}

export default News;
