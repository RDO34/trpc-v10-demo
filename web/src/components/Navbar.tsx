import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: calc(100vw - 16px);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #363636;
  padding: 8px;
  box-shadow: 5px 0 24px #141414;
`;

const Logo = styled.img`
  margin-right: 16px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 8px;
  font-size: 24px;

  :hover {
    color: rgb(76, 179, 212);
  }
`;

export const Navbar = () => (
  <Nav>
    <Logo src="https://alpha.trpc.io/img/logo-no-text.svg" alt="tRPC Logo" />
    <NavLink to="/">Home</NavLink>
    <NavLink to="/foo">Foo</NavLink>
  </Nav>
);
