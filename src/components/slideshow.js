import style from "../styles/slideshow.css";
import { Component } from "react";

export class Slideshow extends Component {
  render() {
    return (
      <div className="slideshow-center">
        <div className="slideshow-container">
          <div className="sidebar">
            <ol>
              <li>
                <a>greeHill</a>
              </li>
              <li>
                <a href="#">Karolinska</a>
              </li>
              <li>
                <a>AISB</a>
              </li>
            </ol>
          </div>
          <div className="content"></div>
        </div>
      </div>
    );
  }
}

export default Slideshow;
