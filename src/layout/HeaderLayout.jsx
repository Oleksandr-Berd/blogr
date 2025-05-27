import * as SC from "./HeaderLayoutStyled"

import Intro from "../components/Intro/Intro";

import burgerIcon from "../assets/images/icon-hamburger.svg"
import logoIcon from "../assets/images/logo.svg"

const Header = () => {
    return ( 
        <SC.CustomHeader>
            <div>
                <img src={logoIcon} alt="logo" />
            <SC.MenuCustom>
                <img src={burgerIcon} alt="burgerIcon" />
            </SC.MenuCustom>
            </div>
            <Intro/>
        </SC.CustomHeader>
     );
}
 
export default Header;