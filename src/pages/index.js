import Layout from "../components/Layout/layout";
import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import BannerImg from "../components/Banner/banner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TimeTable from "../components/TimeTable/timeTable";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTents, faTruck } from "@fortawesome/free-solid-svg-icons";

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
  display: block;
  border: 0.1rem solid white;
  margin: auto;
  width: 200px;
  height: 100px;
  border-radius: 30px;
`;

const BarButton = styled.button`
  color: white;
  margin: auto;
  display: block;
  border: 0.1rem solid white;
  width: 200px;
  height: 100px;
  border-radius: 30px;
`;

const StampButton = styled.button`
  color: white;
  margin: auto;
  display: block;
  border: 0.1rem solid white;
  width: 200px;
  height: 100px;
  border-radius: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; /* Add this line to arrange buttons vertically */
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
          <TimeTable />
        </Section>
        <Section anchors="booth">
          <Layout>
            <Wrapper>
              <StampButton
                onClick={() => {
                  navigate("/booth/stamp");
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
            </Wrapper>
          </Layout>
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default IndexPage;
