// import React , {useState}from "react";
import LPLogo from "../../assets/LPLogo.svg";
import styled from "styled-components";
import Hero from "../Landing/Hero";
import Hero2 from "./Hero2";
import Faq from "./Faq";
import { Footer } from "../../Components";

const Landing = () => {
  const titles = ["Home", "About", "Contacts Us"];

  return (
    <>
      <HeaderContainer>
        <HeaderHolder>
          <div className="Logo">
            <img src={LPLogo} alt="Landing Page Logo" />
          </div>
          <div className="Menu">
            {titles.map((itm, index) => (
              <h4 key={index}>{itm}</h4>
            ))}
            <div className="Question">
              <button>FAQS</button>
            </div>
          </div>
        </HeaderHolder>
      </HeaderContainer>

      <Hero />
      <Hero2 />
      <Faq />
      <Footer />
    </>
  );
};

export default Landing;

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
    width: 80%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 15%;
      cursor: pointer;
    }
  }

  .Menu {
    width: 50%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    ul {
      list-style: none;
      display: flex;
      gap: 2rem;
    }

    h4 {
      font-weight: 400;
      letter-spacing: 4%;
      line-height: 150%;
      font-size: 1rem;
      cursor: pointer;
    }
    & h4:hover {
      color: #6b8e23;
    }
  }

  .Question {
    width: 30%;
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
