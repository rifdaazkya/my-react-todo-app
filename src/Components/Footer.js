import React from "react";

const Footer = (props) => {
  return (
    <div className="todo-footer">
      <span className="count-todos">
        {props.items.length > 1 ? "items left " : "item left "}
        {props.items.length}
      </span>
    </div>
  );
};

export default Footer;