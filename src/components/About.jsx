import React, { useState, useRef, useEffect, useMemo } from "react";
import firsImage from "../components/images/p1.png";
import secondImage from "../components/images/p2.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import carouselImage from "../components/images/m1.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../components/images/t1.png";
import image2 from "../components/images/t2.png";
import image3 from "../components/images/t3.png";
import image4 from "../components/images/t4.png";
import image5 from "../components/images/t5.png";
import image6 from "../components/images/t6.png";
import deck1 from "../components/images/desc1.png";
import deck2 from "../components/images/desc2.png";
import thumbnail from "../components/images/video1.png";
// import background from "../components/images/contentbottom.png";
import video from "../components/video/Video.mp4";
function About({ setSelected }) {
  const [Thumbnail, setThumbnail] = useState(true);

  const targetRef = useRef(null);
  const callbackFunction = (entries) => {
    const [entry] = entries;

    if (entry.boundingClientRect.top > 0) {
      setSelected("ABOUT US");
    }
  };

  const refOptions = useMemo(() => {
    return {
      root: null,
      rootMargin: "0px",
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
  }, [targetRef, refOptions]);
  const Data = [
    {
      title: "PVE BATTLES",
      description: "Competing in PVE battles to win leaderboard prizes",
      background: image1,
    },
    {
      title: "PVP BATTLES",
      description: "Competing in PVP battles against players",
      background: image2,
    },
    {
      title: "STAKING",
      description: "Stake Arena Master Token and earn passive income",
      background: image3,
    },
    {
      title: "NFT",
      description:
        "Various NFT Characters and Assets available to use in the game",
      background: image4,
    },
    {
      title: "REWARDS",
      description: "Play and get diverse in-game rewards",
      background: image5,
    },
    {
      title: "BONUSES",
      description:
        "Gift Boxes, Airdrops and lots of other in-game bonuses available",
      background: image6,
    },
  ];

  AOS.init({
    once: true,
  });
  const options = {
    center: true,
    responsive: {
      0: {
        items: 1.3,
      },
      990: {
        items: 1.6,
      },
    },
  };

  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    setThumbnail(false);
    vidRef.current.play();
  };
  return (
    <section className="About" id="ABOUT" ref={targetRef}>
      <div className="flexRow">
        <div className="titleSide" data-aos="fade-right">
          <div className="about__Title">
            {/* <div className="svgDiv">
              <svg
                width="207px"
                height="100px"
                style={{ marginInline: "auto" }}
              >
                <text x="0" y="55" className="Top__title">
                  ABOUT US
                </text>
              </svg>
            </div>
            */}
            <p className="TOKENS">ABOUT US</p>

            <div className="bottom__title">arena master</div>
          </div>
          <div className="content__container">
            <p className="fc  content">
              Arena Master is a skill-based matchmaking game combining
              Play-to-Win and Play-to-Earn modes. The game aims to provide a
              real-life gaming experience for people in the gaming domain,
              blockchain technology and the world as a whole The Game was
              developed under the memorandum of game development studio Sambrela
              and Game xChange
            </p>
            <p className="sc content">
              Arena Master players will be rewarded with tokens for winning PVP
              and PVE battles, participating in tournaments, staking and
              engaging referrals
            </p>
          </div>
          <div className="flex">
            <div className="col-6 firstCol">
              <div className="firstDiv">
                <img src={firsImage} alt="p1" />
              </div>
            </div>
            <div className="col-6 secondCol">
              <div className="secondDiv">
                <img src={secondImage} alt="p2" />
              </div>
            </div>
          </div>
        </div>
        <OwlCarousel
          center={true}
          className="owl-theme"
          items="1.20"
          loop
          margin={10}
          {...options}
          data-aos="fade-left"
        >
          <img src={carouselImage} alt="carousel div" />
          <img src={carouselImage} alt="carousel div" />
          <img src={carouselImage} alt="carousel div" />
        </OwlCarousel>
      </div>
      <div className="tokens">
        <div className="tokensTitle">
          {/* <svg width="50" height="50" className="svg">
            <text x="0" y="70" className="svgText">
              TOKENS
            </text>
          </svg> */}
          <p className="TOKENS">TOKENS</p>
          <div className="tokens__bottom__title">AMT TOKEN UTILITY</div>
        </div>
      </div>
      <div className="tokensContent">
        {Data.map((item, index) => {
          return (
            <div data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
              <div key={index} className="token__card">
                <img
                  src={item.background}
                  alt="card background"
                  className="card__image"
                />
                <div className="card__content">
                  <p className="card__title">{item.title}</p>
                  <p className="card__description">{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="deck">
        <div className="deck__title">
          <p className="DOCUMENTATION">DOCUMENTATION</p>
          <div className="WhitePaper__bottom__title">WHITEPAPER & DECK</div>
        </div>
        <div className="grid">
          <div className="grid__child first__child" data-aos="fade-right">
            <a className="sda" href="https://arenavs.com/ArenaWhitepaper.pdf">
              <div className="relative">
                <span className="firstSpan"></span>
                <span className="secondSpan"></span>
                <span className="thirdSpan"></span>

                <div className="bok">
                  <img src={deck1} alt="first deck" className="book" />
                </div>
              </div>
            </a>
          </div>
          <div className="grid__child second__child" data-aos="fade-left">
            <a href="https://arenavs.com/Arenadeck.pdf">
              <div className="relative">
                <span className="firstSpan"></span>
                <span className="secondSpan"></span>
                <span className="thirdSpan"></span>

                <div className="bok">
                  <img src={deck2} alt="second Deck" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="video" data-aos="fade-up">
        <div className="video__title">
          <p className="DOCUMENTATION">TRAILER</p>
          <div className="WhitePaper__bottom__title">TRAILER ARENA MASTER</div>
        </div>
        <div className="videDiv">
          <img
            src={thumbnail}
            alt="thumbnail"
            className={Thumbnail ? "thumbnail" : "none"}
            onClick={() => handlePlayVideo()}
          />

          <video
            controls
            autoPlay={Thumbnail === false ? true : false}
            className="VIDEO"
            ref={vidRef}
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>

      <div className="downloads">
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

export default About;
