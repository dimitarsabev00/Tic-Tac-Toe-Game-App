import React, { useState } from "react";
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
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!disableClick) {
      setTouchStartX(event.touches[0].clientX);
      setTouchStartY(event.touches[0].clientY);
    }
  };

  const handleTouchEnd = () => {
    if (!disableClick && touchStartX !== null && touchStartY !== null) {
      const touchEndX = touchStartX;
      const touchEndY = touchStartY;
      const deltaX = Math.abs(touchEndX - touchStartX);
      const deltaY = Math.abs(touchEndY - touchStartY);

      if (deltaX < 10 && deltaY < 10) {
        onClick(); // Trigger onClick event if touch movement is within a small threshold
      }
    }

    setTouchStartX(null);
    setTouchStartY(null);
  };
  return (
    <div
      className={`square-container ${winner ? "win" : ""}`}
      onClick={!disableClick ? onClick : undefined}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {x ? (
        <img
          src={cross_icon}
          alt="cross"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      ) : o ? (
        <img
          src={circle_icon}
          alt="circle"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Square;
