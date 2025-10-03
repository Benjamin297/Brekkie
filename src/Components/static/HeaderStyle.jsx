import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: auto;
    padding: 0.5rem 0;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 93%;
  height: 10vh;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
    height: auto;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    gap: 1rem;
    height: auto;
  }
`;

export const LeftHolder = styled.div`
  display: flex;
  width: 50%;
  height: 9vh;
  align-items: center;
  gap: 1rem;

  img {
    width: 100%;
  }

  .Left_input_holder {
    background-color: #f2f2f232;
    width: 25%;
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
      background-color: transparent;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;

    img {
      width: 80%;
    }

    .Left_input_holder {
      width: 55%;
      height: 5vh;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 55%;

    img {
      width: 50%;
    }

    .Left_input_holder {
      width: 40%;
      height: 5vh;
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
    width: 69%;
    height: 6.5vh;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 0.6rem;

    input {
      width: 90%;
      padding: 0.8rem;
      border: none;
      outline: none;
      border-radius: 0.4rem;
      background-color: transparent;
    }
  }

  .Icon-holder {
    width: 25%;
    height: 9vh;
    display: flex;
    gap: 0.9rem;
    align-items: center;
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

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    gap: 1rem;

    .right_input_holder {
      width: 65%;
      height: 5vh;
    }

    .Icon-holder {
      width: auto;
      gap: 0.6rem;
    }

    .icon {
      width: 30px;
      height: 30px;
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 45%;

    .right_input_holder {
      width: 60%;
      height: 4vh;
    }

    .Icon-holder {
      gap: 0.8rem;
    }

    .icon {
      width: 40px;
      height: 40px;
      font-size: 1.1rem;
    }
  }
`;
