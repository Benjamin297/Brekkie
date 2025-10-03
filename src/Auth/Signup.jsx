import React, { useState } from "react";
import styled from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { setCredentials } from "../features/authSlice";
import { useSignupMutation } from "../features/authApiSlice";
import { useNavigate } from "react-router-dom";

const Signup = ({ switchTo }) => {
  const nav = useNavigate();
  const [type, setType] = useState("password");
  const [signup, { isLoading }] = useSignupMutation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };
  const dispatch = useDispatch();

  const validateForm = (e) => {
    e.prevenDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.error("All fields are required");
      return false;
    }

    if (formData.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    } else {
      toast.success("successful");
      return true;
    }
    nav("Homepage");
    // switchTo("verify");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const user = await signup(formData).unwrap();
        dispatch(setCredentials(user));
        alert("Signup Successful");
      } catch (error) {
        toast.error("Signup Failed");
        console.log(error);
      }
    }
  };

  return (
    <SignUp onSubmit={validateForm}>
      <article>
        <div className="fl-end">
          <div className="space-between">
            <h2>Sign Up</h2>
          </div>
        </div>

        <div className="text-sign-in">
          <p>Sign Up to continue</p>
        </div>

        <div className="for-name">
          <input
            type="text"
            placeholder="first Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="for-input">
          <input
            placeholder="Email address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="small-forgot-password"></div>

        <div className="for-input">
          <input type="tel" placeholder="phone number" />
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
              <FaEye onClick={() => setType("text")} />
            ) : (
              <FaEyeSlash onClick={() => setType("password")} />
            )}
          </div>
        </div>

        <div className="for-input">
          <input
            type="password"
            placeholder="confirm password"
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>

        <div className="button-container">
          <button>{isLoading ? "loading" : "Sign up"}</button>
        </div>

        <div className="option-sign-up">
          <span onClick={() => switchTo("signin")}>
            Already have an account?{""}
            <button onClick={() => switchTo("verify")} type="submit">
              sign in
            </button>
          </span>
        </div>
      </article>
    </SignUp>
  );
};

export default Signup;

const SignUp = styled.form`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 1rem;
  position: fixed;
  /* z-index: 1000; */
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
      /* background-color: red; */
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
        /* background-color: yellow; */
        width: 60%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    .text-sign-in {
      /* background-color: purple; */
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .for-name {
      width: 100%;
      height: 15%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      input {
        outline: none;
        border: none;
        border-bottom: 1px solid green;
        background-color: transparent;
      }
      input:active {
        background: none;
      }
      ::placeholder {
        font-size: 0.8rem;
        color: #aaa;
        text-transform: capitalize;
      }
    }

    .for-input {
      /* background-color: pink; */
      width: 100%;
      height: 15%;
      display: flex;
      justify-content: space-between;
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
        text-transform: capitalize;
      }
    }
    .small-forgot-password {
      /* background-color: orange; */
      width: 100%;
      height: 5%;
      display: flex;
      align-items: flex-start;
      color: #6b8e23;
      cursor: pointer;
    }

    .button-container {
      /* background-color: rebeccapurple; */
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
      /* background-color: orange; */
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
