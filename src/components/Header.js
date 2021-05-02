import React from "react";
import styled from "styled-components";
function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a href="g">
          <img src="/images/home-icon.svg" alt="" />
          <span>Home</span>
        </a>
      </NavMenu>
    </Nav>
  );
}

export default Header;
// Styled components
const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div``;
