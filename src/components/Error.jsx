import styled from "styled-components"

const Error = styled.div`
  text-align: center;
  padding-top: 20px;

  @media (min-width: 550px) {
    grid-column: 1/2;
  }

  @media (min-width: 790px) {
    grid-column: 2/3;
  }

  @media (min-width: 1000px) {
    grid-column: 2/3;
  }

  @media (min-width: 1300px) {
    grid-column: 3/4;
  }

  .title-box {
    h1 {
      font-family: "Roboto", sans-serif;
      font-size: 2em;
      font-weight: 700;
    }
  }

  .error-desc {
    p {
      font-family: "Roboto", sans-serif;
      font-size: 1.2em;
      font-weight: 300;

      span {
        display: block;
        font-weight: 400;
      }
    }
  }
`

export default Error
