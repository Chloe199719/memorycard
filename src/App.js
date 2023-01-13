import "./App.css";

import React, { Component } from "react";
import Header from "./components/header";
import gayflag from "./components/assets/gayflag.png";
import lesbianflag from "./components/assets/lesbianflag.jpg";
import pansexualflag from "./components/assets/pansexualflag.png";
import bisexual from "./components/assets/Bisexual_Pride_Flag.svg.png";
import transflag from "./components/assets/transflag.png";
import asexualFlag from "./components/assets/Asexual_flag.png";
import demisexualFlag from "./components/assets/demisexual-flag.png";
import agender from "./components/assets/agenderflag.jpg";
import Polyamory from "./components/assets/Polyamory_Pride_Flag.svg.png";
import demigirlFlag from "./components/assets/Demigirl_Flag.svg.png";
import demiboyFlag from "./components/assets/demiboyflag.jpg";
import nonbinaryFlag from "./components/assets/nonbinaryFlag.png";
import Main from "./components/main";
import Footer from "./components/footer";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      img: [
        { flag: gayflag, clicked: false, desc: `Gay Flag` },
        { flag: lesbianflag, clicked: false, desc: `Lesbian Flag` },
        { flag: pansexualflag, clicked: false, desc: `Pansexual Flag` },
        { flag: bisexual, clicked: false, desc: `Bisexual Flag` },
        { flag: transflag, clicked: false, desc: `Trans Flag` },
        { flag: asexualFlag, clicked: false, desc: "ASexual Flag" },
        { flag: demisexualFlag, clicked: false, desc: "DemiSexual Flag" },
        { flag: agender, clicked: false, desc: `Agender Flag` },
        { flag: Polyamory, clicked: false, desc: "Polyarmory Flag" },
        { flag: demigirlFlag, clicked: false, desc: "DemiGirl Flag" },
        { flag: demiboyFlag, clicked: false, desc: `DemiBoy Flag` },
        { flag: nonbinaryFlag, clicked: false, desc: `NonBinary Flag` },
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
  componentDidMount() {
    this.shuffle();
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
        <Footer />
      </>
    );
  }
}

export default App;
