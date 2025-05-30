import * as SC from "./NavDeskStyled";

import { navDb } from "../../db/db";
import { useState } from "react";
import NavDeskMenu from "./NavDeskMenu";


const NavDesk = () => {
  const [isUnits, setIsUnits] = useState(false);
  const [unitId, setUnitId] = useState(null)

  const handleUnits = (evt) => {
    const id = evt.currentTarget.closest("div")?.id;
    setIsUnits(!isUnits)
    setUnitId(id)
}


  return (
    <SC.NavStyled onClick = {isUnits ? handleUnits : null}>
      {navDb.map(({ title, units, id }) => {
        return (
          <NavDeskMenu handleUnits={handleUnits} title={title} units={units} id={id} isUnits={isUnits} key={id} unitId={unitId}/>
        );
      })}
    </SC.NavStyled>
  );
};

export default NavDesk;
