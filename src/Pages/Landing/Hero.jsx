import React from "react";
import styled from "styled-components";
import source from "../../assets/source.jpg";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <TextHolder>
          <h2>Welcome To Brekkie </h2>
          <h1>Satisfy Your Cravings With Just A Few Taps....</h1>
          <ButContainer>
            <button className="butt1">Sign Up</button>
            <button className="butt2">Sign In</button>
          </ButContainer>
        </TextHolder>
        <ImgHolder>
          {" "}
          <img src={source} alt="" />
        </ImgHolder>
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
  width: 90%;
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
    width: 50%;
    line-height: 150%;
    font-size: 48px;
  }
`;

const ButContainer = styled.div`
  display: flex;
  gap: 20px;
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
  width: 641px;
  height: 522px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;
