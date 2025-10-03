import React, { useState } from "react";
import styled from "styled-components";
import source from "../../assets/source.jpg";
import Popup from "../../Auth/Popup";

const Hero = () => {
  // const [openId, setOpenId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [authType, setAuthType] = useState(null);

  // const handleOpen = (id) => {
  //   setOpenId(openId === id ? null : id);
  // };

  const openModal = (type) => {
    setAuthType(type);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setAuthType(null);
  };
  return (
    <Container>
      <Wrapper>
        <TextHolder>
          <h2>Welcome To Brekkie </h2>
          <h1>Satisfy Your Cravings With Just A Few Taps....</h1>
          <ButContainer>
            <button onClick={() => openModal("signup")} className="butt1">
              Sign Up
            </button>
            <button onClick={() => openModal("signin")} className="butt2">
              Sign In
            </button>
          </ButContainer>
        </TextHolder>
        <ImgHolder>
          {" "}
          <img src={source} alt="" />
        </ImgHolder>
        {isOpen && (
          <Popup type={authType} switchTo={setAuthType} onClose={closeModal} />
        )}
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextHolder = styled.div`
  h2 {
    color: #6b8e23;
    font-size: 36px;
  }

  h1 {
    width: 60%;
    line-height: 150%;
    font-size: 48px;
  }
`;

const ButContainer = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 20px;
  .butt1 {
    width: 200px;
    height: 45px;
    border: none;
    border-radius: 0.3rem;
    font-size: 20px;
    cursor: pointer;
    background-color: #6b8e23;
    color: white;
    transition: all 350ms;
  }
  .butt2 {
    width: 200px;
    height: 45px;
    border: none;
    border-radius: 0.3rem;
    font-size: 20px;
    cursor: pointer;
    background-color: white;
    color: black;
    transition: all 350ms;
    border: 1px solid black;
  }
`;

const ImgHolder = styled.div`
  width: 800px;
  height: 522px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;
