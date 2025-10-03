import React, { useState } from "react";
import styled from "styled-components";
import { MdLogout } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import ConfirmLogout from "./ConfirmLogout";

const Logout = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <LogoutContainer>
        <LogoutHolder>
          <div className="user_holder">
            <div className="icon">
              <HiOutlineUser />
            </div>
            <p>Daniels Benjamin</p>
            <IoMdCloseCircleOutline
              style={{ fontSize: "1.3rem", cursor: "pointer" }}
              onClick={closeModal}
            />
          </div>

          <div className="Title">
            <h4>My Orders</h4>
          </div>

          <div className="logout" onClick={toggleModal}>
            <p>Logout</p>
            <MdLogout style={{ cursor: "pointer", fontSize: "1.3rem" }} />
          </div>
        </LogoutHolder>
      </LogoutContainer>

      {showModal && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ConfirmLogout onCancel={closeModal} />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default Logout;

const LogoutContainer = styled.div`
  width: 265px;
  height: 168px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  justify-content: center;
  position: absolute;
  z-index: 1000;
  top: 80px;
  right: 10px;
  background-color: white;
  color: black;
`;

const LogoutHolder = styled.div`
  width: 245px;
  height: 168px;
  display: flex;

  flex-direction: column;

  .user_holder {
    display: flex;
    height: 10vh;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;

    .icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      color: white;
      justify-content: center;
      background-color: #6b8e23;
      border-radius: 1.2rem;
    }
  }
  .Title {
    height: 50px;
    display: flex;
    align-items: center;
  }

  .logout {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 57px;
    color: #e74c3c;

    p {
      font-size: 16px;
      font-weight: 400;
      line-height: 150%;
    }
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  /* background-color: #fff; */
  padding: 2rem;
  border-radius: 10px;
  min-width: 300px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  z-index: 2100;
`;
