import * as SC from "./FooterStyled"

import Logo from "../components/Logo/Logo";
import Menu from "../components/Menu/Menu";
const Footer = () => {
  return (
    <SC.FooterCustom>
        <Logo location="footer"/>
        <Menu location="footer"/>
    </SC.FooterCustom>
  );
};

export default Footer;
