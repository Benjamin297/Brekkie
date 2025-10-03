// import React, { useState } from "react";
import { PastriesContainer, Image, Menu, PastriesList } from "./PastriesStyle";
import Pastries1 from "../../assets/African.jpg";
import { BiCartAdd } from "react-icons/bi";
import { GiScooter } from "react-icons/gi";
import { PastriesCard } from "./PastriesCard";
import { Link } from "react-router-dom";

const Pastries = () => {
  return (
    <PastriesContainer>
      <Image>
        <img src={Pastries1} alt="" />
      </Image>
      <Menu>
        <ul>
          <Link
            to="/homepage/english"
            style={{ color: "black", textDecoration: "none" }}
          >
            <li>English Breakfast</li>
          </Link>

          <Link
            to="/homepage/fruitsAndVeggies"
            style={{ color: "black", textDecoration: "none" }}
          >
            <li>Fruits & Veggies Breakfast</li>
          </Link>

          <Link
            to="/homepage/african"
            style={{ color: "black", textDecoration: "none" }}
          >
            <li>African Breakfast</li>
          </Link>

          <Link
            to="/homepage/drinks"
            style={{ color: "black", textDecoration: "none" }}
          >
            <li>Drinks</li>
          </Link>

          <Link
            to="/homepage/curated"
            style={{ color: "black", textDecoration: "none" }}
          >
            <li>Curated Combo</li>
          </Link>

          <Link
            to="/homepage/pastries"
            style={{ color: "black", textDecoration: "none" }}
          >
            <li>Pastries</li>
          </Link>
        </ul>
      </Menu>

      <PastriesList>
        {PastriesCard.map((item) => (
          <div className="Card_holder" key={item.id}>
            <div className="Product_holder">
              <div className="icon">
                <BiCartAdd />
              </div>
              <img src={item.image} alt={item.name} />
            </div>

            <div className="text">
              <GiScooter style={{ fontSize: "1.3rem" }} />
              <small>{item.deliveryTime}</small>
            </div>
            <div className="title">
              <h3>{item.name}</h3> <h4>{item.price}</h4>
            </div>
            <div className="description">
              <p>{item.description}</p>
            </div>
            <button>Order Now</button>
          </div>
        ))}
      </PastriesList>
    </PastriesContainer>
  );
};

export default Pastries;
