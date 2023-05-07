import React, { useState } from "react";
import styled from "styled-components";
import BoothImg from "../assets/booth.png";

const Img = styled.div`
  width: 600px;
  height: 600px;
  margin: auto;
  @media (min-width: 350px) and (max-width: 720px) {
    width: 350px;
    height: 350px;
  }
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

function Booth() {
  const [isClicked, setIsClicked] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const handleButtonClick = (id) => {
    setSelectedId(id);
  };
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
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
      <Img>
        <img src={BoothImg}></img>
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
  );
}

export default Booth;
