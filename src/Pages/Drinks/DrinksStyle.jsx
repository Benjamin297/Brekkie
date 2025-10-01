import styled from "styled-components";

export const DrinksContainer = styled.div`
  width: 100%;
  display: flex;
  height: auto;
  margin-bottom: 3rem;
  align-items: center;
  flex-direction: column;
  background-color: #f4f4f4;
`;

export const Image = styled.div`
  width: 93%;
  height: 39vh;
  border-radius: 0.4rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.4rem;
  }

  @media screen and (max-width: 768px) {
    height: 25vh;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    height: 30vh;
    width: 88%;
  }
`;

export const Menu = styled.div`
  width: 93%;
  height: 18vh;
  align-items: center;
  display: flex;

  ul {
    list-style: none;
    display: flex;
    gap: 2.7rem;

    li {
      font-size: 1.2rem;
      border-bottom: 0.2rem solid transparent;
    }
  }

  li:hover {
    cursor: pointer;
    border-bottom: 0.2rem solid #6b8e23;
  }

  @media screen and (max-width: 768px) {
    height: 8vh;

    li {
      display: none;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    height: 6vh;

    ul {
      display: none;
    }
  }
  ul li.active {
    border-bottom: 0.2rem solid #6b8e23;
  }
`;

export const DrinksList = styled.div`
  width: 93%;
  justify-content: space-between;
  min-height: max-content;
  max-height: max-content;
  background-color: #f4f4f4;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 1.1rem;

  .Card_holder {
    width: 23.9%;
    height: 453px;
    min-height: max-content;
    border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
    gap: 0.8rem;
    flex-direction: column;
    display: flex;
    align-items: center;
    background-color: white;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding-bottom: 10px;
  }

  .Product_holder {
    width: 100%;
    height: 46.3vh;
    color: white;
    position: relative;
    border-radius: 0.5rem 0.5rem 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 0.5rem 0.5rem 0 0;
    }
  }

  .icon {
    position: absolute;
    top: 0.8rem;
    right: 0.6rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000000;
    opacity: 0.5;
    width: 2.75rem;
    height: 2.75rem;
    top: 1.062rem;
    padding: 0.0625rem;
    border-radius: 22.5rem;
    gap: 0.625rem;
  }

  .text {
    width: 95%;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 120%;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    line-height: 120%;
    font-size: 18px;
    font-weight: 400;
  }

  .description {
    display: flex;
    width: 95%;
    color: #777777;
    font-size: 14px;
    line-height: 120%;
    height: 30px;
    align-items: center;
  }

  button {
    padding: 0.7rem;
    width: 95%;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 0.3rem;
    outline: none;
    border: none;
    color: white;
    background-color: #6b8e23;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }

  button:hover {
    background-color: #8b9e65;
  }

  @media screen and (max-width: 768px) {
    .Card_holder {
      width: 100%;
      height: auto;
      background-color: #f4f4f4;
      box-shadow: none;
    }

    .Product_holder {
      height: 30vh;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    gap: 1.5rem;

    .Card_holder {
      width: 45%;
      height: auto;
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
    }

    .Product_holder {
      height: 32vh;
    }

    .title {
      font-size: 16px;
    }

    .description {
      font-size: 13px;
    }
  }
`;
