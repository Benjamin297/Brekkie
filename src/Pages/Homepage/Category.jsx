import React from "react";
import styled from "styled-components";
import category from "../../assets/category.png";
import Fruit2 from "../../assets/Fruits2.png";
import African3 from "../../assets/African3.png";
import Drinks from "../../assets/Drinks4.png";
import combo from "../../assets/combo5.png";
import pastries from "../../assets/pastries6.png";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <Container>
      <Wrapper>
        <Categorytittle>Explore Category</Categorytittle>
        <Cardholder>
          <Link to="english" style={{ textDecoration: "none", color: "black" }}>
            <Holder>
              <Card>
                <img src={category} alt="" />
              </Card>
              <h4>English breakfast</h4>
            </Holder>
          </Link>

          <Link to="African" style={{ textDecoration: "none", color: "black" }}>
            <Holder>
              <Card>
                <img src={Fruit2} alt="" />
              </Card>
              <h4>Fruits & Veggies breakfast</h4>
            </Holder>
          </Link>

          <Link to="Curated" style={{ textDecoration: "none", color: "black" }}>
            <Holder>
              <Card>
                <img src={African3} alt="" />
              </Card>
              <h4>African breakfast</h4>
            </Holder>
          </Link>

          <Link to="Drinks" style={{ textDecoration: "none", color: "black" }}>
            <Holder>
              <Card>
                <img src={Drinks} alt="" />
              </Card>
              <h4>Drinks</h4>
            </Holder>
          </Link>

          <Link
            to="FruitsAndVeggies"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Holder>
              <Card>
                <img src={combo} alt="" />
              </Card>
              <h4>Curated Combo</h4>
            </Holder>
          </Link>

          <Link
            to="Pastries"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Holder>
              <Card>
                <img src={pastries} alt="" />
              </Card>
              <h4>Pastries</h4>
            </Holder>
          </Link>
        </Cardholder>
      </Wrapper>
    </Container>
  );
};

export default Category;
const Container = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Cardholder = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Holder = styled.div`
  height: 194px;
  width: 194px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Card = styled.div`
  height: 140px;
  width: 180px;
  border-radius: 10px;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Categorytittle = styled.h3`
  font-size: 38px;
  font-weight: 500;
`;
