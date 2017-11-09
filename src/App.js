import React, { Component } from "react";
import BoardHead from "./components/BoardHead";
import Board from "./components/Board";

class App extends Component {
  constructor() {
    super();

    this.state = {
      gameStatus: "running", // can be running, reset, or ended
      time: 0, // in seconds, will format later
      flagCount: 10,
      openCells: 0,
      mines: 10,
      rows: 10,
      columns: 10,
      intervalId: null
    };

    this.baseState = this.state;
  }

  
  componentWillMount() {
    this.intervals = [];
  }
  

  setInterval = (fn, t) => {
    this.intervals.push(setInterval(fn, t));
  }

  reset = () => {
   this.intervals.map(clearInterval);
    this.setState(Object.assign({}, this.baseState));
  };

  tick = () => {
    if (this.state.openCells > 0 && this.state.gameStatus === "running") {
      this.setState({ time: this.state.time + 1 });
    }
  };

  endGame = () => {
    this.setState({
      gameStatus: "ended"
    });
  };

  changeFlagAmount = amount => {
    this.setState({ flagCount: this.state.flagCount + amount });
  };

  handleCellClick = () => {
    if (this.state.openCells === 0) {
      this.intervalId = this.setInterval(this.tick, 1000)
    }
    this.setState(prevState => {
      return { openCells: prevState.openCells + 1 };
    });
  };

  render() {
    return (
      <div className="minesweeper">
        <h1>Welcome to minesweeper.</h1>
        <BoardHead
          time={this.state.time}
          flagsUsed={this.state.flagCount}
          reset={this.reset}
        />
        <Board
          openCells={this.state.openCells}
          mines={this.state.mines}
          rows={this.state.rows}
          columns={this.state.columns}
          endGame={this.endGame}
          status={this.state.gameStatus}
          onCellClick={this.handleCellClick}
          changeFlagAmount={this.changeFlagAmount}
        />
      </div>
    );
  }
}

export default App;
