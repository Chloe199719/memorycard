import "./App.css";

import React, { Component } from "react";
import Header from "./components/header";
import gayflag from "./components/assets/gayflag.png";
import lesbianflag from "./components/assets/lesbianflag.jpg";
import pansexualflag from "./components/assets/pansexualflag.png";
import bisexual from "./components/assets/Bisexual_Pride_Flag.svg.png";
import transflag from "./components/assets/transflag.png";
import Main from "./components/main";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      img: [
        { flag: gayflag, clicked: false },
        { flag: lesbianflag, clicked: false },
        { flag: pansexualflag, clicked: false },
        { flag: bisexual, clicked: false },
        { flag: transflag, clicked: false },
      ],
      score: 0,
      bestscore: 0,
    };
  }
  gamelogic = (i) => {
    if (!this.state.img[i].clicked) {
      const temparr = [...this.state.img];
      temparr[i].clicked = true;
      this.setState({ img: temparr, score: this.state.score + 1 });
      this.shuffle();
    } else {
      const tempArr = [...this.state.img];
      tempArr.forEach((a) => {
        a.clicked = false;
      });
      this.setState({ img: tempArr, score: 0 });
      this.shuffle();
    }
  };

  checkBestScore = () => {
    if (this.state.score > this.state.bestscore) {
      this.setState({ bestscore: this.state.score });
    }
  };
  shuffle = () => {
    const arrcopy = [...this.state.img];
    let shuffled = arrcopy
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    this.setState({ img: shuffled });
  };
  componentDidUpdate() {
    this.checkBestScore();
  }
  render() {
    return (
      <>
        <Header />
        <Main
          img={this.state.img}
          gameLogic={this.gamelogic}
          score={this.state.score}
          bestScore={this.state.bestscore}
        />
      </>
    );
  }
}

export default App;
