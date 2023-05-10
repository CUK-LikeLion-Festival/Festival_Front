import React, { useState } from "react";
import styled from "styled-components";
import BoothImg from "../assets/booth_final.png";
import { useNavigate } from "react-router-dom";
import Location from "../assets/location.png";

const Img = styled.div`
  float: right;
  padding-top: 20px;
  width: 250px;
  height: 250px;
`;

const Container = styled.div`
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

const Line = styled.div`
  border-top: 7px solid white;
  margin: 10px 0;
`;
function Booth() {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const handleButtonClick = (id) => {
    setSelectedId(id);
  };
  // const handleClick = () => {
  //   setIsClicked(!isClicked);
  // };
  const buttons = [
    { id: 1, label: "김수환관" },
    { id: 2, label: "니콜스관" },
    { id: 3, label: "마리아관" },
    { id: 4, label: "다솔관" },
    { id: 5, label: "콘서트홀" },
    { id: 6, label: "대운동장" },
  ];

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
          <img src={Location} alt="locatoin"></img>
        </Img>
        <Container>
          {buttons.map((button) => (
            <Button
              key={button.id}
              onClick={() => handleButtonClick(button.id)}
              isClicked={selectedId === button.id}
            >
              {button.label}
            </Button>
          ))}
        </Container>
      </div>
      <Line />
      <div
        style={{
          width: "400px",
          height: "400px",
          backgroundColor: "white",
        }}
      >
        <p>여기에 이제 각 건물 누르면 해당 부스 나오게 할거에요</p>
      </div>
    </div>
  );
}

export default Booth;
