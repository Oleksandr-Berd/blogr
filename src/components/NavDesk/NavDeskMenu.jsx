import * as SC from "./NavDeskStyled"

import downIcon from "../../assets/images/icon-arrow-dark.svg";
import upIcon from "../../assets/images/arrowUp.png";
import NavDeskItem from "./NavDeskItem";
const NavDeskMenu = ({ id, title, isUnits, handleUnits, units, unitId }) => {
  return (
    <SC.NavListStyled className={isUnits && String(id) === unitId ? "active" : null}>
      <SC.NavUnitStyled>
        <div id={id}>
          <button type="button" onClick={handleUnits}>
            {title}
            <img src={isUnits && unitId === "" + id ? downIcon : upIcon} alt="arrow" />
          </button>
        </div>
        <NavDeskItem units={units} isUnits={isUnits} id={id} unitId={unitId}/>
      </SC.NavUnitStyled>
    </SC.NavListStyled>
  );
};

export default NavDeskMenu;
