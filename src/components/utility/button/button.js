import React from "react";
import "./button.scss";

const Button = ({ colorstyles, children }) => {
  return <button className={colorstyles}>{children}</button>;
};

export default Button;
