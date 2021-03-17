import style from "../styles/tooltip.css";
import { Component } from "react";

export class Tooltip extends Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }
  handleMouseMove = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  render() {
    const { x, y } = this.state;
    return (
      <a className="tooltip" onMouseMove={this.handleMouseMove}>
        &nbsp;
        {this.props.children}&nbsp;
        <span
          style={{
            top: y + 20 + "px",
            left: x + 20 + "px",
          }}
        >
          {this.props.content}
        </span>
      </a>
    );
  }
}

export default Tooltip;
