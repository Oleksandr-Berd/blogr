import React from "react";
import downIcon from "../../assets/images/icon-arrow-dark.svg";
import upIcon from "../../assets/images/arrowUp.png";
import NavDeskItem from "./NavDeskItem";
const NavDeskMenu = ({ id, title, isUnits, handleUnits, units, unitId }) => {
  return (
    <ul>
      <li>
        <div id={id}>
          <h4>{title}</h4>
          <button type="button" onClick={handleUnits}>
            <img src={isUnits && unitId === "" + id ? downIcon : upIcon} alt="arrow" />
          </button>
        </div>
        <NavDeskItem units={units} isUnits={isUnits} id={id} unitId={unitId}/>
      </li>
    </ul>
  );
};

export default NavDeskMenu;
