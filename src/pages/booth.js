import React, { useState } from "react";
import styled from "styled-components";
import BoothImg from "../assets/booth_final.png";
import { useNavigate } from "react-router-dom";
import BoothCard from "../components/Booth/boothCard";
import mapKim from "../assets/booth_final_Kim.png";
import mapM from "../assets/booth_final_Maria.png";
import mapNi from "../assets/booth_final_Ni.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Img = styled.div`
  float: right;
  padding-top: 20px;
  width: 500px;
  height: 500px;
  @media (min-width: 350px) and (max-width: 720px) {
    width: 250px;
    height: 250px;
  }
`;
const BuildingName = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media (min-width: 350px) and (max-width: 720px) {
    margin-top: 15px;
  }
`;
const Button = styled.button`
  font-size: 30px;
  @media (min-width: 350px) and (max-width: 720px) {
    font-size: 15px;
  }
  @media (min-width: 721px) and (max-width: 1080px) {
    font-size: 30px;
  } //medium
  align-self: flex-start;
  color: ${(props) =>
    props.isClicked ? props.theme.colors.green : props.theme.colors.white};
  margin: 15px;
`;

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
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
  top: 50%;
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

  ${(props) => (props.right ? "right: 0" : "left: 0")}
`;

function Booth() {
  const navigate = useNavigate();
  const Map = [mapKim, mapM, mapNi];
  const [isClicked, setIsClicked] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showBoothCard, setShowBoothCard] = useState(true);
  const [mapimg, setImg] = useState(BoothImg);

  const handleButtonClick = (id) => {
    setSelectedId(id);
    setImg(Map[id]);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  // 이전 슬라이드 이동 함수
  const handlePrevSlide = () => {
    const slideContainer = document.getElementById("slide-container");
    if (slideContainer) {
      slideContainer.scrollLeft -= slideContainer.offsetWidth;
    }
  };

  // 다음 슬라이드 이동 함수
  const handleNextSlide = () => {
    const slideContainer = document.getElementById("slide-container");
    if (slideContainer) {
      slideContainer.scrollLeft += slideContainer.offsetWidth;
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
        style={{
          color: "white",
          fontSize: "25px",
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>

      <div>
        <Img>
          <img src={mapimg} alt="boothImage" />
        </Img>
        <BuildingName>
          <Button onClick={() => handleButtonClick(0)}>김수환관</Button>
          <Button onClick={() => handleButtonClick(1)}>광장</Button>
          <Button onClick={() => handleButtonClick(2)}>
            니콜스관 앞 푸드트럭
          </Button>
          <Button onClick={() => handleButtonClick(3)}>
            안드레아관 취식공간
          </Button>
        </BuildingName>
      </div>

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
    </div>
  );
}

export default Booth;
