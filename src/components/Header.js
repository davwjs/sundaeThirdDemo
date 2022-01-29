import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import styled from "styled-components";

const HeaderSection = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
`;

const Conatiner = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Wrapper = styled.div`
  padding: 0;
`;

const InnerHeader = styled.div`
  position: relative;
  z-index: 10;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.div`
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
`;

const Links = styled(Link)`
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
`;

const HeaderMenu = styled.div`
border: none;
background: none;
outline: none;
cursor: pointer;
font-size: 1rem;
color: #fff;
`;

const HeaderButton = styled.button`
border: none;
background: none;
outline: none;
cursor: pointer;
font-size: 1rem;
color: #fff;
`;
const Header = ({ history }) => {
  // State of our Menu
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });
  // State of our button
  const [disabled, setDisabled] = useState(false);

  //Use Effect
  useEffect(() => {
    //Listening for page changes.
    history.listen(() => {
      setState({ clicked: false, menuName: "Menu" });
    });
  }, [history]);

  // Toggle menu
  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: "Close",
      });
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: "Menu",
      });
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: "Close",
      });
    }
  };

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 1200);
  };

  return (
    <HeaderSection>
      <Conatiner>
        <Wrapper>
          <InnerHeader>
            <HeaderLogo>
              <Links to="/">Sundae.School</Links>
            </HeaderLogo>
            <HeaderMenu>
              <HeaderButton disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </HeaderButton>
            </HeaderMenu>
          </InnerHeader>
        </Wrapper>
      </Conatiner>
      <Hamburger state={state} />
    </HeaderSection>
  );
};

export default withRouter(Header);
