import React from "react";
import styled from "styled-components";

import ImageOne from "../images/cloth1.png";

import Card from "./Card";
import Video from "./Video";

const Section = styled.section`
  margin: 0;
  padding: 0;
  margin-top: 100vh;
  width: 100%;
  height: 700px;
  padding-bottom: 2rem;

  @media screen and (max-width: 414px) {
    margin: 0;
    padding: 0;
    padding-top: 85vh;
    width: 100%;
    padding-bottom: 2rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;
  padding-bottom: 100px;

  @media screen and (max-width: 755px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 414px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? 1 : 2)};

  @media screen and (max-width: 414px) {
    padding-top: 200px;
  }
`;

const ColumnRight = styled.div`
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? 2 : 1)};
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media screen and (max-width: 414px) {
    width: 100%;
    order: ${({ reverse }) => (reverse ? 1 : 2)};
    padding-top: 150px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 414px) {
      width: 70%;
      height: 70%;
    }
  }
`;

const Header = styled.h1`
  color: #fff;
  margin-bottom: 1rem;
  font-size: 3rem;
  font-weight: 600;

  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 755px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 414px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  color: #fff;
  margin-bottom: 2rem;
  font-size: 18px;
  line-height: 1.5;

  @media screen and (max-width: 960px) {
    font-size: 0.8rem;

  }

  @media screen and (max-width: 755px) {
    font-size: 0.8rem;

  }

  @media screen and (max-width: 560px) {
    font-size: 0.8rem;

  }

  @media screen and (max-width: 414px) {
    font-size: 0.8rem;
  }
`;

const AboutData = {
  heading: "Minimum GPA required for matriculation is 4.20",
  paragraphOne:
    "Sundae School is a craft cann@bi$ brand and a smoke₩ear label born in Seoul and raised in California. We imagine an alternate green, hazy universe where God in her highest inhales and exhales to create the world. Our mission is to globalize [redacted] by serving great, reliable highs and illustrating narratives that contextualize and de-stigmatize the plant.",
  paragraphTwo:
    "We are a team of product-oriented, mission-driven creatives and midnight tokers. As a team comprised of immigrants, LGBTQIA+, and people of color, we are committed to building an industry and community that reflects everyone, not just the lucky few. In line with our commitment to diversity and equity, we donate 1% of our sales through Beam, and work specifically with minority owned businesses - from equity-owned flower businesses in California to garment factories hiring the single-parents in Seoul. We make it a priority to partner with people and brands who reflect our ideals.",
  paragraphThree:
    "Sundae School is not just a team of creatives and an array of products. Our community of honor rollers around the world are the true inspiration behind the brand. Join us on our discord channel or just dm us on our instagram for any questions regarding enrollment. Please check the 10 commandments of Sundae School prior to joining to learn more about our values.",
  image: ImageOne,
  delay: 100,
};

const About = () => {
  return (
    <>
      <Video />
      <Section id="about">
        <Container>
          <ColumnLeft>
            <Header>{AboutData.heading}</Header>
            <Paragraph>{AboutData.paragraphOne}</Paragraph>
            <Paragraph>{AboutData.paragraphTwo}</Paragraph>
            <Paragraph>{AboutData.paragraphThree}</Paragraph>
          </ColumnLeft>
          <ColumnRight>
            <Card />
          </ColumnRight>
        </Container>
      </Section>
    </>
  );
};

export default About;
