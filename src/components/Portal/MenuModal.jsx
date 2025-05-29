import { createPortal } from "react-dom";
import Menu from "../Menu/Menu";
import { useState } from "react";
const MenuModal = ({ location, isShare }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState("");

  const handleClick = (evt) => {
    const id = evt.currentTarget.closest("div")?.id;

    setActiveSubMenu(id);
    setIsSubMenuOpen((prev) => !prev);
  };

  return createPortal(
    <Menu
      location={location}
      isShare={isShare}
      handleClick={handleClick}
      activeSubMenu={activeSubMenu}
      isSubMenuOpen={isSubMenuOpen}
    />,
    document.querySelector("#menu-root")
  );
};

export default MenuModal;
