import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import BoothImg from "../../assets/booth_final.png";
import { useNavigate } from "react-router-dom";
import pin from "../../assets/pin.png";
import BoothCard from "../Booth/boothCard";
import BoothDetail from "../../hooks/components/Booth/hook";
const Img = styled.div`
  float: right;
  padding-top: 20px;
  width: 250px;
  height: 250px;
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
  @media (min-width: 350px) and (max-width: 720px) {
    font-size: 15px;
  }
  align-self: flex-start;
  color: ${(props) =>
    props.isClicked ? props.theme.colors.green : props.theme.colors.white};
  margin: 17px;
`;
const Cards = styled.div`
  position: absolute;
  bottom: 0px;
  height: 50vh;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 350px) and (max-width: 720px) {
    margin-top: 15px;
  }
  .swiper-container {
    position: absolute;
    display: flex;
    top: 150px;
    margin: 0 auto;
  }
  .swiper-button-prev,
  .swiper-button-next {
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    opacity: 0.7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
  }
  .swiper-button-prev {
    left: 10px;
  }
  .swiper-button-next {
    right: 10px;
  }
`;
const Line = styled.div`
  border-top: 7px solid white;
  margin: 10px 0;
`;
function Booth() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showBoothCard, setShowBoothCard] = useState(true);
  const [showPin, setPin] = useState(null);
  const handleButtonClick = (id) => {
    setSelectedId(id);
    //setShowBoothCard((prev) => !prev);
    setPin(Pin[id]);
  };
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const { Nichols, Kim, Maria, Pin } = BoothDetail();
  return (
    <div>
      <button
        style={{
          color: "white",
        }}
        onClick={() => {
          navigate("/");
        }}
      >
        뒤로가기
      </button>
      <div>
        <Img>
          <img src={BoothImg} alt="boothImage"></img>
        </Img>
        <BuildingName>
          <Button onClick={() => handleButtonClick(0)}>
            {Kim[0].boothName}
          </Button>
          <Button onClick={() => handleButtonClick(1)}>
            {Nichols[0].boothName}
          </Button>
          <Button onClick={() => handleButtonClick(2)}>
            {Maria[0].boothName}
          </Button>
        </BuildingName>
        <div>
          {showPin !== null && (
            <img
              src={pin}
              alt="pin"
              style={{
                position: "absolute",
                left: `${showPin[0]}px`,
                top: `${showPin[1]}px`,
              }}
            />
          )}
        </div>
      </div>
      <Cards>
        {showBoothCard && <BoothCard selectedId={selectedId} />}
        {/* {showBoothCard && <BoothCard />}</Cards> */}
      </Cards>
    </div>
  );
}
export default Booth;
