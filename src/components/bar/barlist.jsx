import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import BarModal from "../Modals/BarModal";
import Department from "../../assets/department.png";

function BarList() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [fontSize, setFontSize] = useState(4);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const calculatedFontSize = Math.min(4, width / 100); // 최대 4vw로 제한
      setFontSize(calculatedFontSize);
    }

    handleResize(); // 초기 로딩 시에도 실행

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <React.Fragment>
      <Container>
        {activeIndex !== null && (
          <BarModal
            className="position"
            open={activeIndex !== null}
            close={() => {
              setActiveIndex(null);
            }}
            closeButton={"창 닫기"}
          >
            <BarImage />
          </BarModal>
        )}
      </Container>

      <BarContainer fontSize={fontSize}>
        <ul>
          {bars.map((bar, index) => (
            <li key={index}>
              <a
                href="#!"
                className={activeIndex === index ? "active" : ""}
                onClick={() => handleClick(index)}
              >
                {bar}
              </a>
              {activeIndex === index && <div className="divider"></div>}
            </li>
          ))}

          {activeIndex === null && (
            <li>
              <div className="divider"></div>
            </li>
          )}
        </ul>
      </BarContainer>
    </React.Fragment>
  );
}

const bars = ["주점 배치보기"];

const BarContainer = styled.div`
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: -1px;
    color: #e5e3e8;
  }

  li {
    margin-right: 2px;
  }

  a {
    display: inline-block;
    padding: 1rem;
    border-bottom: 2px solid transparent;
    border-radius: 4px;
    transition: border-color 0.3s, color 0.3s;

    &.active,
    &:hover {
      border-color: #ffffff;
      color: #666666;
    }

    ${(props) =>
      props.activeIndex === 0 &&
      css`
        font-size: ${props.fontSize}vw;
      `}
  }

  .divider {
    height: 1px;
    width: 100%;
    background-color: #ffffff;
  }
`;
const Container = styled.div`
  .position {
    @media (min-width: 350px) and (max-width: 720px) {
      text-align: center;
    }
  }
`;

const BarImage = styled.img.attrs({ src: `${Department}` })`
  max-width: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media (min-width: 350px) and (max-width: 720px) {
    max-height: 80vh;
    width: auto;
    height: auto;
  }
  @media (min-width: 721px) {
    max-height: 100vh;
    width: auto;
    height: auto;
  }
`;

export default BarList;
