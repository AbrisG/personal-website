import { useState } from "react";

const useMove = () => {
  const [state, setState] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    e.persist();
    setState((state) => ({ ...state, x: e.clientX, y: e.clientY }));
  };
  return {
    x: state.x,
    y: state.y,
    handleMouseMove,
  };
};

const Tooltip = (props) => {
  const { x, y, handleMouseMove } = useMove();
  const updateStyle;
  return (
    <span clasName="content" onMouseMove={handleMouseMove}>
      {props.children}
      <span
        className="tooltip"
        style={{ top: y + 20 + "px", left: x + 20 + "px" }}
      >
        {props.tooltipContent}
      </span>
    </span>
  );
};

export { Tooltip };
