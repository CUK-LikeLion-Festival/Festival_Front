import Layout from "../components/Layout/layout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BoothButton = styled.button`
  color: white;
  display: block;
  border: 0.1rem solid white;
  margin: auto;
  width: 200px;
  height: 100px;
  border-radius: 30px;
  margin-bottom: 50px;
`;

const BarButton = styled.button`
  color: white;
  margin: auto;
  display: block;
  border: 0.1rem solid white;
  width: 200px;
  height: 100px;
  border-radius: 30px;
  margin-bottom: 50px;
`;

const StampButton = styled.button`
  color: white;
  margin: auto;
  display: block;
  border: 0.1rem solid white;
  width: 200px;
  height: 70px;
  border-radius: 20px;
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; /* Add this line to arrange buttons vertically */
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-bottom: 90px;
  @media (min-width: 350px) and (max-width: 720px) {
    height: 70vh;
  } //small
  @media (min-width: 721px) and (max-width: 1080px) {
    height: 70vh;
  } //medium
`;

function Menus() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Wrapper>
        <div>
          <StampButton
            onClick={() => {
              navigate("/sponser");
            }}
          >
            스탬프
          </StampButton>
          <BoothButton
            onClick={() => {
              navigate("/booth/detail");
            }}
          >
            부스 전체보기
          </BoothButton>
          <BarButton
            onClick={() => {
              navigate("/booth/bar");
            }}
          >
            주점 전체보기
          </BarButton>
        </div>
      </Wrapper>
    </Layout>
  );
}

export default Menus;
