import {
  HeaderContainer,
  HeaderWrapper,
  LeftHolder,
  RighttHolder,
} from "./HeaderStyle";
// import { SlLocationPin } from "react-icons/sl";
import { GoSearch } from "react-icons/go";
import { BsCart3 } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import logo from "../../assets/Logo.png";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <LeftHolder>
          <div className="Logo">
            <img src={logo} alt="" />
          </div>
          {/* <div className="Left_input_holder">
            <SlLocationPin
              style={{ marginLeft: "0.8rem", fontSize: "1.2rem" }}
            />
            <input
              type="text"
              placeholder="Click to select location in Lagos Island"
            />
          </div> */}
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
              <HiOutlineUser />
            </div>
          </div>
        </RighttHolder>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
