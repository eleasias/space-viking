import React from "react";

const Button = (props) => {
  const { children, ...properties } = props;
  return <button {...properties}>{children}</button>;
};

export default Button;
