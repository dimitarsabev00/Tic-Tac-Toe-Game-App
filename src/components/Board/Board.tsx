import React, { useState } from "react";
import "./styles.scss";
import circle_icon from "../../assets/circle.png";
import cross_icon from "../../assets/cross.png";
import { Button } from "..";

const Board: React.FC = () => {
  const [data, setData] = useState<Array<string>>(Array(9).fill(""));
  const [count, setCount] = useState<number>(0);
  const [lock, setLock] = useState<boolean>(false);

  const handleClickBox = (num: number) => {
    if (lock || data[num]) {
      return;
    }
    const newData = [...data];
    newData[num] = count % 2 === 0 ? "x" : "o";
    setData(newData);
    setCount(count + 1);
  };

  const handleReset = () =>{
    setLock(false)
    setData(Array(9).fill(""))
  }
  return (
    <>
    <div className="container-board">
      <div className="row1">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="boxes"
            onClick={() => handleClickBox(index)}
          >
            {data[index] === "x" && <img src={cross_icon} alt="cross" />}
            {data[index] === "o" && <img src={circle_icon} alt="circle" />}
          </div>
        ))}
      </div>
      <div className="row2">
        {[3, 4, 5].map((index) => (
          <div
            key={index}
            className="boxes"
            onClick={() => handleClickBox(index)}
          >
            {data[index] === "x" && <img src={cross_icon} alt="cross" />}
            {data[index] === "o" && <img src={circle_icon} alt="circle" />}
          </div>
        ))}
      </div>
      <div className="row3">
        {[6, 7, 8].map((index) => (
          <div
            key={index}
            className="boxes"
            onClick={() => handleClickBox(index)}
          >
            {data[index] === "x" && <img src={cross_icon} alt="cross" />}
            {data[index] === "o" && <img src={circle_icon} alt="circle" />}
          </div>
        ))}
      </div>
    </div>
      <Button title="Reset" onClick={handleReset}/>
    </>

  );
};

export default Board;
