import React, { Component } from 'react'

class Dice extends Component {
    constructor(props) {
        super(props);
        this.state={diceNumber:1}
    }
    tossDice = () =>{let newNum =  Math.floor(Math.random()*6)+1;
        this.setState({diceNumber:newNum})

    };
    

    render() {

        const faces = ['one', 'two', 'three', 'four', 'five', 'six'];

         const faceText  = faces[this.state.diceNumber -1];


        const iconClass = `fas fa-dice-${faceText}`;

       
        return (<div>
      <h1>Roll the dice!</h1>
      <i className={iconClass} style={{fontSize: '100px',color: 'purple'}}>
</i>
<br/><br/>
<button onClick={this.tossDice} style={{padding: '20px'}}>Toss Dice</button>

        </div>)
    }
}

export default Dice;
