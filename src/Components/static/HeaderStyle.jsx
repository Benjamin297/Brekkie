import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 90%;
  display: flex;
  height: 12vh;
  align-items: center;
`;

export const LeftHolder = styled.div`
  display: flex;
  width: 60%;
  height: 9vh;
  align-items: center;
  gap: 1.5rem;

  img {
    width: 60%;
  }

  .Left_input_holder {
    background-color: #f2f2f2;
    width: 41%;
    height: 6vh;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 0.3rem;

    input {
      width: 90%;
      padding: 0.8rem;
      border: none;
      outline: none;
      border-radius: 0.3rem;
      background-color: transparent;
    }
  }
`;

export const RighttHolder = styled.div`
  display: flex;
  width: 40%;
  height: 9vh;
  align-items: center;
  gap: 2rem;

  .right_input_holder {
    background-color: #f2f2f2;
    width: 68%;
    height: 6vh;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 0.3rem;

    input {
      width: 90%;
      padding: 0.8rem;
      border: none;
      outline: none;
      border-radius: 0.3rem;
      background-color: transparent;
    }
  }

  .Icon-holder {
    width: 25%;
    height: 9vh;
    display: flex;
    gap: 0.9rem;
    align-items: center;
    justify-content: center;
    justify-content: flex-end;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.1rem;
    width: 35%;
    height: 7vh;
    border-radius: 5rem;
    background-color: #6b8e23;
    cursor: pointer;
  }
`;
