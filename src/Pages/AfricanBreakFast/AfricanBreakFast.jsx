import React, { useState } from "react";
import {
  AfricanContainer,
  Image,
  Menu,
  AfricanList,
} from "./AfricanBreakFastStyle";
import African from "../../assets/African.jpg";
import { BiCartAdd } from "react-icons/bi";
import { GiScooter } from "react-icons/gi";
import { DisplayDrinks } from "../Drinks/Card";

const AfricanBreakFast = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const AfricanItems = [
    "English Breakfast",
    "Fruits & Veggies Breakfast",
    "African Breakfast",
    "Drink",
    "Curated Combo",
    "Pastries",
  ];

  return (
    <AfricanContainer>
      <Image>
        <img src={African} alt="" />
      </Image>
      <Menu>
        <ul>
          {AfricanItems.map((item, index) => (
            <li
              key={index}
              className={activeIndex === index ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </Menu>

      <AfricanList>
        {DisplayDrinks.map((item) => (
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
      </AfricanList>
    </AfricanContainer>
  );
};

export default AfricanBreakFast;
