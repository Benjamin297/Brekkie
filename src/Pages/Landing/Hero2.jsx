import React from "react";
import styled from "styled-components";
import mages from "../../assets/Image.png";

const Hero2 = () => {
  return (
    <Hero2Container>
      <HeroWrapper>
        <ImageHolder>
          <img src={mages} alt="" />
        </ImageHolder>
        <WriteUpHolder>
          <About>
            <h2>About Us</h2>
            <p>
              Brekkie is a fast, reliable, and user-friendly platform designed
              to simplify everyday services for customers, and businesses.
              Originally built for busy professionals, remote workers and
              hybrids, Brekkie has expanded and offering food delivery to a
              broader audience, Brekkie provides a seamless, cashless, and
              convenient experience.
            </p>
          </About>
          <Vission>
            <h4>Our Vision</h4>
            <p>
              At Brekkie, we envision a world where starting your day with a
              wholesome breakfast is effortless. We strive to help busy
              professionals enjoy fresh, delicious meals without the stress of
              time. By combining convenience, quality, and thoughtful service,
              we aim to make mornings smoother, fuel productivity, and promote
              healthier lifestyles, one breakfast at a time.
            </p>
          </Vission>
        </WriteUpHolder>
      </HeroWrapper>
    </Hero2Container>
  );
};

export default Hero2;

const Hero2Container = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeroWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  gap: 5rem;
`;
const ImageHolder = styled.div`
  width: 490px;
  height: 401px;
  border-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const WriteUpHolder = styled.div`
  width: 40%;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const About = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 48px;
    font-weight: 600;
    color: #100f0f;
  }
  p {
    font-weight: 400;
    color: #100f0f;
  }
`;
const Vission = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    font-size: 30px;
    font-weight: 400;
    color: #100f0f;
  }
  p {
    font-weight: 400;
    color: #100f0f;
  }
`;
