import React, { useState } from "react";
import { DropdownData } from "../data/DropdownData";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const SectionWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  postion: flex;
  color: #fff;
  font-weight: 600;
  font-size: 2rem;
`;

const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  postion: flex;
  height: 100vh;
  //   box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
`;

const Conatiner = styled.div`
  width: 100%;
  positon: flex;
  top: 30%;
`;

const Wrap = styled.div`
  padding: 0 550px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 2rem;
  }

  span {
    margin-right: 1.5rem;
  }

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

    h1 {
      padding: 1.8rem;
      font-size: 1.8rem;
    }
  }

  @media screen and (max-width: 560px) {
    padding: 0 50px;

    h1 {
      padding: 1.6rem;
      font-size: 1.6rem;
    }
  }
`;

const Dropdown = styled.div`
  background: #1c1c1c;
  color: #fff;
  widht: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;

  p {
    font-size: 2rem;
  }

  @media screen and (max-width: 755px) {
    p {
      font-size: 1.6rem;
    }
  }

  @media screen and (max-width: 560px) {
    p {
      font-size: 1.4rem;
    }
  }
`;

const FAndQ = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  return (
    <IconContext.Provider value={{ color: "#fff", size: "25px" }}>
      <SectionWrapper>
        F & Q
        <Section>
          <Conatiner>
            {DropdownData.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h1>{item.question}</h1>
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
          </Conatiner>
        </Section>
      </SectionWrapper>
    </IconContext.Provider>
  );
};

export default FAndQ;
