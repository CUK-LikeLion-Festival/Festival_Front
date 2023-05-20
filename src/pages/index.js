import Layout from "../components/Layout/layout";
import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import BannerImg from "../components/Banner/banner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TimeTable from "../components/TimeTable/timeTable";
import Bar from "./bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTents, faTruck } from "@fortawesome/free-solid-svg-icons";

const options = {
  activeClass: "active",
  anchors: [1, 2, "booth", 4],
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
  color: black;
  background-color: #7bed9f;
  width: 300px;
  height: 220px;
  border-radius: 50px;
  font-size: 100px;
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
          <TimeTable />
        </Section>
        <Section anchors="booth">
          <Wrapper>
            <BoothButton
              onClick={() => {
                navigate("/booth/detail");
              }}
            >
              <FontAwesomeIcon icon={faTents} />

              <FontAwesomeIcon icon={faTruck} />
              <p
                style={{
                  paddingTop: "50px",
                  fontSize: "18px",
                  fontWeight: "bolder",
                }}
              >
                부스, 푸드트럭 전체보기
              </p>
            </BoothButton>
          </Wrapper>
        </Section>
        <Section>
          <Layout>
            <Bar />
          </Layout>
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default IndexPage;
