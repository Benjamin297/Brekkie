// import React, { useState } from "react";
import styled from "styled-components";
import Signin from "./Signin";
import Signup from "./Signup";
import Verify from "./Verify";
// import Success from "./Success"
// import Reset from "./Reset";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Popup = ({ type, switchTo, onClose }) => {
  return (
    <Wrapper>
      <Content>
        <IoMdCloseCircleOutline onClick={onClose} className="close" />
        {type === "signin" && <Signin switchTo={switchTo} />}
        {type === "signup" && <Signup switchTo={switchTo} />}
        {type === "verify" && <Verify switchTo={switchTo} />}
        {/* {type === "reset" && <Reset switchTo={switchTo} />} */}
        {/* {
            type === "success" && <Success switchTo={switchTo} />
        } */}
      </Content>
    </Wrapper>
  );
};

export default Popup;

const Wrapper = styled.div`
  width: 35vw;
  height: max-content;
  position: fixed;
  top: 5%;
  left: 10%;
  /* background-color: #fff; */
  transform: translate(50%, 50%);
  z-index: 1000;
`;
const Content = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
  top: 10%;
  left: 25%;
  /* background-color: #fff; */
  .close {
    cursor: pointer;
    position: absolute;
    top: 12px;
    right: 4%;
    font-size: 1rem;
    z-index: 1000;
  }
`;
