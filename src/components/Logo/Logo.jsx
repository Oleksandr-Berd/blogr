import * as SC from "./Logo.Styled"

import logo from "../../assets/images/logo.svg";

const Logo = ({location}) => {
  return (
    <SC.LogoCustom className={location && location}>
      <img src={logo} alt="logo" />
    </SC.LogoCustom>
  );
};

export default Logo;
