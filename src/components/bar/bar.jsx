import React from "react";
import Playground from "../../assets/playground.png";
import styled from "styled-components";
import BarList from "./barlist";


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

function Bar() {
  return (
    <Container>
      <InnerContainer>
        <GroundImage />
        <div style={{ marginTop: "1rem" }}>
          <BarList />
        </div>
      </InnerContainer>
    </Container>
  );
}

export default Bar;
