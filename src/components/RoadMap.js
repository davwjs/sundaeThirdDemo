import React from "react";
import styled from "styled-components";
import ImageOne from "../images/road1.png";
import ImageTwo from "../images/road2.png";
import ImageThree from "../images/road3.png";

const RoadMapContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 755px) {
    height: 1100px;
  }

  @media screen and (max-width: 560px) {
    height: 1000px;
  }
`;

const RoadMapWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  // grid-gap: 150px;
  margin-top: 80px;
  margin-bottom: 20px;
  justify-content: center;
  margin: 0;
  padding: 0 230px;


  @media screen and (max-width: 1356px) {
    padding: 0 220px;
  }

  @media screen and (max-width: 1213px) {
    padding: 0 200px;
  }

  @media screen and (max-width: 1085px) {
    padding: 0 180px;
  }

  @media screen and (max-width: 1044px) {
    padding: 0 160px;
  }

  @media screen and (max-width: 914px) {
    padding: 0 140px;
  }
  @media screen and (max-width: 875px) {
    padding: 0 120px;
  }

  @media screen and (max-width: 834px) {
    padding: 0 100px;
  }

  @media screen and (max-width: 793px) {
    padding: 0 80px;
  }

  @media screen and (max-width: 755px) {
    padding: 0 270px;
      grid-template-columns: 1fr;
  }

  @media screen and (max-width: 755px) {
    padding: 0 250px;
  }

  @media screen and (max-width: 673px) {
    padding: 0 230px;
  }

  @media screen and (max-width: 634px) {
    padding: 0 200px;
  }

  @media screen and (max-width: 575px) {
    padding: 0 180px;
  }

  @media screen and (max-width: 560px) {
    padding: 0 180px;
  }

  @media screen and (max-width: 414px) {
    padding: 0 120px;
  }
`;

const RoadMapCard = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

const RoadMapIcon = styled.img`
  height: 300px;
  width: 300px;
  margin-bottom: 30px;
  display: flex;

  @media screen and (max-width: 1356px) {
    height: 260px;
    width: 260px;
  }

  @media screen and (max-width: 1156px) {
    height: 230px;
    width: 230px;
  }

  @media screen and (max-width: 960px) {
    height: 200px;
    width: 200px;
  }

  @media screen and (max-width: 755px) {
    height: 180px;
    width: 180px;
  }

  @media screen and (max-width: 560px) {
    height: 150px;
    width: 150px;
  }
`;

const RoadMapH1 = styled.h1`
  display: flex;
  width: 100%;

  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 64px;
  text-align: center;
  align_items: center;
  justify-content: center;

  @media screen and (max-width: 1356px) {
    font-size: 1.95rem;
  }

  @media screen and (max-width: 1156px) {
    font-size: 1.9rem;
  }

  @media screen and (max-width: 960px) {
    font-size: 1.8rem;
  }

  @media screen and (max-width: 755px) {
    font-size: 1.75rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 1.7rem;
  }
`;

const RoadMapH2 = styled.h2`
  display: flex;
  width: 100%;

  font-size: 24px;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
  align_items: center;
  justify-content: center;

  @media screen and (max-width: 1356px) {
    font-size: 22px;
  }

  @media screen and (max-width: 1156px) {
    font-size: 20px;
  }

  @media screen and (max-width: 960px) {
    font-size: 18px;
  }

  @media screen and (max-width: 755px) {
    font-size: 16px;
  }

  @media screen and (max-width: 560px) {
    font-size: 14px;
  }
`;

const RoadMapP = styled.p`
  display: flex;
  width: 100%;

  color: #fff;
  font-size: 16px;
  text-align: center;
  text-align: center;
  align_items: center;
  justify-content: center;

  @media screen and (max-width: 1356px) {
    font-size: 15px;
  }

  @media screen and (max-width: 1156px) {
    font-size: 14px;
  }

  @media screen and (max-width: 960px) {
    font-size: 13px;
  }

  @media screen and (max-width: 755px) {
    font-size: 12px;
  }

  @media screen and (max-width: 560px) {
    font-size: 11px;
  }
`;

const RoadMap = () => {
  return (
    <RoadMapContainer id="roadmap">
      <RoadMapH1>ROADMAP</RoadMapH1>
      <RoadMapWrapper>
        <RoadMapCard>
          <RoadMapIcon src={ImageOne} />
          <RoadMapH2>PHASE 1: IN THE BEGINNING</RoadMapH2>
          <RoadMapP>A new dimension</RoadMapP>
          <RoadMapP>First drop</RoadMapP>
          <RoadMapP>Music to HAPE to</RoadMapP>
        </RoadMapCard>
        <RoadMapCard>
          <RoadMapIcon src={ImageTwo} />
          <RoadMapH2>PHASE 2: THE HAPE MACHINE</RoadMapH2>
          <RoadMapP>Second drops</RoadMapP>
          <RoadMapP>Special collections</RoadMapP>
          <RoadMapP>Simian engineering</RoadMapP>
        </RoadMapCard>
        <RoadMapCard>
          <RoadMapIcon src={ImageThree} />
          <RoadMapH2>PHASE 3: THE HAPEWALK</RoadMapH2>
          <RoadMapP>Clothing collabs</RoadMapP>
          <RoadMapP>HAPE Couture</RoadMapP>
          <RoadMapP>The runway to fame</RoadMapP>
        </RoadMapCard>
      </RoadMapWrapper>
    </RoadMapContainer>
  );
};

export default RoadMap;
