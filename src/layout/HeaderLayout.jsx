import * as SC from "./HeaderLayoutStyled"

import Intro from "../components/Intro/Intro";

import burgerIcon from "../assets/images/icon-hamburger.svg"
import closeIcon from "../assets/images/icon-close.svg"

import Logo from "../components/Logo/Logo";
import { useToggle } from "../hooks/useToggle";
import MenuModal from "../components/Portal/MenuModal";

const Header = () => {

const {isShare, toggleShare} = useToggle()

    return ( 
        <SC.CustomHeader>
            <div>
                <Logo/>
           <SC.MenuCustom type="button" onClick={toggleShare}>
                <img src={!isShare ? burgerIcon : closeIcon} alt="toggle_menu" />
            </SC.MenuCustom>
           {isShare ? <MenuModal location="header" isShare={isShare}/> : null}
            </div>
            <Intro/>
        </SC.CustomHeader>
     );
}
 
export default Header;