import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../image/cooklogo.png";
import { keluarDariAplikasi } from "../authentication/firebase";

const NavBar = () => {
  const navigate = useNavigate();

  const buttonLogoutOnClickHandler = async () => {
    await keluarDariAplikasi();
    navigate("/");
  };
  return (
    <div>
      <Nav>
        <Logo to={"/"}>
          <img src={logo} alt="cook.idea logo" />
        </Logo>
        <ButtonLogout onClick={buttonLogoutOnClickHandler}>Logout</ButtonLogout>
      </Nav>
    </div>
  );
};

const Logo = styled(Link)`
  img {
    width: 150px;
  }
`;

const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

// const ButtonContainer = styled.div`
//   position: absolute;
//   right: 0;
//   /* display: flex;
//   justify-content: flex-end; */
// `;

const ButtonLogout = styled.button`
  background: white;
  border: none;
  cursor: pointer;
  position: absolute;
  right: 5%;
  font-size: 1rem;
`;

export default NavBar;
