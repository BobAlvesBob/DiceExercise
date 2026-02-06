
import React, { Component } from 'react'
import RollDice from './RollDice'
import './App.css'


class App extends Component{
   constructor(props){
    super(props)
   }
    render(){
        return(
            <div>
                <RollDice/>
            </div>
        )
    }
   } 


export default App;