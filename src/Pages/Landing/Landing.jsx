import React from "react";
import LPLogo from "../../assets/LPLogo.svg";
import styled from "styled-components";
import Hero from "../Landing/Hero";
import Hero2 from "./Hero2";
import Faq from "./Faq";

const Landing = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderHolder>
          <div className="Logo">
            <img src={LPLogo} alt="Landing Page Logo" />
          </div>
          <div className="Menu">
            <ul>
              <li style={{ color: "#6b8e23" }}>Home</li>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="Question">
            <button>FAQs</button>
          </div>
        </HeaderHolder>
      </HeaderContainer>

      <Hero />
      <Hero2 />
      <Faq />
    </>
  );
};

export default Landing;

// Styled Components
const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f8ff;
`;

const HeaderHolder = styled.div`
  width: 93%;
  height: 8vh;
  display: flex;

  .Logo {
    width: 71%;
    height: auto;
    display: flex;
    align-items: center;

    img {
      width: 15%;
      cursor: pointer;
    }
  }

  .Menu {
    width: 21%;
    height: auto;
    display: flex;
    align-items: center;

    ul {
      list-style: none;
      display: flex;
      gap: 2rem;
      cursor: pointer;
    }

    li {
      font-weight: 400;
      letter-spacing: 4%;
      line-height: 150%;
      font-size: 1rem;
    }
  }

  .Question {
    width: 8%;
    height: auto;
    display: flex;
    align-items: center;

    button {
      width: 98px;
      height: 40px;
      border: none;
      outline: none;
      color: white;
      border-radius: 20px;
      cursor: pointer;
      background-color: #6b8e23;
    }
  }
`;
