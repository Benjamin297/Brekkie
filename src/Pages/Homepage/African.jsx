import React from "react";
import styled from "styled-components";
import { African as africanArr } from "./categoryArr";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineDeliveryDining } from "react-icons/md";
const African = () => {
  return (
    <Container>
      <Wrapper>
        <h3>African Style</h3>
        <CardWrapper>
          {africanArr.map((item, index) => (
            <Card key={index}>
              <ImageContainer>
                <Blurcard>
                  <Iconholder>
                    <BsCart3 color="#fff" size={18} />
                  </Iconholder>
                </Blurcard>
                <img src={item.image} alt="" />
              </ImageContainer>
              <TextContainer>
                <h3 style={{ fontSize: "14px", fontWeight: "400" }}>
                  <MdOutlineDeliveryDining
                    size={16}
                    style={{ marginRight: "15px" }}
                  />
                  {item.delivery}
                </h3>
                <TitleAmountHolder>
                  <h2>{item.name}</h2>
                  <h4>₦{item.price}</h4>
                </TitleAmountHolder>

                <p>{item.title}</p>

                <Button>Order Now</Button>
              </TextContainer>
            </Card>
          ))}
        </CardWrapper>
      </Wrapper>
    </Container>
  );
};

export default African;

const Iconholder = styled.div`
  width: 30px;
  height: 30px;
  background-color: #00000055;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  position: absolute;
  right: 15px;
  top: 15px;
`;
const Blurcard = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00000049;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 10px;
  background-color: #6b8e23;
  margin-top: 18px;
  color: #fff;
  border: none;
  outline: none;

  &:hover {
    background-color: #6a8e23e1;
  }
`;
const TitleAmountHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  h4 {
    font-size: 16px;
    font-family: 400;
  }
  h2 {
    font-size: 18px;
    font-weight: 500;
  }
`;
const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: #fff;
  p {
    font-size: 14px;
    font-weight: 400;
    width: 180px;
    margin-top: 30px;
  }
  h3 {
    font-size: 12px;
  }
`;
const ImageContainer = styled.div`
  width: 100%;
  height: 250px;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Card = styled.div`
  width: 24%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const CardWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`;
const Wrapper = styled.div`
  width: 90%;
  padding-top: 30px;

  h3 {
    font-size: 25px;
    font-weight: 500;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
