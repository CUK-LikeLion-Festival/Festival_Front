import React, { useState } from "react";
import styled from "styled-components";
import BoothImg from "../../assets/booth_final.png";
import { useNavigate } from "react-router-dom";

import BoothCard from "../Booth/boothCard";
import BoothDetail from "../../hooks/components/Booth/hook";

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
  const [showBoothCard, setShowBoothCard] = useState(false);

  const handleButtonClick = (id) => {
    setSelectedId(id);
    setShowBoothCard((prev) => !prev);
  };
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const { data } = BoothDetail();

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
        <Container>
          <Button onClick={() => handleButtonClick(0)}>
            {data[0].boothName}
          </Button>
          <Button onClick={() => handleButtonClick(1)}>
            {data[1].boothName}
          </Button>
        </Container>
      </div>
      <Line />
      <Container>
        {showBoothCard && <BoothCard selectedId={selectedId} />}
      </Container>
    </div>
  );
}

export default Booth;
