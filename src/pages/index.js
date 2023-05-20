import Layout from "../components/Layout/layout";
import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import BannerImg from "../components/Banner/banner";
import Wednesday from "../components/TimeTable/wednesday";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const options = {
  activeClass: "active",
  anchors: [1, 2, "booth"],
  arrowNavigation: true,
  className: "SectionContainer",
  delay: 1000,
  navigation: true,
  scrollBar: false,
  sectionClassName: "Section",
  sectionPaddingTop: "0",
  sectionPaddingBottom: "0",
  verticalAlign: false,
};
const BoothButton = styled.button`
  color: white;
  background-color: tomato;
  width: 200px;
  height: 120px;
  border-radius: 50px;
`;

const BarButton = styled.button`
  color: white;
  background-color: #0097e6;
  width: 200px;
  height: 120px;
  border-radius: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

function IndexPage() {
  const navigate = useNavigate();
  return (
    <div>
      <SectionsContainer {...options}>
        <Section>
          <BannerImg />
        </Section>
        <Section>
          <Wednesday />
        </Section>
        <Section anchors="booth">
          <Layout>
            <Wrapper>
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
            </Wrapper>
          </Layout>
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default IndexPage;
