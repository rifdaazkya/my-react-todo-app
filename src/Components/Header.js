import React from "react";
import InputBox from "../Components/InputBox";

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
      <InputBox addNewItem={props.addNewItem} />
    </>
  );
};

export default Header;