import { Component } from "react";
import style from "../styles/socialsbanner.css";

export class SocialsBanner extends Component {
  render() {
    return (
      <div class="socials-banner">
        <ul>
          <li>
            <a href="https://github.com/AbrisG/" label="github">
              <i data-feather="github"></i>
            </a>
          </li>
          <li>
            <a href="https://gitlab.cs.mcgill.ca/agilve1" label="gitlab" />
            <i data-feather="gitlab"></i>
          </li>
          <li>
            <a href="/" label="reload">
              <i data-feather="layout"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/abris-gilvesy/"
              label="linkedin"
            >
              <i data-feather="linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/notabris/">
              <i data-feather="instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialsBanner;
