import React, { Component } from "react";
import uniqid from "uniqid";

export class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div> {this.props.score}</div>
        <div> BestScore: {this.props.bestScore}</div>
        {this.props.img.map((obj, i) => {
          console.log(obj.clicked);
          return (
            <img
              src={obj.flag}
              alt=""
              key={uniqid()}
              width="400px"
              height="200px"
              onClick={() => {
                this.props.gameLogic(i);
              }}
            ></img>
          );
        })}
      </div>
    );
  }
}

export default Main;
