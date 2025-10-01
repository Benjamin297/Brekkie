import React from "react";
import styled from "styled-components";
import hero from "../../assets/hero.jpg";

const Hero = () => {
  return (
    <div>
      <Container>
        <img src={hero} alt="" />
        <Wrapper>
          <h1>Breakfast, Delivered Fresh & On Time.</h1>
          <p>
            Brekkie ensures you never skip the most important meals! fast, fresh
            and reliable delivery for busy mornings.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}></div>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Hero;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  background-color: #0000008f;
  top: 0;
  left: 0;
  color: white;
  gap: 2rem;
  padding: 6rem;
  h1 {
    font-size: 48px;
    font-weight: 600;
    color: #ffffff;
    width: 40%;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    width: 33%;
    line-height: 30px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
