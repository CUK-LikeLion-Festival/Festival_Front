import Layout from "../components/Layout/layout";
import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import BannerImg from "../components/Banner/banner";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TimeTable from "../components/TimeTable/timeTable";
import Bar from "./bar";

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
  color: white;
  background-color: tomato;
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
          <TimeTable />
        </Section>
        <Section anchors="booth">
          <Wrapper>
            <BoothButton
              onClick={() => {
                navigate("/booth/detail");
              }}
            >
              부스 전체보기
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
import Layout from "../components/Layout/layout";
import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTents, faTruck } from "@fortawesome/free-solid-svg-icons";

const options = {
  activeClass: "active", // the class that is appended to the sections links
  anchors: [1, 2, "booth"], // the anchors for each sections
  arrowNavigation: true, // use arrow keys
  className: "SectionContainer", // the class name for the section container
  delay: 1000, // the scroll animation speed
  navigation: true, // use dots navigatio
  scrollBar: false, // use the browser default scrollbar
  sectionClassName: "Section", // the section class name
  sectionPaddingTop: "0", // the section top padding
  sectionPaddingBottom: "0", // the section bottom padding
  verticalAlign: false, // align the content of each section vertical};
  // => in the render() method of your app
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
      <Layout>
        <SectionsContainer {...options}>
          <Section>Page 1</Section>
          <Section>Page 2</Section>
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
        </SectionsContainer>
      </Layout>
    </div>
  );
}

export default IndexPage;
