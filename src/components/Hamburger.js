import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import styled from "styled-components";

import image1 from "../images/1.jpeg";
import image2 from "../images/2.jpeg";
import image3 from "../images/3.jpeg";
import image4 from "../images/4.jpeg";
import image5 from "../images/5.jpeg";

const HamburgerMenu = styled.div`
  display: none;
  z-index: 9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
`;

const MenuSecondaryBackgroundColor = styled.div`
  background-color: #000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
`;

const MenuLayer = styled.div`
  position: relative;
  background: #e20001;
  height: 100%;
  overflow: hidden;
`;

const MenuBackground = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-size: contain;
  background-repeat: no-repeat;
  animation: cameraPan 30s infinite;
`;

const Container = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Wrapper = styled.div`
  position: relative;
`;

const MenuLink = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 100px;
`;

const HamburgerNav = styled.nav`
  display: block;
`;

const HamburgerUl = styled.ul`
  padding: 0;
  margin: 0;
  // @media screen and (max-width: 375px) {
  //   padding-bottom: 100px;
  // }

  @media screen and (max-width: 414px) {
    padding-bottom: 100px;
  }
`;

const HamburgerLi = styled.li`
  list-style: none;
  font-size: 4rem;
  font-weight: 700;
  cursor: pointer;
  height: 110px;
  overflow: hidden;
  position: relative;
  width: 700px;

  // @media screen and (max-width: 375px) {
  //   font-size: 2rem;
  //   font-weight: 500;
  //   height: 70px;
  //   width: 160px;
  //   margin-left: 10px;
  // }

  @media screen and (max-width: 414px) {
    font-size: 2rem;
    font-weight: 500;
    height: 70px;
    width: 160px;
    margin-left: 10px;
  }
`;

const Links = styled(Link)`
  position: absolute;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #191919;
    cursor: pointer;
  }
`;

const HamburgerInfo = styled.div`
  color: #fff;
  width: 300px;

  // @media screen and (max-width: 375px) {
  //   width: 200px;
  // }

  @media screen and (max-width: 414px) {
    width: 200px;
  }
`;

const InfoP = styled.p`
  margin: 0 auto;
  font-size: 0.8rem;
`;

const InfoH3 = styled.h3`
  font-size: 1.2rem;
  margin: 8px auto;

  // @media screen and (max-width: 375px) {
  //   font-size: 1rem;
  // }

  @media screen and (max-width: 414px) {
    font-size: 1rem;
  }
`;

const ImageSection = styled.div`
  position: absolute;
  bottom: -70px;
  color: #fff;
  margin-top: 16px;
  font-size: 0.8rem;
  font-weight: 600;

  // @media screen and (max-width: 375px) {
  //   width: 300px;
  //   justify-content: center;
  //   align-items: center;
  //   display: grid;
  //   grid-template-columns: 1fr;
  //   grid-template-rows: 20px;
  //   grid-gap: 10px;
  //   margin-left: 10px;
  // }

  @media screen and (max-width: 414px) {
    width: 300px;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20px;
    grid-gap: 10px;
    margin-left: 10px;
  }
`;

const ImageSectionSpan = styled.span`
  font-weight: 400;
  cursor: pointer;
  margin: 0 32px;
  transition: 0.3s ease-in-out;

  &:first-child {
    margin-left: 64px;
  }

  &:hover {
    background: #191919;
    padding: 8px 24px;
    border-radius: 4px;
    cursor: pointer;
  }

  // @media screen and (max-width: 375px) {
  //   &:first-child {
  //     margin: 0;
  //   }
  //   margin: 0;
  // }

  @media screen and (max-width: 414px) {
    &:first-child {
      margin: 0;
    }
    margin: 0;
  }
`;

// OPEN MENU
const staggerReveal = (node1, node2) => {
  gsap.from([node1, node2], {
    duration: 0.8,
    height: 0,
    transformOrigin: "right top",
    skewY: 2,
    ease: "power3.inOut",
    stagger: {
      amount: 0.1,
    },
  });
};

// CLOSE MENU
const staggerRevealClose = (node1, node2) => {
  gsap.to([node1, node2], {
    duration: 0.8,
    height: 0,
    ease: "power3.inOut",
    stagger: {
      amount: 0.07,
    },
  });
};

// STAGGER THE LINKS TO APPEAR
const staggerText = (node1, node2, node3, node4) => {
  gsap.from([node1, node2, node3, node4], {
    duration: 0.8,
    y: 100,
    delay: 0.1,
    ease: "power3.inOut",
    stagger: {
      amount: 0.3,
    },
  });
};

// Fade up for the additonal info on our menu
const fadeInUp = (node) => {
  gsap.from(node, {
    y: 60,
    duration: 1,
    delay: 0.2,
    opacity: 0,
    ease: "power3.inOut",
  });
};

// Hover on the link
const handleHover = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: 3,
    skewX: 4,
    ease: "power1.inOut",
  });
};

// Hover off the link
const handleHoverExit = (e) => {
  gsap.to(e.target, {
    duration: 0.3,
    y: -3,
    skewX: 0,
    ease: "power1.inOut",
  });
};

// adds city image once you hover on
const handleCity = (city, target) => {
  gsap.to(target, {
    duration: 0,
    background: `url(${city}) center center`,
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 1,
    ease: "power3.inOut",
  });
  gsap.from(target, {
    duration: 0.4,
    skewY: 2,
    transformOrigin: "right top",
  });
};

// Removes the city image once you hover off
const handleCityReturn = (target) => {
  gsap.to(target, {
    duration: 0,
    skewY: 0,
  });
  gsap.to(target, {
    duration: 0.4,
    opacity: 0,
    skewY: 0,
  });
};

const Images = [
  { name: "Summer 1", image: image1 },
  { name: "Summer 2", image: image2 },
  { name: "Summer 3", image: image3 },
  { name: "Summer 4", image: image4 },
  { name: "Summer 5", image: image5 },
];

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let imageBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(line1, line2, line3, line4);
    }
  }, [state]);

  return (
    <HamburgerMenu ref={(el) => (menuLayer = el)}>
      <MenuSecondaryBackgroundColor
        ref={(el) => (reveal1 = el)}
      ></MenuSecondaryBackgroundColor>
      <MenuLayer ref={(el) => (reveal2 = el)}>
        <MenuBackground ref={(el) => (imageBackground = el)}></MenuBackground>
        <Container>
          <Wrapper>
            <MenuLink>
              <HamburgerNav>
                <HamburgerUl>
                  <HamburgerLi>
                    <Links
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line1 = el)}
                      to="/roadmap"
                    >
                      RoadMap
                    </Links>
                  </HamburgerLi>
                  <HamburgerLi>
                    <Links
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line2 = el)}
                      to="/fandq"
                    >
                      F & Q
                    </Links>
                  </HamburgerLi>
                  <HamburgerLi>
                    <Links
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line3 = el)}
                      to="/team"
                    >
                      Team
                    </Links>
                  </HamburgerLi>
                  <HamburgerLi>
                    <Links
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      ref={(el) => (line4 = el)}
                      to="/mint"
                    >
                      Mint
                    </Links>
                  </HamburgerLi>
                </HamburgerUl>
              </HamburgerNav>
              <HamburgerInfo ref={(el) => (info = el)}>
                <InfoH3>Our Promise</InfoH3>
                <InfoP>
                  Sundae School is not just a team of creatives and an array of
                  products. Our community of honor rollers around the world are
                  the true inspiration behind the brand. Join us on our discord
                  channel or just dm us on our instagram for any questions
                  regarding enrollment. Please check the 10 commandments of
                  Sundae School prior to joining to learn more about our values.
                </InfoP>
              </HamburgerInfo>
              <ImageSection>
                Summer We Drew:
                {/* Returning the list of cities */}
                {Images.map((el) => (
                  <ImageSectionSpan
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image, imageBackground)}
                    onMouseOut={() => handleCityReturn(imageBackground)}
                  >
                    {el.name}
                  </ImageSectionSpan>
                ))}
              </ImageSection>
            </MenuLink>
          </Wrapper>
        </Container>
      </MenuLayer>
    </HamburgerMenu>
  );
};

export default Hamburger;
