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

  @media screen and (max-width: 414px) {
    max-height: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    height: 1600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const RoadMapWrapper = styled.div`
  display: flex;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 150px;
  margin-top: 80px;
  margin-bottom: 20px;
  justify-content: center;
  padding: 0 70px;

  @media screen and (max-width: 414px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 100px;
    margin-top: 0;f
    margin-bottom: 0;
    grid-gap: 0px;
  }

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0 200px;
    margin-top: 20px;
    margin-bottom: 0;
    grid-gap: 0px;
  }
`;

const RoadMapCategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const RoadMapCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
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

  @media screen and (max-width: 414px) {
    height: 100px;
    width: 100px;
  }
`;

const RoadMapH1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 64px;
  justify-content: center;

  @media screen and (max-width: 414px) {
    font-size: 1.5rem;
  }
`;

const RoadMapH2 = styled.h2`
  font-size: 24px;
  margin-bottom: 30px;
  color: #fff;

  @media screen and (max-width: 414px) {
    font-size: 15px;
  }
`;

const RoadMapP = styled.p`
  color: #fff;
  font-size: 1rem;
  text-align: center;

  @media screen and (max-width: 414px) {
    font-size: 12px;
    line-height: 20px;
  }
`;

const RoadMap = () => {
  return (
    <RoadMapContainer id="roadmap">
      <RoadMapH1>ROADMAP</RoadMapH1>
      <RoadMapCategoryWrapper>
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
      </RoadMapCategoryWrapper>
    </RoadMapContainer>
  );
};

export default RoadMap;
