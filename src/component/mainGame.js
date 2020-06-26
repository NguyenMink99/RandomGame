import React, { Component } from "react";

class MainGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfGuessing: 0,
      currentGuessing: 0,
      message: "",
    };
  }
  resetGame = () => {
    window.location.reload();
  }
  onChange = (event) => {
    //console.log(event.target.value)
    this.setState({
      currentGuessing: Number(event.target.value),
    });
  };

  guessing = () => {
    let { currentGuessing, message, numberOfGuessing } = this.state;

    if (currentGuessing > this.props.randomNumber) {
      message = "Number is Bigger";
    } else if (currentGuessing < this.props.randomNumber) {
      message = "Number is Smaller";
    } else {
      message = "Chuc Mung You Win";
      alert(message);
    }
    numberOfGuessing++;
    this.setState({ message, numberOfGuessing });//Update lai gia tri cua message va numberOfGuessing
    this.props.numberWarning(numberOfGuessing);//truyen gia tri vao ham numberWarning cua thang Cha
    if(numberOfGuessing >=7) { alert ("Ban Vuot Qua So Lan Doan, Result in console")}
  };
  render() {
    let { numberOfGuessing, currentGuessing, message } = this.state;

    return (
      <div> 
        <div className="main text-center">
          <button className="my-4" onClick= { this.resetGame }>New Game</button>
          <hr />
          <h5>So lan ban doan la: {numberOfGuessing}</h5>
          <h5>So ban doan la: {currentGuessing} </h5>
          <input className="ip" type="text" onChange={this.onChange} />
          <button className="btn" onClick={this.guessing}>
            Doan xem
          </button>
          <p>{message}</p>
        </div>
      </div>
    );
  }
}

export default MainGame;
