import Layout from "../components/Layout/layout";
import React from "react";
import { SectionsContainer, Section } from "react-fullpage";

const options = {
  activeClass: "active", // the class that is appended to the sections links
  anchors: [1, 2, 3], // the anchors for each sections
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

function IndexPage() {
  return (
    <div>
      <SectionsContainer {...options}>
        <Section>Page 1</Section>
        <Section>Page 2</Section>
        <Section>
          <Layout>Page 3</Layout>
        </Section>
      </SectionsContainer>
    </div>
  );
}

export default IndexPage;
