import React, { Component } from "react";
import images from "./friends.json";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Start from "./components/Start";

class App extends Component {
  state = {
    images,
    message: "",
    score: 0,
    topScore: 0,
  };

  handleClick = (id, clicked) => {
    const imageOrder = this.state.images;

    if (clicked) {
      imageOrder.forEach((image, index) => {
        imageOrder[index].clicked = false;
      });
      return this.setState({
        image: imageOrder.sort(() => Math.random() - 0.5),
        message: "Game Over!",
        score: 0,
      });
    } else {
      imageOrder.forEach((image, index) => {
        if (id === image.id) {
          imageOrder[index].clicked = true;
        }
      });

      const { topScore, score } = this.state;
      const newScore = score + 1;
      const newTopScore = newScore > topScore ? newScore : topScore;

      return this.setState({
        image: imageOrder.sort(() => Math.random() - 0.5),
        message: "Yay!",
        score: newScore,
        topScore: newTopScore,
      });
    }
  };

  render() {
    return (
      <>
        <Start></Start>
        <Wrapper>
          <Title></Title>
          <div className="message">
            <p>{this.state.message}</p>
          </div>
          <div className="score">
            <p>
              Score: {this.state.score} | Top Score: {this.state.topScore}
            </p>
          </div>
          {this.state.images.map((image) => (
            <FriendCard
              key={image.id}
              id={image.id}
              name={image.name}
              clicked={image.clicked}
              image={image.image}
              handleClick={this.handleClick}
            />
          ))}
        </Wrapper>
      </>
    );
  }
}

export default App;
