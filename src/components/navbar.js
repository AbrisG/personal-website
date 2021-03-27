import styles from "../styles/navbar.css";
import { Component } from "react";
import { EmailBanner } from "./emailbanner";
import { SocialsBanner } from "./socialsbanner";
import { LightMode } from "./lightmode";

const C = {
  staticHeight: 80,
  scrollHeight: 60,
};

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollPos: window.scrollY,
      slide: 0,
      height: 80,
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const navbar = document.getElementById("navbar-scroll");
    var { prevScrollPos } = this.state;
    var currentScrollPos = window.scrollY;
    var scrollDown = currentScrollPos >= prevScrollPos;
    var atTop = currentScrollPos < 40;

    if (atTop) {
      this.setState({ height: C.staticHeight });
      navbar.style.boxShadow = null;
    }
    if (scrollDown && !atTop) {
      this.setState({ slide: C.scrollHeight * -1, height: C.scrollHeight });
      navbar.style.boxShadow = null;
    }
    if (!scrollDown && !atTop) {
      this.setState({ slide: 0, height: C.scrollHeight });
      navbar.style.boxShadow = "0 10px 30px -10px black";
    }
    this.setState({
      prevScrollPos: currentScrollPos,
    });
  };

  render() {
    const { slide, height } = this.state;
    return (
      <div>
        <div
          className="header"
          id="navbar-scroll"
          onScroll={this.onScroll}
          style={{
            transform: `translateY(${this.state.slide}px)`,
            height: `${this.state.height}px`,
          }}
        >
          <div className="navbar">
            <div className="navbar-logo">
              <a href="#">&lt; abris gilvesy &gt;</a>
            </div>
            <div className="navbar-text">
              <ul>
                <li>
                  <div className="navbar-hover">
                    <a href="#contact">
                      <span class="slash">/</span>contact
                    </a>
                  </div>
                </li>
                <li>
                  <a href="#education">/education</a>
                </li>
                <li>
                  <a href="#experience">/experience</a>
                </li>
              </ul>
              <LightMode />
            </div>
          </div>
        </div>
        <EmailBanner slide={this.state.slide} height={this.state.height} />
        <SocialsBanner />
      </div>
    );
  }
}

export default Navbar;
