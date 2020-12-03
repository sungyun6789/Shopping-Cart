import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/itemlist" style={{ textDecoration: "none", color: "black" }}>
        제품목록
      </Link>

      <Link to="/itemcart" style={{ textDecoration: "none", color: "black" }}>
        장바구니
      </Link>
    </>
  );
};

export default Header;
