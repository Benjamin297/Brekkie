import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  min-height: 363px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #373737;
  flex-direction: column;
`;

export const FooterHolder = styled.div`
  width: 93%;
  min-height: 40vh;
  align-items: center;
  display: flex;

  .Footer_logo {
    width: 30%;
    min-height: 40vh;
    display: flex;
    align-items: center;

    img {
      width: 45%;
    }
  }

  .First_Footer {
    width: 40%;
    height: 40vh;
    display: flex;
    align-items: center;
    line-height: 2rem;

    h3 {
      margin-bottom: 1rem;
      font-weight: 600;
      color: white;
    }

    .footer_list {
      width: 50%;
      height: auto;
    }

    ul {
      list-style: none;
      cursor: pointer;
    }

    li {
      color: white;
      transition: color 0.3s ease;

      &:hover {
        color: #ada7a7;
      }
    }
  }

  .Second_footer {
    width: 30%;
    height: 40vh;
    display: flex;
    align-items: center;
    line-height: 2rem;
    justify-content: space-between;

    h3 {
      margin-bottom: 1rem;
      font-weight: 600;
      color: white;
    }

    ul {
      list-style: none;
      cursor: pointer;
      margin-bottom: 2rem;
    }

    li {
      color: white;
      transition: color 0.3s ease;

      &:hover {
        color: #ada7a7;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    min-height: auto;
    gap: 1.5rem;
    align-items: flex-start;

    .Footer_logo {
      width: 100%;
      min-height: auto;

      img {
        width: 35%;
      }
    }

    .First_Footer,
    .Second_footer {
      width: 100%;
      height: auto;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
    }

    .footer_list {
      width: 48%;
    }
  }
`;

export const FooterIcon = styled.div`
  width: 93%;
  height: auto;
  align-items: center;
  justify-content: space-between;
  display: flex;
  margin-top: 1.5rem;

  small {
    color: white;
    font-size: 1rem;
    letter-spacing: 0.1rem;
  }

  .icons {
    color: white;
    display: flex;
    font-size: 1.8rem;
    gap: 1rem;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
    width: 93%;
    height: auto;

    small {
      margin-right: 40rem;
      width: 50%;
    }

    .icons {
      margin-right: 36rem;
      width: 50%;
    }
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 0.8rem;
    width: 93%;
    height: auto;

    small {
      margin-left: 30rem;
    }

    .icons {
      margin-left: 26rem;
    }
  }
`;
