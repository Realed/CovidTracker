import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const MenuWrapper = styled.div`
  width: 100%;
  /* height: 70px; */
`

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;

  li {
    list-style: none;
  }
`

const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  letter-spacing: 0.15ch;
  color: white;
  text-transform: uppercase;

  &:hover {
    color: #eeee;
  }
`

const NavMenu = () => {
  return (
    <>
      <MenuWrapper>
        <Menu>
          <StyledLink exact to="/">
            Home
          </StyledLink>
          <StyledLink exact to="/">
            Covid Info
          </StyledLink>
          <StyledLink exact to="/">
            Travel Alert
          </StyledLink>
        </Menu>
      </MenuWrapper>
    </>
  )
}

export default NavMenu
