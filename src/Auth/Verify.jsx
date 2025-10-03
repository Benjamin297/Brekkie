import { useRef, useState } from "react";
import styled from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Verify = ({ switchTo }) => {
  const [code, setCode] = useState(Array(4).fill(""));
  const inputs = Array.from({ length: 4 }, () => useRef(null));
  const nav = useNavigate();

  const handleChange = (e, index) => {
    const val = e.target.value.replace(/[^0-9]/g, "");
    if (!val) return;

    const newCode = [...code];
    newCode[index] = val;
    setCode(newCode);

    if (index < inputs.length - 1) {
      inputs[index + 1].current.focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs[index - 1].current.focus();
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    const otp = code.join("");
    if (otp.length !== 4) {
      toast.error("Enter all digits");
      return;
    }
    toast.success("confirmed");
    nav("/Homepage");
  };
  console.log(code);
  // console.log(otp)

  return (
    <Code onSubmit={handleVerify}>
      <aside>
        <div className="verify">
          <div className="closeIcon">
            <h2>verify email</h2>
            {/* <IoMdCloseCircleOutline /> */}
          </div>
        </div>
        <div className="for-verify">
          {inputs.map((ref, i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              ref={ref}
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleBackspace(e, i)}
            />
          ))}
        </div>

        <div className="for-button">
          <button type="submit" className="button">
            verify
          </button>
        </div>
        <div className="code-text">
          <p>Didn't receive the code? Resend</p>
          <p>
            Already have an account?{" "}
            <span onClick={() => switchTo("signin")} style={{ color: "green" }}>
              sign in
            </span>
          </p>
        </div>
      </aside>
    </Code>
  );
};

export default Verify;

const Code = styled.form`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 1px 1px 2px #d1d1d1, -1px -1px 4px #d1d1d1;

  aside {
    width: 90%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 0.9rem;
    .verify {
      width: 50%;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .closeIcon {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
    .for-verify {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;

      .code-text {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 0;
        padding: 0 0;
      }
      input {
        width: 2rem;
        height: 2rem;
        border-radius: 0.5rem;
        /* border: 1px solid green; */
        outline: none;
        border-style: none;
        background-color: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 1.1rem;
        /* font-weight: bold; */
      }
    }

    .for-button {
      width: 100%;
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .button {
      min-width: max-content;
      width: 70%;
      min-height: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      background-color: darkgreen;
      border-radius: 0.6rem;
      border-style: none;
      font-size: 1rem;
    }

    .resend-code {
      width: 100%;
      height: 2rem;
    }
  }
`;
