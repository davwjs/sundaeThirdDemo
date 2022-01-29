import React from "react";
import styled from "styled-components";

import logo from "../images/whitelogo.png";

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
`;

const Details = (props) => {
  return (
    <DetailsContainer>
      <Logo>
        <img src={logo} />
      </Logo>
    </DetailsContainer>
  );
};

export default Details;
