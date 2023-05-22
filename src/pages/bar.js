import React from "react";
import Playground from "../../src/assets/playground.png";
import styled from "styled-components";
import BarList from "../components/bar/barlist";
import Layout from "../components/Layout/layout";

const Bar = () => {
  return (
    <Layout>
      <React.Fragment>
        <Container>
          <InnerContainer>
            <GroundImage />
            <div style={{ marginTop: "1rem" }}>
              <BarList />
            </div>
          </InnerContainer>
        </Container>
      </React.Fragment>
    </Layout>
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

export default Bar;
