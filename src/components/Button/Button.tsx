import React from "react";
import "./styles.scss";

interface ButtonProps {
  title: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
const Button: React.FC<ButtonProps> = ({ title, onClick }) => {
  return (
    <button className="container-button" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
