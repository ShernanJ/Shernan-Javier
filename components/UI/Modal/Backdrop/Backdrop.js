import React from "react";
import { BackdropWrapper } from "./BackdropWrapper";

const Backdrop = (props) => {
  if (props.show) {
    return <BackdropWrapper onClick={props.clicked}></BackdropWrapper>;
  } else {
    return null;
  }
};
export default Backdrop;
