import React, { PropsWithChildren } from "react";
import "./styles.scss";

const Board: React.FC<PropsWithChildren<{}>> = (props) => {
  return <div className="board-container" {...props}></div>;
};

export default Board;
