import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signin = ({ switchTo }) => {
  const nav = useNavigate();
  const [type, setType] = useState("password");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("All fields are required");
      return;
    } else if (formData.email && formData.password) {
      toast.success("welcome back");
      nav("Homepage");
    }
  };

  return (
    <Login onSubmit={handleSubmit}>
      <article>
        <div className="fl-end">
          <div className="space-between">
            <h2>Sign In</h2>
          </div>
        </div>

        <div className="text-sign-in">
          <p>Sign In to continue</p>
        </div>

        <div className="for-input">
          <input
            type="text"
            placeholder="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="small-forgot-password">
          <small onClick={() => switchTo("reset")}>forgot password?</small>
        </div>

        <div className="for-input">
          <input
            type={type}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="eye">
            {type === "password" ? (
              <FaEyeSlash onClick={() => setType("text")} />
            ) : (
              <FaEye onClick={() => setType("password")} />
            )}
          </div>
        </div>

        <div className="button-container">
          <button>sign in</button>
        </div>

        <div className="option-sign-up">
          <span onClick={() => switchTo("signup")}>
            New user? <button type="submit">sign up</button>
          </span>
        </div>
      </article>
    </Login>
  );
};

export default Signin;

const Login = styled.form`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 1rem;
  position: fixed;
  top: 20%;
  box-shadow: 1px 1px 4px #8a8a8a;

  article {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    padding: 0.5rem;
    box-sizing: border-box;

    .fl-end {
      width: 100%;
      height: 10%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .close {
        cursor: pointer;
        font-size: 1.2rem;
      }

      .space-between {
        width: 60%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .text-sign-in {
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .for-input {
      width: 100%;
      height: 15%;
      display: flex;
      align-items: flex-end;

      .eye {
        transform: translate(-20px, 0%);
      }

      input {
        width: 100%;
        height: 50%;
        outline: none;
        border: none;
        border-bottom: 1px solid green;
        background-color: transparent;
      }
      ::placeholder {
        font-size: 0.8rem;
        color: #aaa;
      }
    }
    .small-forgot-password {
      width: 100%;
      height: 5%;
      display: flex;
      align-items: flex-start;
      color: #6b8e23;
      cursor: pointer;
    }

    .button-container {
      width: 100%;
      height: 15%;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        width: 100%;
        height: 2rem;
        background-color: #6b8e23;
        border-radius: 0.6rem;
        border-style: none;
        font-size: 1rem;
        padding: 0.2rem;
        color: #fff;
        cursor: pointer;
      }
    }
    .option-sign-up {
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: center;
      align-items: center;

      button {
        border: none;
        background-color: transparent;
        font-size: 0.9rem;
        cursor: pointer;
      }
    }
  }
`;
