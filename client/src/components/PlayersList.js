import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components';
import axios from "axios";
import { render } from "@testing-library/react";
import PlayerCard from "./PlayerCard.js";

import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 


const PlayersInfoDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-content: space-between;
    align-content: center;
    align-content: space-around;
    width: 100%;
    height: auto;   
`;

class PlayersList extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            players: []
        }
    }

    componentDidMount(){    

        //request to api
        axios.get("http://localhost:5000/api/players")
        .then( response => {

            console.log("server response", response.data);

            
            this.setState({players: response.data});

        })

        .catch(error => {
            console.log(error);
        
        })  
        
        

    }

    render(){
        console.log("players list", this.props.playersList);

        return(
            <PlayersInfoDiv>
            

            {this.state.players.map ( (player, index) => 

                 <PlayerCard key = {index} player = {player} />  
            )}

        </PlayersInfoDiv>
        );

    }



}

export default PlayersList;