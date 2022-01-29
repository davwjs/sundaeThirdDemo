import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";

import Image from "../images/cloth3.png";
import Details from "./Detail";

const CardWrapper = styled.div`
  height: 800px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 414px) {
    margin-top: 100px;
    height: 600px;
  }
`;

const CardContainer = styled(motion.div)`
  width: 400px;
  height: 650px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #b87333;
  color: #fff;
  position: relative;
  cursor: grab;

  @media screen and (max-width: 414px) {
    width: 300px;
    height: 450px;
  }
`;

const CircleWrapper = styled.div`
  right: 30px;
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  top: -4.2rem;
  right: -10rem;
  z-index: 5;
  background-color: #1d1f21;
  border-radius: 50%;

  @media screen and (max-width: 414px) {
    width: 300px;
    height: 300px;
  }
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 15px;
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1rem;
`;

const NikeText = styled.h1`
  color: #fff;
  padding-top: 400px;
  z-index: 10;
  font-size: 76px;
  font-weight: 900;

  @media screen and (max-width: 414px) {
    font-size: 50px;
    padding-top: 250px;
  }
`;

const ShoesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Shoes = styled(motion.div)`
  margin-top: 100px;
  width: auto;
  height: 500px;
  z-index: 99;
  user-select: none;
  margin-left: 5rem;
  margin-bottom: 8rem;
  img {
    width: auto;
    height: 100%;
    user-select: none;
  }

  @media screen and (max-width: 414px) {
    margin-top: 250px;
  }
`;

const Card = (props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <CardWrapper>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle />
          </CircleWrapper>
          <ShoesWrapper>
            <Shoes
              // style={{ x, y, rotateX, rotateY, rotate: "-25deg", z: 100000 }}
              style={{ x, y, rotateX, rotateY, rotate: "0deg", z: 100000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
            >
              <img src={Image} />
            </Shoes>
          </ShoesWrapper>
          <NikeText>Sundae School</NikeText>
        </TopContainer>
        <BottomContainer>
          <Details />
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  );
};

export default Card;
