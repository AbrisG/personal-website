import { ChevronsRight } from "react-feather";
import style from "../styles/bullet.css";

const Bullet = (props) => {
  return (
    <div
      className="bullet"
      //   style={{
      //     fontFamily: "var(--font-paragraph);",
      //     fontSize: "font-size: var(--font-size-paragraph);",
      //     padding: "padding: 2px 0px 2px 15px;",
      //     margin: "0",
      //     display: "flex",
      //     flexDirection: "row",
      //     alignItems: "center",
      //   }}
    >
      <ChevronsRight />
      {props.children}
    </div>
  );
};

export { Bullet };
