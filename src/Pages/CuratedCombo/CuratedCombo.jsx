import React, { useState } from "react";
import {
  CuratedContainer,
  Image,
  Menu,
  CuratedList,
} from "./CuratedComboStyle";
import Curated1 from "../../assets/Curated.jpg";
import { BiCartAdd } from "react-icons/bi";
import { GiScooter } from "react-icons/gi";
import { CuratedCard } from "./CuratedCard";

const CuratedCombo = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const CuratedItems = [
    "English Breakfast",
    "Fruits & Veggies Breakfast",
    "African Breakfast",
    "Drink",
    "Curated Combo",
    "Pastries",
  ];

  return (
    <CuratedContainer>
      <Image>
        <img src={Curated1} alt="" />
      </Image>
      <Menu>
        <ul>
          {CuratedItems.map((item, index) => (
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

      <CuratedList>
        {CuratedCard.map((item) => (
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
      </CuratedList>
    </CuratedContainer>
  );
};

export default CuratedCombo;
