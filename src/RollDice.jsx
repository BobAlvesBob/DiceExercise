import React, { Component } from 'react'
import Dice from './Dice' // Importamos o filho

class RollDice extends Component {
    // A propriedade estática defaultProps guarda dados constantes
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    constructor(props) {
        super(props);
        this.state = {
            die1: 'one',    // Estado do dado 1
            die2: 'one',    // Estado do dado 2
            rolling: false  // Estado: está rolando agora?
        };
    }

    roll = () => {
        // 1. Pegar 2 faces aleatórias do array this.props.sides
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];

        // 2. Atualizar o state com as novas faces E dizer que está rolando (rolling: true)
        this.setState({ die1: newDie1, die2: newDie2, rolling: true });

        // 3. Esperar 1 segundo (1000ms) e parar a animação (rolling: false)
        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000);
    };

    render() {
        return (
            <div className='RollDice' style={{textAlign: 'center', marginTop: '50px'}}>
                <div className='RollDice-container'>
                    {/* Renderizamos os dois dados filhos, passando as props */}
                    <Dice face={this.state.die1} rolling={this.state.rolling} />
                    <Dice face={this.state.die2} rolling={this.state.rolling} />
                </div>

                <br />

                {/* Botão com lógica: 
                    - Se rolling for true, desabilita o botão.
                    - Muda o texto dependendo se está rolando ou não.
                */}
                <button 
                    onClick={this.roll} 
                    disabled={this.state.rolling}
                    style={{padding: '15px 30px', fontSize: '20px', backgroundColor: 'black', color: 'white', borderRadius: '5px'}}
                >
                    {this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
                </button>
            </div>
        )
    }
}

export default RollDice;