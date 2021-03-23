import style from "../styles/typingeffect.css";
import { Component } from "react";

export class TypingEffect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      done: false,
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 800 && !this.state.done) {
      this.check();
    }
  };

  check = () => {
    console.log(this.state.index);
    if (this.state.index < this.props.text.length) {
      setTimeout(this.incrementIndex, 1000);
    } else {
      this.setState({ done: true });
    }
  };

  incrementIndex = () => {
    this.setState({ index: this.state.index + 1 }, this.check);
  };

  render() {
    const { index } = this.state;
    return (
      <div className="typing-container" id="type">
        {this.props.text.slice(0, index)}
      </div>
    );
  }
}

export default TypingEffect;
