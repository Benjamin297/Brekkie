import {
  HeaderContainer,
  HeaderWrapper,
  LeftHolder,
  RighttHolder,
} from "./HeaderStyle";
import { SlLocationPin } from "react-icons/sl";
import { GoSearch } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import logo from "../../assets/LPLogo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Logout from "./Logout";
import Location from "./Location";

const Header = () => {
  const [location, setLocation] = useState(false);
  const handlelocation = () => {
    setLocation(!location);
  };

  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LeftHolder>
          <Link to="/Homepage">
            <div className="Logo">
              <img src={logo} alt="" />
            </div>
          </Link>
          <div className="Left_input_holder">
            <SlLocationPin
              onClick={handlelocation}
              style={{
                marginLeft: "0.8rem",
                fontSize: "1.2rem",
                color: "#6B8E23",
              }}
            />
            <input type="text" placeholder="Available Address" />
            {location && <Location />}
          </div>
        </LeftHolder>

        <RighttHolder>
          <div className="right_input_holder">
            <GoSearch style={{ marginLeft: "0.8rem", fontSize: "1.2rem" }} />
            <input type="text" placeholder="Search (e.g pancake)" />
          </div>

          <div className="Icon-holder">
            <div className="icon">
              <BsCart3 />
            </div>
            <div className="icon">
              <HiOutlineUser onClick={handleDropDown} />
              {dropDown && (
                <Logout dropDown={dropDown} setDropDown={setDropDown} />
              )}
            </div>
          </div>
        </RighttHolder>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
