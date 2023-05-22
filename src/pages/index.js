import Layout from "../components/Layout/layout";
import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import BannerImg from "../components/Banner/banner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TimeTable from "../components/TimeTable/timeTable";
import Menus from "./menus";

const options = {
  activeClass: "active",
  anchors: ["banner", "timetable", "booth"],
  arrowNavigation: true,
  className: "SectionContainer",
  delay: 1000,
  navigation: true,
  scrollBar: false,
  sectionClassName: "Section",
  sectionPaddingTop: "0",
  sectionPaddingBottom: "0",
  verticalAlign: false,
  touchSensitivity: 10,
};

const BoothButton = styled.button`
  color: white;
  display: block;
  border: 0.1rem solid white;
  margin: auto;
  width: 200px;
  height: 100px;
  border-radius: 30px;
  margin-bottom: 50px;
`;

const BarButton = styled.button`
  color: white;
  margin: auto;
  display: block;
  border: 0.1rem solid white;
  width: 200px;
  height: 100px;
  border-radius: 30px;
  margin-bottom: 50px;
`;

const StampButton = styled.button`
  color: white;
  margin: auto;
  display: block;
  border: 0.1rem solid white;
  width: 200px;
  height: 70px;
  border-radius: 20px;
  margin-bottom: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column; /* Add this line to arrange buttons vertically */
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-bottom: 90px;
  @media (min-width: 350px) and (max-width: 720px) {
    height: 70vh;
  } //small
  @media (min-width: 721px) and (max-width: 1080px) {
    height: 70vh;
  } //medium
`;

function IndexPage() {
  const navigate = useNavigate();
  return (
    <div>
      <SectionsContainer {...options}>
        <Section anchors="banner">
          <BannerImg />
        </Section>
        <Section anchors="timetable">
          <TimeTable />
        </Section>
        <Section anchors="booth">
          <Menus />
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default IndexPage;
