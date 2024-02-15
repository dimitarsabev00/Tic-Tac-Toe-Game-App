import React from "react";
import "./styles.scss";
import circle_icon from "./assets/circle.png";
import cross_icon from "./assets/cross.png";

const Board: React.FC = () => {
  return (
    <div className="container-board">
      <div className="row1">
        <div className="boxes"></div>
        <div className="boxes"></div>
        <div className="boxes"></div>
      </div>
      <div className="row2">
        <div className="boxes"></div>
        <div className="boxes"></div>
        <div className="boxes"></div>
      </div>
      <div className="row3">
        <div className="boxes"></div>
        <div className="boxes"></div>
        <div className="boxes"></div>
      </div>
    </div>
  );
};

export default Board;
