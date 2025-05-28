import * as SC from "./HeaderLayoutStyled"

import Intro from "../components/Intro/Intro";

import burgerIcon from "../assets/images/icon-hamburger.svg"
import Logo from "../components/Logo/Logo";

const Header = () => {
    return ( 
        <SC.CustomHeader>
            <div>
                <Logo/>
            <SC.MenuCustom>
                <img src={burgerIcon} alt="burgerIcon" />
            </SC.MenuCustom>
            </div>
            <Intro/>
        </SC.CustomHeader>
     );
}
 
export default Header;