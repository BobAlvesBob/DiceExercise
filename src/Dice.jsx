import React, { Component } from 'react'

class Dice extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h1>Icon: </h1>
            <i className="fas fa-dice-one" style={{ fontSize: '50px', color: 'purple' }}> </i>
            <i className="fa-solid fa-dice-two" style={{ fontSize: '50px', color: 'purple' }}></i>
            <i className="fa-solid fa-dice-three" style={{ fontSize: '50px', color: 'purple' }}></i>
            <i className="fa-solid fa-dice-four" style={{ fontSize: '50px', color: 'purple' }}></i>
            <i className="fa-solid fa-dice-five" style={{ fontSize: '50px', color: 'purple' }}></i>
            <i className="fa-solid fa-dice-six" style={{ fontSize: '50px', color: 'purple' }}></i>


        </div>)
    }
}

export default Dice;
