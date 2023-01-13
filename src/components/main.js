import React, { Component } from "react";
import uniqid from "uniqid";

export class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <section className="scores">
          <div className="curScore">Current Score: {this.props.score}</div>
          <div className="bestScore"> BestScore: {this.props.bestScore}</div>
        </section>

        <section className="flags">
          {this.props.img.map((obj, i) => {
            return (
              <div key={uniqid()}>
                <img
                  src={obj.flag}
                  alt=""
                  width="400px"
                  height="200px"
                  onClick={() => {
                    this.props.gameLogic(i);
                  }}
                ></img>
                <p>{obj.desc}</p>
              </div>
            );
          })}
        </section>
      </main>
    );
  }
}

export default Main;
