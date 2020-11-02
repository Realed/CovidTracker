import React from "react"
import styled from "styled-components"

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  color: white;
  font-size: 2em;
  margin: 0;

  span {
    font-weight: 600;
    color: #fff;
  }
`

const Logo = () => {
  return (
    <>
      <Title>
        COVID<span> TRACKER</span>
      </Title>
    </>
  )
}

export default Logo
