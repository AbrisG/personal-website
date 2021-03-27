import { Sun, Moon } from "react-feather";
import { Component } from "react";
import style from "../styles/lightmode.css";
import { darkModeColors, lightModeColors } from "../constants";

export class LightMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLight: false,
    };
  }

  applyColors = (colorJSON) => {
    for (const [key, v] of Object.entries(colorJSON)) {
      document.documentElement.style.setProperty(v.name, v.value);
    }
  };

  handleClick = () => {
    if (this.state.isLight) {
      this.applyColors(darkModeColors);
    } else {
      this.applyColors(lightModeColors);
    }
    this.setState({ isLight: !this.state.isLight });
  };

  // handleClick = () => {
  //   document.body.classList.toggle("light-mode");
  //   this.setState({ isLight: !this.state.isLight });
  // };

  render() {
    const { isLight } = this.state;
    return (
      <div className="lightmode">
        <Sun
          style={{ display: isLight ? "none" : "inline-block" }}
          onClick={this.handleClick}
        />
        <Moon
          style={{ display: isLight ? "inline-block" : "none" }}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}
