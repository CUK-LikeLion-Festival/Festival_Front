import React from "react";
import Playground from "../../src/assets/playground.png";
import styled from "styled-components";
import BarList from "../components/bar/barlist";
import { useNavigate } from "react-router-dom";

const Bar = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Button>
        <button
          style={{
            color: "white",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
      </Button>
      <Container>
        <InnerContainer>
          <GroundImage />
          <div style={{ marginTop: "1rem" }}>
            <BarList />
          </div>
        </InnerContainer>
      </Container>
    </React.Fragment>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 70%;
  height: 50%;
  margin: auto;
`;

const GroundImage = styled.img.attrs({ src: `${Playground}` })`
  max-width: 100%;
  max-height: 70vh;
  display: block;
`;

const Button = styled.div`
  display: flex;
  align-items: left;
  justify-content: left;
  padding: 1rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;
export default Bar;
