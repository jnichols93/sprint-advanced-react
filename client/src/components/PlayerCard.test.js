import React from 'react';
import ReactDOM from 'react-dom';
import PlayerCard from "./PlayerCard.js";
import { render } from "@testing-library/react";

describe("<PlayerCard />", () => {

    
    
    it("renders a players data without crashing", () => {

        //test data
        const player = {
            name: "Alex Morgan",
            country: "United States",
            searches: 100
        }        

        render(         

                <PlayerCard key = {player.name} player = {player} />  
        );

    });       
      

       

})
