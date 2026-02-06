import React, { Component } from 'react'
import './Dice.css'

class Dice extends Component {
    constructor(props) {
        super(props);
     
    }
   

    render() {

        let classIcon = `fas fa-dice-${this.props.face}`;

if(this.props.rolling){
    classIcon += ` shaking`;
}

        
        return (<i
        className={classIcon}
        style={{ fontSize: '100px', padding: '20px', color: 'purple'}}>
        </i>)
    }
}

export default Dice;
