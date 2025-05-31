import * as SC from "./MenuStyled";

import arrowDown from "../../assets/images/icon-arrow-dark.svg";
import arrowUp from "../../assets/images/arrowUp.png";
import AuthCon from "../AuthCon/AuthCon";

const Menu = ({ location, handleClick, isSubMenuOpen, activeSubMenu }) => {
  return (
    <SC.Overlay className={location}>
      <SC.NavCon className={location && location}>
        <SC.ItemConDesk>
          <SC.SubMenuCon
            className={location === "header" ? "header" : null}
            id="1"
          >
            <h4>Product</h4>
            {location === "header" ? (
              <button type="button" onClick={handleClick}>
                <img
                  src={isSubMenuOpen ? arrowUp : arrowDown}
                  alt="toggle_subMenu"
                />
              </button>
            ) : null}
          </SC.SubMenuCon>
          <ul
            className={
              location === "header"
                ? isSubMenuOpen && activeSubMenu === "1"
                  ? "active"
                  : "passive"
                : null
            }
          >
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </SC.ItemConDesk>
        <SC.ItemConDesk>
          <SC.SubMenuCon
            className={location === "header" ? "header" : null}
            id="2"
          >
            <h4>Company</h4>
            {location === "header" ? (
              <button type="button" onClick={handleClick}>
                <img
                  src={isSubMenuOpen ? arrowUp : arrowDown}
                  alt="toggle_subMenu"
                />
              </button>
            ) : null}
          </SC.SubMenuCon>
          <ul
            className={
              location === "header"
                ? isSubMenuOpen && activeSubMenu === "2"
                  ? "active"
                  : "passive"
                : null
            }
          >
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </SC.ItemConDesk>
        <SC.ItemConDesk>
          <SC.SubMenuCon
            className={location === "header" ? "header" : null}
            id="3"
          >
            <h4>Connect</h4>
            {location === "header" ? (
              <button type="button" onClick={handleClick}>
                <img
                  src={isSubMenuOpen ? arrowUp : arrowDown}
                  alt="toggle_subMenu"
                />
              </button>
            ) : null}
          </SC.SubMenuCon>
          <ul
            className={
              location === "header"
                ? isSubMenuOpen && activeSubMenu === "3"
                  ? "active"
                  : "passive"
                : null
            }
          >
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ul>
        </SC.ItemConDesk>
        {location === "header" ? <AuthCon /> : null}
      </SC.NavCon>
    </SC.Overlay>
  );
};

export default Menu;
