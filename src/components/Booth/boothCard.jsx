import styled from "styled-components";
import React from "react";
import useBoothDetail from "../../hooks/components/Booth/hook";

const BoothCard = (props) => {
  const { Nichols, Kim, Plaza } = useBoothDetail();
  const { selectedId } = props;

  if (selectedId === 0) {
    return (
      <Container>
        <Wrapper>
          {Kim.map((item, index) => (
            <div key={index}>
              <CardContainer>
                <ImageWrapper
                  style={{
                    backgroundColor: item.background,
                  }}
                >
                  <Image src={item.img} alt="Booth Image" />
                </ImageWrapper>
                <BoothName
                  style={{
                    color: item.color,
                  }}
                >
                  {item.boothName}
                </BoothName>
                <ClubName
                  style={{
                    color: item.color,
                  }}
                >
                  {item.clubName}
                </ClubName>
                <Discript>
                  {item.discript.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </Discript>
              </CardContainer>
            </div>
          ))}
        </Wrapper>
      </Container>
    );
  } else if (selectedId === 1) {
    return (
      <Container>
        <Wrapper>
          {Plaza.map((item, index) => (
            <CardContainer key={index}>
              <ImageWrapper
                style={{
                  backgroundColor: item.background,
                }}
              >
                <Image src={item.img} alt="Booth Image" />
              </ImageWrapper>
              <BoothName
                style={{
                  color: item.color,
                }}
              >
                {item.boothName}
              </BoothName>
              <ClubName
                style={{
                  color: item.color,
                }}
              >
                {item.clubName}
              </ClubName>
              <Discript>{item.discript}</Discript>
            </CardContainer>
          ))}
        </Wrapper>
      </Container>
    );
  } else if (selectedId === 2) {
    return (
      <Container>
        <Wrapper>
          {Nichols.map((item, index) => (
            <CardContainer key={index}>
              <ImageWrapper
                style={{
                  backgroundColor: item.background,
                }}
              >
                <Image src={item.img} alt="Booth Image" />
              </ImageWrapper>
              <BoothName
                style={{
                  color: item.color,
                }}
              >
                {item.boothName}
              </BoothName>
              <ClubName
                style={{
                  color: item.color,
                }}
              >
                {item.clubName}
              </ClubName>
              <Discript>{item.discript}</Discript>
            </CardContainer>
          ))}
        </Wrapper>
      </Container>
    );
  }

  // Add a default return statement if none of the conditions are met
  return null;
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 200px;
  margin-left: 100px;
  @media (min-width: 350px) and (max-width: 720px) {
    margin-left: 50px;
  } //small
  @media (min-width: 721px) and (max-width: 1080px) {
    margin-top: 265px;
  } //medium
`;
const Wrapper = styled.div`
  flex: 0 0 33.33%;
  display: flex;
  //justify-content: space-between;
`;
const CardContainer = styled.div`
  // position: absolute;
  margin-left: 90px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 300px;

  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  box-shadow: 2px 5px 12px 2px rgb(0, 0, 0);
  @media (min-width: 350px) and (max-width: 720px) {
    margin-left: 140px;
    width: 260px;
    height: 330px;
  }
  @media (min-width: 721px) and (max-width: 1080px) {
    margin-left: 260px;
    width: 500px;
    height: 480px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-top: 35px;
  @media (min-width: 350px) and (max-width: 720px) {
    width: 240px;
    height: 150px;
  }
  @media (min-width: 721px) and (max-width: 1080px) {
    margin-top: 60px;
    width: 450px;
    height: 280px;
  }
  transition: transform 0.6s;
`;
const Image = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 8px;
  @media (min-width: 350px) and (max-width: 720px) {
    width: 110px;
    height: 100px;
    border-radius: 4px;
  }
`;
const BoothName = styled.h1`
  font-size: 28px;
  margin-top: -75px;
  color: white;
  font-weight: lighter;

  top: 80px;

  position: absolute;
  @media (min-width: 350px) and (max-width: 720px) {
    font-size: 17px;
    margin-top: -65px;
    font-weight: lighter;
  }
  @media (min-width: 721px) and (max-width: 1080px) {
    margin-top: -70px;
    font-size: 40px;
  }
`;
const ClubName = styled.p`
  font-size: 20px;
  margin-top: 30px;
  color: black;
  font-weight: 700;
  height: 10%;
  top: 150px;
  position: absolute;

  @media (min-width: 350px) and (max-width: 720px) {
    font-size: 15px;
    margin-top: 5px;
  }
  @media (min-width: 721px) and (max-width: 1080px) {
    margin-top: 110px;
    font-size: 30px;
  }
`;

const Discript = styled.p`
  font-size: 15px;
  margin-top: 10px;
  font-weight: 500;
  padding-bottom: 0px;
  color: white;
  position: absolute;
  font-weight: lighter;

  white-space: pre-line;
  bottom: 20px;

  @media (min-width: 350px) and (max-width: 720px) {
    font-size: 17px;
    margin-top: 30px;
    bottom: 10px;
    font-weight: lighter;
  }
  @media (min-width: 721px) and (max-width: 1080px) {
    bottom: 15px;
    font-size: 25px;
    font-weight: lighter;
  }
`;

export default BoothCard;
