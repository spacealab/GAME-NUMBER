import React from 'react';

import Game from './components/Game';

class App extends React.Component {
  state = {
    gameId: 1,
  };
  restGame = () => {
    this.setState((prevState) => {
      return { gameId: prevState.gameId + 1 };
    });
  };
  render() {
    return (
      <Game 
        key={this.state.gameId} 
        onPlayAgain={this.resetGame}
        randomNumberCount={6} 
        initialSeconds={10}
      />
    );
  }
}

export default App;
