import styled from "styled-components"

const Country = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 0px;
    transition: all 0.4s ease-in;
  }

  .img-box {
    height: 80%;
    width: 100%;
    background-color: white;
    border-radius: 5px 5px 0 0;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid #d6d6d6;

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 0 0;
    }
  }

  .data-box {
    height: 20%;
    width: 100%;
    background-color: white;
    padding: 5px;
    border: 1px solid #d6d6d6;
    border-radius: 0 0 5px 5px;
    display: flex;
    align-items: center;
    box-sizing: inherit;

    h1,
    p {
      font-family: "Poppins", sans-serif;
      display: inline-block;
      font-weight: 300;
      font-size: 1.2em;
    }
  }
`

export default Country
