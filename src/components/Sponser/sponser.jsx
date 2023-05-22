import styled from "styled-components";

import SponserDetail from "../../hooks/components/Sponser/hook";

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
  background-color: #f1f1f1;
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
  /* width: 100%;
  height: 100%; */
  border-radius: 10px;
  @media (min-width: 350px) and (max-width: 720px) {
    width: 260px;
    height: 150px;
  }
  @media (min-width: 721px) and (max-width: 1080px) {
    width: 500px;
    height: 300px;
  }
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  @media (min-width: 350px) and (max-width: 720px) {
    width: 110px;
    height: 100px;
    border-radius: 4px;
  }
`;
const BoothName = styled.h1`
  font-size: 30px;
  margin-top: -70px;
  color: black;
  font-weight: bolder;
  top: 80px;
  position: absolute;
  @media (min-width: 350px) and (max-width: 720px) {
    font-size: 17px;
    margin-top: -75px;
    font-weight: bolder;
  }
  @media (min-width: 721px) and (max-width: 1080px) {
    margin-top: -60px;
    font-size: 40px;
  }
`;
const ClubName = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: black;
  font-weight: 700;
  height: 10%;
  top: 150px;
  position: absolute;
  @media (min-width: 350px) and (max-width: 720px) {
    font-size: 15px;
    margin-top: -20px;
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
  color: #313d79;
  position: absolute;
  font-weight: bold;
  bottom: 50px;
  @media (min-width: 350px) and (max-width: 720px) {
    font-size: 17px;
    margin-top: 30px;
    bottom: 10px;
  }
  @media (min-width: 721px) and (max-width: 1080px) {
    bottom: 15px;
    font-size: 25px;
  }
`;
const Slide = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  @media (min-width: 350px) and (max-width: 720px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

function Sponser() {
  const { data } = SponserDetail();

  return (
    <div>
      <Slide>
        <Container>
          <Wrapper>
            {data.map((item, index) => (
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
                  <Discript>{item.discript}</Discript>
                </CardContainer>
              </div>
            ))}
          </Wrapper>
        </Container>
      </Slide>
    </div>
  );
}

export default Sponser;
