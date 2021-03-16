import style from "../styles/landing.css";
import { Component } from "react";

export class Landing extends Component {
  render() {
    return (
      <div class="about">
        <div class="about-big">
          <div class="about-name">Hello, I am Abris.</div>
        </div>
        <div class="about-small">
          <div class="about-description">
            <span class="about-me"> (about me) </span>I am a software
            engineering student at McGill University, Canada. I like making
            things using computers. I made this personal website to try my hand
            in web development. You can see how that's going...
          </div>
        </div>
      </div>
    );
  }
}
