import React from "react";
import Playground from "../../src/assets/playground.png";
import styled from "styled-components";
import BarList from "../components/bar/barlist";
import Layout from "../components/Layout/layout";

const Bar = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-rose-400">
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
    </div>
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
  height: 70%;
  padding: 0;
`;

const GroundImage = styled.img.attrs({ src: `${Playground}` })`
  max-width: 100%;
  max-height: 70vh;
  display: block;
`;
const Box = styled.div`
  margin-top: 0.5rem;
`;

export default Bar;
