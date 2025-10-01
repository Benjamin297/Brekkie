import React from "react";
import styled from "styled-components";
import category from "../../assets/category.png";
import Milk from "../../assets/Milk.jpg";
import Smoothies from "../../assets/Smoothies.jpg";
import yogurt from "../../assets/yogurt.jpg";
import zobodrink from "../../assets/zobo drink.jpg";
import yamandegg from "../../assets/Yam and egg Sauce.jpg";

const Category = () => {
  const data = [
    { image: category, title: "English breakfast" },
    { image: Milk, title: "Fruits & Veggies breakfast" },
    { image: Smoothies, title: "African breakfast" },
    { image: yogurt, title: "Drinks" },
    { image: zobodrink, title: "Curated Combo" },
    { image: yamandegg, title: "Pastries" },
  ];
  return (
    <Container>
      <Wrapper>
        <Categorytittle>Explore Category</Categorytittle>
        <Cardholder>
          {data.map((item, index) => (
            <Holder key={index}>
              <Card>
                <img src={item.image} alt="" />
              </Card>
              <h4>{item.title}</h4>
            </Holder>
          ))}
        </Cardholder>
      </Wrapper>
    </Container>
  );
};

export default Category;
const Container = styled.div`
  width: 100%;
  height: 40vh;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 80%;
  /* background-color: green; */
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* align-items: center; */
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
  /* background-color: blue; */
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Card = styled.div`
  height: 140px;
  width: 180px;
  background-color: blue;
  border-radius: 20px;
  cursor: pointer;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
`;

const Categorytittle = styled.h3`
  font-size: 38px;
  font-weight: 500;
`;
