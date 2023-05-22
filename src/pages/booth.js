import React, { useState } from "react";
import styled from "styled-components";
import BoothCard from "../components/Booth/boothCard";
import booth_Map_default from "../assets/booth_Map_default.png";
import booth_Map_Kim from "../assets/booth_Map_Kim.png";
import booth_Map_Ni from "../assets/booth_Map_Ni.png";
import booth_Map_Square from "../assets/booth_Map_Square.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Header from "../components/Layout/header";

function Booth() {
  const Map = [booth_Map_Kim, booth_Map_Square, booth_Map_Ni];
  const [isClicked, setIsClicked] = useState(true);
  const [selectedId, setSelectedId] = useState(0);
  const [showBoothCard, setShowBoothCard] = useState(true);
  const [mapimg, setImg] = useState(booth_Map_default);

  const handleButtonClick = (id) => {
    setSelectedId(id);
    setImg(Map[id]);
    setIsClicked(true);
  };

  // 이전 슬라이드 이동 함수
  const handlePrevSlide = () => {
    const slideContainer = document.getElementById("slide-container");
    if (slideContainer) {
      slideContainer.scrollLeft -= slideContainer.clientWidth * 1.1 + 5;
    }
  };
  // 다음 슬라이드 이동 함수
  const handleNextSlide = () => {
    const slideContainer = document.getElementById("slide-container");
    if (slideContainer) {
      slideContainer.scrollLeft += slideContainer.clientWidth * 1.05 + 5;
    }
  };

  return (
    <div
      style={{
        background: "#6E4ABC",
      }}
    >
      <Header />

      <Img>
        <img src={mapimg} alt="boothImage" />
      </Img>

      <BuildingName>
        <Button onClick={() => handleButtonClick(0)}>김수환관</Button>
        <Button onClick={() => handleButtonClick(1)}>광장</Button>
        <Button onClick={() => handleButtonClick(2)}>
          니콜스관 앞 푸드트럭
        </Button>
      </BuildingName>

      <div>
        {isClicked && (
          <SlideContainer>
            <Slide id="slide-container">
              {showBoothCard && <BoothCard selectedId={selectedId} />}
            </Slide>
            <SlideButton onClick={handlePrevSlide}>
              <FaChevronLeft />
            </SlideButton>
            <SlideButton right onClick={handleNextSlide}>
              <FaChevronRight />
            </SlideButton>
          </SlideContainer>
        )}
      </div>
    </div>
  );
}

const Button = styled.button`
  font-size: 30px;
  /* &: hover {
    color: #d77d89;
  } */

  @media (min-width: 350px) and (max-width: 720px) {
    font-size: 15px;
  }
  @media (min-width: 721px) and (max-width: 1080px) {
    font-size: 20px;
  } //medium
  align-self: flex-start;
  color: ${(props) =>
    props.isClicked ? props.theme.colors.green : props.theme.colors.white};
  margin: 15px;
`;

const Img = styled.div`
  float: right;
  margin-right: 25%;
  padding-top: 20px;
  width: 500px;
  height: 500px;
  @media (min-width: 350px) and (max-width: 720px) {
    width: 200px;
    height: 200px;
    margin-right: 20%;
    padding-top: 100px;
  }
  @media (min-width: 721px) and (max-width: 1080px) {
    width: 300px;
    height: 300px;
  }
`;
const Line = styled.div`
  border: "3px solid white";
  padding-top: 20px;
`;

const BuildingName = styled.div`
  margin-top: 100px;
  margin-left: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  white-space: nowrap;

  position: relative;
  @media (min-width: 350px) and (max-width: 720px) {
    margin-top: 15px;
    position: absolute;
    right: 50px; //박지원님은 right: 30px
    flex-direction: row;

    &::after {
      position: absolute;
      top: 90%;
      left: -0px;
      width: 320px;
      height: 2px;
      background-color: white;
      transform: translateY(-50%);
      opacity: 0.5;
      z-index: -1;
    }
  }
  @media (min-width: 721px) and (max-width: 1080px) {
    margin-top: 20px;
  }
`;

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 250px;
`;
const Slide = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100%;
  height: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 4px;
  }
`;

// 화살표 버튼
const SlideButton = styled.button`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  font-size: 30px;
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #333;
  }
  @media (min-width: 350px) and (max-width: 720px) {
    top: 50%;
  }
  @media (min-width: 721px) and (max-width: 1080px) {
    top: 50%;
  } //medium
  ${(props) => (props.right ? "right: 0" : "left: 0")}
`;

export default Booth;
