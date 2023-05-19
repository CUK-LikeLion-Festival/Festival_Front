import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import BoothImg from "../assets/booth_final.png";
import { useNavigate } from "react-router-dom";
import BoothCard from "../components/Booth/boothCard";
import BoothDetail from "../hooks/components/Booth/hook";
import mapKim from "../assets/booth_final_Kim.png";
import mapM from "../assets/booth_final_Maria.png";
import mapNi from "../assets/booth_final_Ni.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

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
  font-size: 50px;
  @media (min-width: 350px) and (max-width: 720px) {
    font-size: 15px;
  }
  @media (min-width: 721px) and (max-width: 1080px) {
    font-size: 30px;
  } //medium
  align-self: flex-start;
  color: ${(props) =>
    props.isClicked ? props.theme.colors.green : props.theme.colors.white};
  margin: 17px;
`;

function Booth() {
  const navigate = useNavigate();
  const Map = [mapKim, mapM, mapNi];
  const [isClicked, setIsClicked] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [showBoothCard, setShowBoothCard] = useState(true);
  const [showPin, setPin] = useState(null);
  const [mapimg, setImg] = useState(BoothImg);
  const handleButtonClick = (id) => {
    setSelectedId(id);
    setImg(Map[id]);
    //setShowBoothCard((prev) => !prev);
    // setPin(Pin[id]);
  };
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const Slide = styled.div`
    border: 1px solid black;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    @media (min-width: 350px) and (max-width: 720px) {
      ::-webkit-scrollbar {
        display: none;
      }
    }
  `;
  const { Nichols, Kim, Maria, Andrea } = BoothDetail();
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
          <img src={mapimg} alt="boothImage"></img>
        </Img>
        <BuildingName>
          <Button onClick={() => handleButtonClick(0)}>
            {/* {Kim[0].boothName} */}
            김수환관
          </Button>
          <Button onClick={() => handleButtonClick(1)}>
            {/* {Nichols[0].boothName} */}
            니콜스관
          </Button>
          <Button onClick={() => handleButtonClick(2)}>
            {/* {Maria[0].boothName} */}
            마리아관
          </Button>
          <Button onClick={() => handleButtonClick(3)}>
            {/* {Andrea[0].boothName} */}
            안드레아관
          </Button>
        </BuildingName>
      </div>

      <Slide>{showBoothCard && <BoothCard selectedId={selectedId} />}</Slide>
    </div>
  );
}
export default Booth;
