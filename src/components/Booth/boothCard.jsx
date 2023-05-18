import styled from "styled-components";
import emotion1 from "../../assets/emotion1.png";
import useBoothDetail from "../../hooks/components/Booth/hook";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
const Wrapper = styled.div`
  flex: 0 0 33.33%;
  display: flex;
  //justify-content: space-between;
`;
const CardContainer = styled.div`
  // position: absolute;
  //margin-left: 100px;
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
    margin-left: 15px;
    width: 110px;
    height: 200px;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%;
  height: 100%; */
  background-color: #64c964;
  border-radius: 10px;
  @media (min-width: 350px) and (max-width: 720px) {
  }
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
  @media (min-width: 350px) and (max-width: 720px) {
    width: 110px;
    height: 150px;
    border-radius: 4px;
  }
`;
const BoothName = styled.h1`
  font-size: 30px;
  margin-top: 0px;
  color: black;
  font-weight: bold;
  top: 80px;
  position: absolute;
  @media (min-width: 350px) and (max-width: 720px) {
    font-size: 17px;
    margin-top: -50px;
  }
`;
const ClubName = styled.p`
  font-size: 30px;
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
`;

const Discript = styled.p`
  font-size: 20px;
  margin-top: 10px;
  font-weight: 500;
  padding-bottom: 0px;
  color: #888888;
  position: absolute;
  bottom: 50px;
  @media (min-width: 350px) and (max-width: 720px) {
    font-size: 17px;
    margin-top: 30px;
    bottom: 10px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 250px;
  margin-left: 46px;
`;
const BoothCard = (props) => {
  const { Nichols, Kim, Maria, Andrea } = useBoothDetail();
  const { selectedId } = props;

  //const [index, setIndex] = useState(null);
  {
    if (selectedId === 0) {
      return (
        <Container>
          <Wrapper>
            {Kim.map((item, index) => (
              <div key={index}>
                <CardContainer>
                  <ImageWrapper>
                    <Image src={emotion1} alt="Booth Image" />
                  </ImageWrapper>
                  <BoothName>{item.boothName}</BoothName>
                  <ClubName>{item.clubName}</ClubName>
                  <Discript>{item.discript}</Discript>
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
            {Nichols.map((item, index) => (
              <CardContainer key={index}>
                <ImageWrapper>
                  <Image src={emotion1} alt="Booth Image" />
                </ImageWrapper>
                <BoothName key={index}>{item.boothName}</BoothName>
                <ClubName key={index}>{item.clubName}</ClubName>
                <Discript key={index}>{item.discript}</Discript>
              </CardContainer>
            ))}
          </Wrapper>
        </Container>
      );
    } else if (selectedId === 2) {
      return (
        <Container>
          <Wrapper>
            {Maria.map((item, index) => (
              <CardContainer key={index}>
                <ImageWrapper>
                  <Image src={emotion1} alt="Booth Image" />
                </ImageWrapper>
                <BoothName key={index}>{item.boothName}</BoothName>
                <ClubName key={index}>{item.clubName}</ClubName>
                <Discript key={index}>{item.discript}</Discript>
              </CardContainer>
            ))}
          </Wrapper>
        </Container>
      );
    } else if (selectedId == 3) {
      return (
        <Container>
          <Wrapper>
            {Andrea.map((item, index) => (
              <CardContainer key={index}>
                <ImageWrapper>
                  <Image src={emotion1} alt="Booth Image" />
                </ImageWrapper>
                <BoothName key={index}>{item.boothName}</BoothName>
                <ClubName key={index}>{item.clubName}</ClubName>
                <Discript key={index}>{item.discript}</Discript>
              </CardContainer>
            ))}
          </Wrapper>
        </Container>
      );
    }
  }
};

export default BoothCard;
