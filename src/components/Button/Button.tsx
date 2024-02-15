import React from "react";
import "./styles.scss";

interface ButtonProps {
  title: string;
}
const Button: React.FC<ButtonProps> = ({ title }) => {
  return <button className="container-button">{title}</button>;
};

export default Button;
