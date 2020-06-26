import React from 'react';
import Header from './component/header';
import MainGame from './component/mainGame';


class RandomGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            randomNumber: 0,
            value: 0,
        }
    }

    componentDidMount() {
        this.setState ({
            randomNumber: this.random()
        },() => console.log('Ket Qua La: ',this.state.randomNumber));
    }

    random = () => {
        return Math.floor(Math.random() * 100) + 1;
    }

    numberWarning = (value) =>{//value duoc truyen tu thang Con
        this.setState ({
            value
        })
    }
    render() {
        return (
            <div>
                <Header numberOfGuessing={this.state.value} randomNumber={this.state.randomNumber} />
                <MainGame numberWarning={this.numberWarning} randomNumber={this.state.randomNumber} />
            </div>
        )
    }
}

export default RandomGame;
