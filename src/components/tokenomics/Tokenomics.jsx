import React, { useState } from "react";
import { useMemo, useRef, useEffect } from "react";

import { TokenData } from "./tokenomicsData";
import { Group } from "@visx/group";
import { Circle } from "@visx/shape";
import { Pie } from "@visx/shape";
import { Text } from "@visx/text";

function Tokenomics({ setSelected }) {
  const [hovered, setHovered] = useState({ pool: "$AMT" });
  const width = 450;
  const half = width / 2;
  const height = 450;

  const targetRef = useRef(null);
  const callbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.boundingClientRect.top > 0) {
      setSelected("TOKENOMICS");
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
  return (
    <section className="TOKENOMICS" id="TOKENOMICS" ref={targetRef}>
      <div className="video__title">
        <p className="DOCUMENTATION">TOKENOMICS</p>
        <div className="WhitePaper__bottom__title">TOKEN ECONOMICS</div>
      </div>
      <div className="wholePage">
        <table>
          <thead>
            <tr>
              <td></td>
              <th>POOL</th>
              <th>AMT PRICE</th>
              <th>RAISED</th>
              <th>%</th>
              <th>TOKENS</th>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {TokenData.map((item) => {
              return (
                <tr
                  key={item.pool}
                  className={hovered === item ? "row hovered " : "row"}
                  onMouseEnter={() => setHovered(item)}
                  onMouseLeave={() => setHovered({ pool: "$AMT" })}
                >
                  <td></td>
                  <td>{item.pool}</td>
                  <td>{item.price}</td>
                  <td>{item.raised}</td>
                  <td>{item.procent}</td>
                  <td>{item.tokens}</td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td></td>

              <th>TOTAL</th>
              <th></th>
              <th>$1.032,480</th>
              <th>100</th>
              <th>100 000 000 </th>
              <td></td>
            </tr>
          </tfoot>
        </table>
        <div className="svgContainer">
          <svg width={width} height={height}>
            <Group top={half} left={half}>
              <Pie
                data={TokenData}
                pieValue={(data) => data.pieProcent}
                pieSort={(a, b) => {}}
                fill={(TokenData) => TokenData.color}
                outerRadius={200}
                innerRadius={50}
                cornerRadius={0}
                padAngle={0.01}
              >
                {(pie) => {
                  return pie.arcs.map((arc) => {
                    return (
                      <g
                        key={arc.data.pool}
                        fill={arc.data.color}
                        className={hovered === arc.data && "hovered"}
                      >
                        <path
                          d={pie.path(arc)}
                          onMouseEnter={() => setHovered(arc.data)}
                          onMouseLeave={() => setHovered({ pool: "$AMT" })}
                        ></path>
                      </g>
                    );
                  });
                }}
              </Pie>
              <Circle r={95} fill="black" style={{ opacity: 0.4 }}></Circle>

              <Circle r={80} fill="#131f30"></Circle>
              <Text
                textAnchor="middle"
                verticalAnchor="end"
                fill="white"
                className="procentText"
              >
                {hovered.procent && hovered.procent + "%"}
              </Text>
              <Text
                textAnchor="middle"
                verticalAnchor="start"
                y={hovered.pool === "$AMT" ? -10 : 10}
                fill="white"
                className={hovered.pool === "$AMT" ? "noText" : "text"}
              >
                {hovered.pool}
              </Text>
            </Group>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
