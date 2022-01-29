import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import RoadMap from "./components/RoadMap";
import FAndQ from "./components/FAndQ";
import Team from "./components/Team";
import Mint from "./pages/mintPage";
import styled from "styled-components";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;

  @media screen and (max-width: 414px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Wrapper = styled.div`
  padding: 0;
`;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Container>
          <Wrapper>
            <HomeContainer>
              <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/roadmap" component={RoadMap} />
                <Route exact path="/fandq" component={FAndQ} />
                <Route exact path="/team" component={Team} />
                <Route exact path="/mint" component={Mint} />
              </Switch>
            </HomeContainer>
          </Wrapper>
        </Container>
      </AppContainer>
    </Router>
  );
}

export default App;
