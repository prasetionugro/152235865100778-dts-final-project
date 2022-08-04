import React from "react";
import Search from "./Search";
import Category from "./Category";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div>
      <NavBar />
      <Search />
      <Category />
    </div>
  );
};

export default Header;
