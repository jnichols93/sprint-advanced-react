import React from 'react';
import styled from 'styled-components'
import PlayersList from "./components/PlayersList.js";
import './App.css';
import Navbar from "./components/Navbar";
import useLocalStorage from "./hooks/useLocalStorage.js";
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import { Grid, Form, Input, TextArea, Button, Select } from "semantic-ui-react";


//styled component - main page container
const Container = styled.div`
    display: flex;
    justify-content: center;
   
`;

//styled component - div containing the main heading and the cards
const AppContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
   
    
    
`;

//styled component - page heading
const MainHeading = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: black;
  text-stroke: 5px black;
 
`;


function App() {

  
  return (

    <Container>
      <AppContainer>
      
      <Navbar />

      <MainHeading>Women's World Cup Players Search Rankings</MainHeading>      
      <PlayersList />
      </AppContainer>
      
    </Container>
  );
}
export default App;