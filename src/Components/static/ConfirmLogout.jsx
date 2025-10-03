import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ConfirmLogout = () => {
  const nav = useNavigate();
  return (
    <ConfirmContainer>
      <ConfirmHolder>
        <div className="details">
          <h4>Confirm Logout</h4>
          <p>
            Are you sure you want to log out? You will need to log in again to
            continue
          </p>
        </div>
        <div className="button_holder">
          <button style={{ backgroundColor: "#777777" }}>Cancel</button>
          <button
            style={{ backgroundColor: "#E74C3C" }}
            onClick={() => nav("/")}
          >
            Log Out
          </button>
        </div>
      </ConfirmHolder>
    </ConfirmContainer>
  );
};

export default ConfirmLogout;

const ConfirmContainer = styled.div`
  width: 380px;
  height: 248px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
  z-index: 1000;
  top: 80px;
  right: 10px;
  color: black;
`;
const ConfirmHolder = styled.div`
  width: 336px;
  height: 200px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;

  h4 {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 22px;
  }
  p {
    font-size: 18px;
    text-align: center;
    line-height: 150%;
    font-weight: 400;
    letter-spacing: 4%;
  }
  .details {
    width: 336px;
    height: 92px;
  }
  .button_holder {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

    button {
      width: 158px;
      height: 50px;
      color: white;
      line-height: 150%;
      font-size: 1rem;
      font-weight: 400;
      border: none;
      cursor: pointer;
      /* margin-bottom: 3rem; */

      outline: none;
      border-radius: 8px;
    }
  }
`;
