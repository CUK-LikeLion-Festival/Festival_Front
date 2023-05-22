import React, { useEffect, useRef } from "react";
import { SectionsContainer, Section } from "react-fullpage";
import BannerImg from "../components/Banner/banner";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TimeTable from "../components/TimeTable/timeTable";
import Footer from "../components/Layout/footer";
import { FaAngleDoubleUp } from "react-icons/fa";

const options = {
  activeClass: "active",
  anchors: ["banner", "timetable", "booth"],
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
  const navigate = useNavigate();

  const scrollButtonRef = useRef(null);

  useEffect(() => {
    const scrollButton = scrollButtonRef.current;

    const scrollPage = () => {
      window.scrollTo({
        top: -window.innerHeight,
        behavior: "smooth",
      });
    };

    scrollButton.addEventListener("click", scrollPage);

    return () => {
      scrollButton.removeEventListener("click", scrollPage);
    };
  }, []);

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
          <Wrapper>
            <div>
              <div className="flex items-center justify-center  mt-20 mb-10 lg:hidden xl:hidden">
                <button ref={scrollButtonRef}>
                  <FaAngleDoubleUp color="red" size={40} />
                </button>
              </div>
              <StampButton
                onClick={() => {
                  navigate("/sponser");
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
            </div>
          </Wrapper>
          <Footer />
        </Section>
      </SectionsContainer>
    </div>
  );
}

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
  height: 80vh;
  margin-bottom: 90px;
  @media (min-width: 350px) and (max-width: 720px) {
    height: 60vh;
  } //small
  @media (min-width: 721px) and (max-width: 1080px) {
    height: 70vh;
  } //medium
`;

export default IndexPage;
