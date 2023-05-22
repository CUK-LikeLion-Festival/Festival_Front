import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import BannerImg from "../components/Banner/banner";
import TimeTable from "../components/TimeTable/timeTable";
import Footer from "../components/Layout/footer";
import Header from "../components/Layout/header";

const options = {
  activeClass: "active",
  anchors: ["banner", "timetable"],
  arrowNavigation: true,
  className: "SectionContainer",
  delay: 1000,
  navigation: false,
  scrollBar: false,
  sectionClassName: "Section",
  sectionPaddingTop: "10",
  sectionPaddingBottom: "10",
  verticalAlign: false,
  touchSensitivity: 0,
};

function IndexPage() {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-rose-400">
      <SectionsContainer {...options}>
        <Section anchors="banner">
          <Header />
          <BannerImg />
        </Section>
        <Section anchors="timetable">
          <TimeTable />
          <Footer />
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default IndexPage;
