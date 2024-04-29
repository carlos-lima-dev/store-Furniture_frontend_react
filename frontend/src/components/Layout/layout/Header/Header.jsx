import React, {useState} from "react";
import Discount from "./DiscountMenu/Discount";
import Nav from "./Navmenu/Nav";

const Header = () => {
  const [topMenu, setTopMenu] = useState(true);

  const handleTopMenu = () => {
    setTopMenu(!topMenu);
  };

  return (
    <div>
      {topMenu ? (
        <>
          <Discount handleTopMenu={handleTopMenu} />
          <Nav />
        </>
      ) : (
        <Nav />
      )}
    </div>
  );
};

export default Header;
