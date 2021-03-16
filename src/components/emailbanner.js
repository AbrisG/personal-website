import styles from "../styles/emailbanner.css";
import { Component } from "react";

export class EmailBanner extends Component {
  render() {
    return (
      <div
        className="banner"
        id="banner"
        style={{
          transform: `translateY(${this.props.slide}px)`,
          top: `${this.props.height}px`,
        }}
      >
        <div className="sidebar-email">
          <a href="mailto:abris.gilvesy@gmail.com">
            abris.gilvesy@gmail.com {this.props.slide}
          </a>
        </div>
      </div>
    );
  }
}

export default EmailBanner;
