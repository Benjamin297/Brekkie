import React from "react";
import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";

const Location = () => {
  return (
    <LocationContainer>
      <LocationHolder>
        <div className="Delete">
          <TiDeleteOutline />
        </div>
        <div className="Location">Available Location</div>

        <div className="List_Location">
          <ul>
            <li>Banana Island, Lagos 106104, Lagos</li>
            <li>Bayo Kuku Rd, Ikoyi, Lagos 106104, Lagos</li>
            <li>Lamb's Court Banana Island</li>
            <li>Foreshore Estate, Banana Island, Lagos</li>
            <li>Biporal Office, Banana Island, Ikoyi, Lagos 100272</li>
            <li>FC6X+GXH, Road, Banana Island,Lagos</li>
            <li>FC8W+XMX, 401 Cl, Banana Island, Lagos</li>
            <li>Uwon Road Lagos, Festac Town, Lagos</li>
            <li>FC8W+FRV, 1st Avenue, Banana Island, Lagos</li>
            <li>Grace Anjous Dr, Lekki Phase I, Lagos</li>
            <li>316 Close, Off 3rd Avenue, Banana Island, Lagos </li>
          </ul>
        </div>
      </LocationHolder>
    </LocationContainer>
  );
};

export default Location;

const LocationContainer = styled.div`
  width: 31.7%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  top: 80px;
  left: 10px;
  background-color: white;
  color: black;
`;

const LocationHolder = styled.div`
  width: 390px;
  background-color: #100f0f;
  height: 668px;
  display: flex;
  gap: 0.3rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  flex-direction: column;

  .Delete {
    width: 370px;
    height: 50px;
    display: flex;
    color: #ababab;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    cursor: pointer;
    justify-content: flex-end;
  }

  .Location {
    width: 370px;
    height: 44px;
    display: flex;
    align-items: center;
    background-color: #f8f8ff;
  }
  .List_Location {
    display: flex;
    height: auto;

    ul {
      list-style: none;
      gap: 0.2rem;
      display: flex;
      flex-direction: column;
    }

    li {
      opacity: 60%;
      padding-top: 10px;
      padding-bottom: 10px;
      line-height: 140%;
      font-weight: 400;
      font-size: 16px;
      color: #100f0f;
    }
  }
`;
