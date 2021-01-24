import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const MenuWrapper = styled.div`
  width: 100%;
  background-color: #eee;
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
  text-decoration: none;
  /* font-family: "Oswald", sans-serif; */
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  /* letter-spacing: 0.15ch; */
  color: black;
  text-transform: uppercase;

  &:hover {
    color: #5c5c5c;
    text-decoration: underline #5c5c5c;
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
          <StyledLink exact to="/countries">
            Countries
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
