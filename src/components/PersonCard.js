import React, { Component } from 'react';


const PersonCard = props => {
    const { FirstName, LastName, HairColor, Age } = props
    return (
        <div>
            <h1>{LastName}, {FirstName}</h1>
            <h5>Age: { Age }</h5>
            <h5>Hair Color: { HairColor }</h5>
        </div>
    );
}


export default PersonCard;