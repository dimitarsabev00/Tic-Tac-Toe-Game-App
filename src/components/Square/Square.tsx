import React from "react";
import "./styles.scss";
import circle_icon from "../../assets/circle.png";
import cross_icon from "../../assets/cross.png";

interface SquareProps {
  x: number;
  o: number;
  disableClick: boolean;
  winner: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({
  x,
  o,
  winner,
  onClick,
  disableClick,
}) => {
  return (
    <div
      className="square-container"
      onClick={!disableClick ? onClick : undefined}
      style={{ pointerEvents: winner ? "none" : "auto" }}
    >
      {x ? (
        <img src={cross_icon} alt="cross" />
      ) : o ? (
        <img src={circle_icon} alt="circle" />
      ) : (
        ""
      )}
    </div>
  );
};

export default Square;
