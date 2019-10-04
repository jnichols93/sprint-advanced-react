import React from 'react';
import ReactDOM from 'react-dom';
import PlayersList from "./PlayersList.js";
import { render } from "@testing-library/react";

describe("<PlayersList />", () => {
    
    it("renders without crashing", () => {

        render( <PlayersList />);

    });      

})
