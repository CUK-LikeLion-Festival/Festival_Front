import React from "react";
import Playground from "../../src/assets/playground.png";
import styled from "styled-components";
import BarList from "../components/bar/barlist";
import Layout from "../components/Layout/layout";



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
  height: 70%;
  padding:0;
`;

const GroundImage = styled.img.attrs({ src: `${Playground}` })`
  max-width: 100%;
  max-height: 70vh;
  display: block;
`;
const Box = styled.div `
  margin-top: 0.5rem;
`;

const Bar = () => {
  return (
    <Layout>
      <React.Fragment>
        <Container>
          <InnerContainer>
            <GroundImage />
          </InnerContainer>
          <Box>
          <BarList />
          </Box>
        </Container>
      </React.Fragment>
      </Layout>
    
  );
};

export default Bar;
