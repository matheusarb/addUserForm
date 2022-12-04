import React from "react";

// CSS Module import syntax;
import classes from "./Card.module.css";

const Card = (props) => {
  // Pass props.children inside the div of the Card component for it to display
  // what is within
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
