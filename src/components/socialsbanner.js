import { Component } from "react";
import { GitHub, Gitlab, Layout, Linkedin, Instagram } from "react-feather";
import style from "../styles/socialsbanner.css";

export class SocialsBanner extends Component {
  render() {
    return (
      <div class="socials-banner">
        <ul>
          <li>
            <a href="https://github.com/AbrisG/" label="github">
              <GitHub />
            </a>
          </li>
          <li>
            <a href="https://gitlab.cs.mcgill.ca/agilve1" label="gitlab" />
            <Gitlab />
          </li>
          <li>
            <a href="/" label="reload">
              <Layout />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/abris-gilvesy/"
              label="linkedin"
            >
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/notabris/" label="instagram">
              <Instagram />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialsBanner;
