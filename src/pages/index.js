import Layout from "../components/Layout/layout";
import React from "react";
import { SectionsContainer, Section } from "react-fullpage";
import BannerImg from "../components/Banner/banner";
import Wednesday from "../components/TimeTable/wednesday";
import ThursDay from "../components/TimeTable/thursday";

const options = {
  activeClass: "active",
  anchors: [1, 2, 3],
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

function IndexPage() {
  return (
    <div>
      <SectionsContainer {...options}>
        <Section>
          <BannerImg />
        </Section>
        <Section>
          <Wednesday />
        </Section>
        <Section>
          <Layout>
            <ThursDay />
          </Layout>
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default IndexPage;
