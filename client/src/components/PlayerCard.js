import React, { useState, useEffect } from "react";
import axios from "axios";
import { render } from "@testing-library/react";
import 'semantic-ui-css/semantic.css'; 
import 'semantic-ui-css/semantic.min.css'; 
import { Grid,Card } from "semantic-ui-react";



function PlayerCard(props){

    console.log("player card", props);

    return( 


        <Grid.Column padded key={props.id}>
        <Card>
        <Card.Content>
            <Card.Header>{props.player.name}</Card.Header>
            <Card.Description>{`Country: ${props.player.country}`}</Card.Description>
            <Card.Description>{`Searches: ${props.player.searches}`}</Card.Description>            
            
        </Card.Content>
        </Card>
        </Grid.Column>   
    );



}

export default PlayerCard;