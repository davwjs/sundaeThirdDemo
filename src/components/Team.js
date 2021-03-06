import React from "react";
import styled from "styled-components";
import ImageOne from "../images/team3.png";
import ImageTwo from "../images/team1.png";
import ImageThree from "../images/team2.png";

const TeamContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const TeamWrapper1 = styled.div`
  margin: 0;
  display: flex;
  grid-template-columns: 1fr;
  align-items: center;
  grid-gap: 36px;
  padding: 0 550px;
  margin-bottom: 150px;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 1356px) {
    padding: 0 450px;
  }

  @media screen and (max-width: 1156px) {
    padding: 0 350px;
  }

  @media screen and (max-width: 960px) {
    padding: 0 250px;
  }

  @media screen and (max-width: 755px) {
    padding: 0 150px;
  }

  @media screen and (max-width: 560px) {
    padding: 0 50px;
  }
`;

const TeamCard1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 340px;
  width: 100%;
  padding: 30px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    width: 300px;
  }
`;

const TeamIcon1 = styled.img`
  display: flex;

  height: 200px;
  width: 200px;
  margin-bottom: 10px;
  border-radius: 100px;

  @media screen and (max-width: 560px) {
    height: 150px;
    width: 150px;
  }
`;

const TeamH1 = styled.h1`
  display: flex;

  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 64px;
  text-align: center;

  @media screen and (max-width: 560px) {
    font-size: 1.5rem;
  }
`;

const TeamH2 = styled.h2`
  display: flex;

  font-size: 1.7rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 560px) {
    font-size: 1.2rem;
  }
`;

const TeamP1 = styled.p`
  display: flex;

  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
  color: #fff;
  margin-bottom: 10px;
  text-align: center;

  @media screen and (max-width: 560px) {
    font-size: 1rem;
  }
`;

const TeamP2 = styled.p`
  display: flex;

  font-size: 1rem;
  text-align: center;
  color: #fff;
  text-align: center;

  @media screen and (max-width: 560px) {
    font-size: 0.8rem;
  }
`;

const Team = () => {
  return (
    <TeamContainer id="team">
      <TeamH1>MEET OUR TEAM</TeamH1>
      <TeamWrapper1>
        <TeamCard1>
          <TeamIcon1 src={ImageTwo} alt={ImageTwo} />
          <TeamH2>Toadler</TeamH2>
          <TeamP1>PRIMAL HAPE</TeamP1>
          <TeamP2>
            Founder of this project. Lead Digital Artist on the project.
          </TeamP2>
        </TeamCard1>
      </TeamWrapper1>
      <TeamWrapper1>
        <TeamCard1>
          <TeamIcon1 src={ImageOne} alt={ImageTwo} />
          <TeamH2>Toadler</TeamH2>
          <TeamP1>PRIMAL HAPE</TeamP1>
          <TeamP2>
            Founder of this project. Lead Digital Artist on the project.
          </TeamP2>
        </TeamCard1>
      </TeamWrapper1>
      <TeamWrapper1>
        <TeamCard1>
          <TeamIcon1 src={ImageThree} alt={ImageTwo} />
          <TeamH2>Toadler</TeamH2>
          <TeamP1>PRIMAL HAPE</TeamP1>
          <TeamP2>
            Founder of this project. Lead Digital Artist on the project.
          </TeamP2>
        </TeamCard1>
      </TeamWrapper1>
    </TeamContainer>
  );
};

export default Team;
