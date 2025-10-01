import React, { useState } from "react";
import {
  EnglishContainer,
  Image,
  Menu,
  EnglishList,
} from "./EnglishBreakFastStyle";
import English from "../../assets/English.jpg";
import { BiCartAdd } from "react-icons/bi";
import { GiScooter } from "react-icons/gi";
import { DisplayEnglishCard } from "./EnglishCard";

const EnglishBreakFast = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const EnglishItems = [
    "English Breakfast",
    "Fruits & Veggies Breakfast",
    "African Breakfast",
    "Drink",
    "Curated Combo",
    "Pastries",
  ];

  return (
    <EnglishContainer>
      <Image>
        <img src={English} alt="" />
      </Image>
      <Menu>
        <ul>
          {EnglishItems.map((item, index) => (
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

      <EnglishList>
        {DisplayEnglishCard.map((item) => (
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
      </EnglishList>
    </EnglishContainer>
  );
};

export default EnglishBreakFast;
