import React from "react";
import { ModalWrapper } from "./ModalStyles";
import Backdrop from "./Backdrop/Backdrop";

const Modal = (props) => {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <ModalWrapper
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-200vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </ModalWrapper>
    </React.Fragment>
  );
};

export default Modal;
