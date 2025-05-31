import * as SC from "./NavDeskStyled";

const NavDeskItem = ({ units, isUnits, id, unitId }) => {

  return (
    <SC.NavItemsListStyled
      style={{ display: isUnits && unitId + "" === id + "" ? "flex" : "none" }}
    >
      {units.map(({ id, name }) => {
        return <li key={id}>{name}</li>;
      })}
    </SC.NavItemsListStyled>
  );
};

export default NavDeskItem;
