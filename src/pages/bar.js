import React from "react";
import Playground from "../../src/assets/playground.png"
import styled from "styled-components";
import BarList from "../components/bar/barlist";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GroundImage = styled.img.attrs({ src: `${Playground}` })`
  max-width: 70%;
  height: 50%;
  display: block;
`;
const Button = styled.div`
    display: flex;
    align-items: left;
    justify-content: left;
    padding:1rem;
`;

function Bar() {
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
}

export default Bar;
