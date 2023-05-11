import React from "react";
import styled from "styled-components";
import emotion1 from "../../assets/emotion1.png";
import pin from "../../assets/pin.png";
const CardContainer = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vh;
  height: 50vh;
  background-color: #f1f1f1;
  border-radius: 10px;
  box-shadow: 2px 5px 12px 2px rgb(0, 0, 0);
  .Booth_Info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #ececec;
    padding: 16px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    position: relative;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%j;
  background-color: #64c964;
  border-radius: 10px;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`;
const BoothName = styled.h2`
  font-size: 50px;
  margin-top: 0px;
  color: black;
  font-weight: bold;
  top: 80px;
  position: absolute;
`;
const ClubName = styled.p`
  font-size: 30px;
  margin-top: 20px;
  color: black;
  font-weight: 700;
  height: 10%;
  top: 150px;
  position: absolute;
`;
const Location = styled.p`
  font-size: 18px;
  margin-top: 0px;
  color: black;
  left: 16px;
  font-weight: bold;
  display: flex;
  align-items: center;
  position: absolute;
  top: 16px;
  img {
    width: 20px;
    height: auto;
    margin-right: 10px;
  }
`;
const Discript = styled.p`
  font-size: 20px;
  margin-top: 10px;
  font-weight: 500;
  padding-bottom: 0px;
  color: #888888;
  position: absolute;
  bottom: 50px;
`;
function BoothCard() {
  return (
    <CardContainer>
      <ImageWrapper>
        <Image src={emotion1} alt="Booth Image" />
      </ImageWrapper>
      <BoothName>국제관</BoothName>
      <ClubName>가홍이</ClubName>
      <Discript>예시</Discript>
    </CardContainer>
  );
}

export default BoothCard;
