import React, { Component } from 'react';
import './App.css';
import fetchStates from './fetchStates'
import Header from './components/Header/Header';
import Hangman from './components/Hangman/Hangman';
import TextEntry from "./components/TextEntry/TextEntry";
import CorrectGuessList from './components/CorrectGuessList/CorrectGuessList';
import NewGameButton from './components/NewGameButton/NewGameButton';


class App extends Component {
  state = {
    currentState: '',
    lose: false,
    userGuesses: [],
    wrongGuessCnt: 0,
    currentDiagram: 0,
    userCorrectGuesses: '',
    win:false
  };
  constructor(props) {
    super(props);
    this.getState();
    this.baseState = JSON.parse(JSON.stringify(this.state));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.userCorrectGuesses !== this.state.userCorrectGuesses){
      this.setState({
        win: this.isWin()
      });
    }
  }
  async getState() {
    let stateList = await fetchStates();
    let rand = Math.floor(Math.random() * stateList.length);
    this.setState({
      currentState: stateList[rand]
    });
  }

  onTextClick = (letter) => {
    
    if (!this.state.userGuesses.includes(letter)) {
      this.setState({ userGuesses: [...this.state.userGuesses, letter] });
    }
    if (!this.state.currentState.includes(letter)) {
      this.setState({
        wrongGuessCnt: this.state.wrongGuessCnt < 6 ? this.state.wrongGuessCnt + 1 : 0,
        currentDiagram: (this.state.wrongGuessCnt > -1 && this.state.currentDiagram < 6) ? this.state.currentDiagram + 1 : 0,
        lose: this.state.wrongGuessCnt === 5
      });
    } else {
      this.setState({ userCorrectGuesses: this.state.userCorrectGuesses.concat(letter) });
    }
  }

  isWin = () => {
    let originalState = [...new Set(this.state.currentState.split('').sort())];
    let userGuessState = [...this.state.userCorrectGuesses.split('').sort()];

    if (originalState.length !== userGuessState.length) {
      return false;
    } else {
      for (var i = 0; i < originalState.length; i++) {
        if (originalState[i] !== userGuessState[i]) {
          return false;
        }
        return true;
      }
    }
  }

  newGame = () => {
    this.setState(this.baseState);
    this.getState();
  }

  render() {
    return (
      (!this.state.lose) ?
        (this.state.win) ?
          <div>
            <Header></Header>
            <Hangman
              currentDiagram={this.state.currentDiagram}
              lose={this.state.lose}
              win={true}
            ></Hangman>
            <NewGameButton clicked={() => this.newGame()}></NewGameButton>
          </div> :
          <div>
            <Header></Header>
            <Hangman
              currentDiagram={this.state.currentDiagram}
              lose={this.state.lose}
              win={false}
            ></Hangman>
            <CorrectGuessList
              currentState={this.state.currentState}
              guess={this.state.userGuesses}
              lose={this.state.lose}
            ></CorrectGuessList>
            <br></br>
            <TextEntry
              clicked={this.onTextClick}
              guess={this.state.userGuesses}></TextEntry>
          </div> :
        <div>
          <Header></Header>
          <Hangman
            currentDiagram={this.state.currentDiagram}
            lose={this.state.lose}
            win={false}
          ></Hangman>
          <CorrectGuessList
            currentState={this.state.currentState}
            guess={this.state.userGuesses}
            lose={this.state.lose}
          ></CorrectGuessList>
          <NewGameButton clicked={() => this.newGame()}></NewGameButton>
        </div>
    );
  }
}

export default App;
