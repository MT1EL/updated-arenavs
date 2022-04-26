import React, { useState } from "react";

function Navbar({ isVisible, setSelected, selected }) {
  const [showLinks, setShowLinks] = useState(false);

  const links = [
    { link: "HOME", id: "#HOME" },
    { link: "ABOUT US", id: "#ABOUT" },
    { link: "ROADMAP", id: "#ROADMAP" },
    { link: "TOKENOMICS", id: "#TOKENOMICS" },
    { link: "OUR TEAM", id: "#TEAM" },
    { link: "PARTNERS", id: "#PARTNERS" },
    { link: "WHITEPAPER", id: "https://arenavs.com/ArenaWhitepaper.pdf" },
    { link: "DECK", id: "https://arenavs.com/Arenadeck.pdf" },
  ];
  function handleClick(item) {
    setShowLinks(false);
    setSelected(item.link);
  }
  return (
    <div className="navbar">
      <nav className={isVisible ? "navbar" : ""}>
        <div className={isVisible ? "Vlogo" : "sd"}>
          <img src="https://arenavs.com/images/logo.png" alt="logo" />
        </div>
        <ul className={showLinks ? "links show" : "links"}>
          {links.map((item) => {
            return (
              <a
                key={item.link}
                className={
                  selected === item.link ? " linkTag selected" : " linkTag"
                }
                href={item.id}
                target={
                  item.link === "WHITEPAPER" || item.link === "DECK"
                    ? "_blank"
                    : "_top"
                }
                rel="noreferrer"
                onClick={() => handleClick(item)}
              >
                {item.link}
              </a>
            );
          })}
        </ul>

        <div
          className={showLinks ? "close" : "burger"}
          onClick={() => setShowLinks(!showLinks)}
        >
          <span className={showLinks ? "close__span1" : "burger__span1"}></span>
          <span className={showLinks ? "close__span2" : "burger__span2"}></span>
          <span className={showLinks ? "close__span3" : "burger__span3"}></span>
          <span className={showLinks ? "close__span4" : "burger__span4"}></span>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
