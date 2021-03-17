import style from "../styles/education.css";
import { ChevronsRight } from "react-feather";

import { Bullet } from "./bullet";
import { Component } from "react";
import { Tooltip } from "./tooltip";

export class Education extends Component {
  render() {
    return (
      <div class="education" id="education">
        <div class="education-header" id="education-header">
          Education
        </div>
        <ul class="education-list">
          <li>
            <div class="education-li-header">
              Bachelor's of Science -{" "}
              <a href="https://www.mcgill.ca/">McGill University</a>
            </div>
            <div class="education-li-subheader">[2019 - Ongoing]</div>
            <Bullet>Major: Software Engineering</Bullet>
            <Bullet>Minor: Software Engineering</Bullet>
            <Bullet>
              Flex: 4.0/4.0 GPA, Dean's Honour List, Faculty of Science
              Scholarship
            </Bullet>
          </li>
          <li>
            <div class="education-li-header">
              Bachelor's of Biomedicine -{" "}
              <a href="https://ki.se/en">Karolinska Institutet</a>
            </div>
            <div class="education-li-subheader">[2018 - 2019]</div>
            <Bullet>Worked at an immunology and neuroscience lab</Bullet>
            <Bullet>
              Full{" "}
              <Tooltip content="VG is the highest attainable grade at Karolinska">
                VG<sup>?</sup>
              </Tooltip>{" "}
              transcript
            </Bullet>
          </li>
        </ul>
      </div>
    );
  }
}
