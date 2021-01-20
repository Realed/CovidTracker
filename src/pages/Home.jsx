import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"

//COMPONENTS
import NavMenu from "../components/NavMenu"
import GlobalStyles from "../components/GlobalStyles"
import Logo from "../components/logo"
import Chart from "../components/Chart"

//STYLES

const MenuWrapper = styled.div`
  height: 240px;
  max-width: 100%;
  display: flex;
  align-items: flex-start;
  /* background-image: url("https://www.ebsco.com/e/files/assets-blogs/coka-project-covid19-blog-image-940.png"); */
  /* background-image: url("https://www.arrendleasing.com/sv/files/2020/07/covid19-iniciativas-innovacion-social.jpg"); */
  background-image: url("https://comher.com/wp-content/uploads/2020/03/COVID-Banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`

const Menu = styled.div`
  height: fit-content;
  width: 100%;
  padding: 5px 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fafafa;
  color: black;

  @media screen and (max-width: 1400px) {
    padding: 5px 7%;
  }
  @media screen and (max-width: 900px) {
    padding: 5px 2%;
  }

  .logo-box {
    width: fit-content;
    height: fit-content;
  }

  .menu-box {
    min-width: 53%;
    height: fit-content;

    @media screen and (max-width: 725px) {
      display: none;
    }
  }

  .bars-box {
    display: none;
    justify-content: center;
    align-items: center;

    img {
      cursor: pointer;
    }

    @media screen and (max-width: 725px) {
      display: flex;
    }
  }

  .profile-box {
    width: fit-content;
    max-width: 5%;
    height: fit-content;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    @media screen and (max-width: 725px) {
      display: none;
    }

    img {
      max-width: 31px;
      max-height: 31px;
      cursor: pointer;
    }
  }
`

const MainWrapper = styled.div`
  min-height: 700px;
  background-color: #fafafa;
`

const GlobalDeathWrapper = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  top: -75px;
`

const GlobalDeathBox = styled.div`
  width: 55%;
  max-width: 850px;
  min-width: 355px;
  background-color: #fff;
  border: 1px solid #eeee;
  min-height: 200px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  -webkit-box-shadow: 2px 3px 5px 0px rgba(122, 121, 122, 0.52);
  -moz-box-shadow: 2px 3px 5px 0px rgba(129, 127, 129, 0.52);
  box-shadow: 2px 3px 5px 0px rgba(134, 134, 134, 0.52);
  box-sizing: border-box;
  justify-content: center;
  /* display: flex; */
  /* flex-direction: column; */
  margin-top: ${({ mgtop }) => mgtop};

  @media screen and (max-width: 1100px) {
    width: 70%;
  }
  @media screen and (max-width: 900px) {
    width: 75%;
  }
  @media screen and (max-width: 700px) {
    width: 80%;
  }
  /* @media screen and (max-width: 625px) {
    width: 90%;
  } */

  h1,
  p {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

  .main-box {
    height: 85%;
    min-height: 165px;
    padding: 5px 15px;
    display: grid;
    grid-template-columns: repeat(3, minmax(110px, 1fr));
    row-gap: 10px;
    justify-content: space-between;
    align-items: center;
    column-gap: 10px;

    @media screen and (max-width: 525px) {
      padding: 15px;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 1fr);
    }

    &.spain-box {
      box-sizing: border-box;
      padding: 0 5px;
      grid-template-columns: 35% 65%;
      grid-template-rows: 100%;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 940px) {
        grid-template-columns: 25% 75%;
      }

      @media screen and (max-width: 770px) {
        grid-template-columns: 100%;
        grid-template-rows: 215px 80px;

        .graph-box {
          grid-row: 1/2;
        }

        .data-box {
          grid-row: 2/3;

          align-items: center;
          grid-template-columns: 66% 33%;
          grid-template-rows: 100%;
          column-gap: 5px;
          border-right: none;

          .confirmed_recovered-box {
            flex-direction: row;
            align-items: flex-end;

            .confirmedcases-box {
              margin: 0;
              margin-right: 5px;
              height: 96%;
            }

            .recoveredcases-box {
              height: 96%;
            }
          }
        }
      }
    }

    .confirmedcases-box,
    .deathcases-box,
    .recoveredcases-box {
      width: 100%;
      height: 92%;
      border-radius: 7px;

      &.minheight {
        min-height: 105px;
      }

      .numbers-box {
        height: 69%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        p,
        h1 {
          margin: 0;
        }

        span {
          font-weight: 600;
        }

        p {
          font-size: 11px;
          font-family: "Roboto", sans-serif;
          font-weight: 400;
        }
        @media (max-width: 1175px) {
          h1 {
            font-size: 1.6em;
          }
          p {
            font-size: 9.5px;
          }
        }

        @media (max-width: 660px) {
          h1 {
            font-size: 1.4em;
          }
          p {
            font-size: 8.5px;
          }
        }

        @media (max-width: 525px) {
          h1 {
            font-size: 1.6em;
          }
          p {
            font-size: 9.5px;
          }
        }
      }

      .footer {
        height: 33%;
        border-radius: 0 0 5px 5px;
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
          font-size: 1.2em;
        }
      }

      h1 {
        text-align: center;
        font-family: "Roboto", sans-serif;
      }
    }

    .confirmedcases-box {
      background-color: rgb(192, 183, 183, 0.7);
      color: rgb(110, 110, 110);

      .footer {
        height: 33%;
        background-color: rgb(192, 183, 183);
      }
    }

    .recoveredcases-box {
      background-color: rgb(145, 235, 167, 0.7);

      color: rgb(40, 160, 70);

      .footer {
        height: 33%;
        background-color: rgb(145, 235, 167);
      }
    }

    .deathcases-box {
      background-color: rgb(233, 136, 136, 0.7);

      color: rgb(167, 54, 54);

      .footer {
        height: 33%;
        background-color: rgb(233, 136, 136);
      }
    }
  }

  .footer-box {
    border-top: 1px solid #dbdbdb;
    height: 35px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 0px 15px;

    @media screen and (max-width: 525px) {
      height: 70px;
      grid-template-columns: repeat(2, 1fr);
      padding: 0;

      .title-box {
        padding-left: 15px;
      }
      .day-box {
        padding: 0 15px;
      }
      .date-box {
        padding-right: 15px;
      }
    }

    .title-box,
    .date-box,
    .day-box {
      display: flex;
      align-items: center;
    }

    .title-box {
      @media screen and (max-width: 525px) {
        grid-column: 1/2;
        grid-row: 1/2;
        border-right: 1px solid #eeee;
      }
    }

    .date-box {
      justify-content: flex-end;
      @media screen and (max-width: 525px) {
        grid-column: 2/3;
        grid-row: 1/2;
      }
    }

    .day-box {
      justify-content: center;
      height: 100%;
      border-right: 1px solid #eeee;
      border-left: 1px solid #eeee;
      padding: 0 5px;

      @media screen and (max-width: 525px) {
        padding: 0 15px;
        grid-column: 1/3;
        grid-row: 2/3;
        border: none;
        border-top: 1px solid #eeee;
      }

      input {
        border: none;
        font-weight: 300;
        font-family: "Roboto", sans-serif;
        width: 100%;
        cursor: pointer;
        background-color: white;

        &:focus {
          outline: none;
        }
      }
    }

    p {
      margin: 0;
      font-weight: 300;
      font-family: "Roboto", sans-serif;
    }
  }
`

const SpainDeathBox = styled(GlobalDeathBox)`
  height: 250px;

  &.home-box {
    margin-top: -90px;
    height: fit-content;

    @media screen and (max-width: 525px) {
      margin-top: 140px;
    }
  }

  .title-box {
    height: 13%;
    min-height: 30px;
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100%;
    padding: 0 15px;

    @media screen and (max-width: 770px) {
      padding: 0;
      height: 60px;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 50% 50%;
      align-items: center;

      .country-box {
        padding-left: 15px;
        justify-content: flex-start;
        border-right: 1px solid #eeee;
        font-size: 0.9em;
      }

      .updated-box {
        justify-content: flex-end;
        padding-right: 15px;
        font-size: 0.9em;
      }

      .date-box {
        border: none;
        border-top: 1px solid #eeee;
        grid-row: 2/3;
        grid-column: 1/3;
        justify-content: center;
      }
    }

    .country-box,
    .updated-box,
    .date-box {
      display: flex;
      align-items: center;
      height: 100%;
      p {
        font-weight: 300;
        font-size: 0.95em;
      }
    }

    .country-box {
      justify-content: flex-start;
    }

    .updated-box {
      justify-content: flex-end;
    }

    .date-box {
      height: 100%;
      border-right: 1px solid #eeee;
      border-left: 1px solid #eeee;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 12px;

      p {
        font-size: 0.8em;
      }
    }
  }

  .main-box {
    height: 87%;
    width: 100%;
    padding: 0;

    .data-box {
      width: 100%;
      height: 100%;
      padding: 5px 10px;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);

      @media screen and (max-width: 940px) {
        grid-template-rows: 66% 33%;
      }
      border-right: 1px solid #e4e4e4;

      .confirmed_recovered-box {
        display: flex;
        width: 100%;
        height: 100%;
        padding-bottom: 3px;
        justify-content: space-between;
        align-items: center;

        .confirmedcases-box {
          @media screen and (max-width: 940px) {
            margin-bottom: 5px;
          }
        }

        .confirmedcases-box,
        .recoveredcases-box {
          width: 48.5%;
          height: 90%;

          .numbers-box {
            @media (max-width: 1175px) {
              h1 {
                font-size: 1em;
              }
              p {
                font-size: 9px;
                text-align: center;
              }
            }
            @media screen and (max-width: 730px) {
              h1 {
                font-size: 0.9em;
              }

              p {
                font-size: 8px;
              }
            }
          }

          .footer {
            h1 {
              font-size: 0.85em;
            }
          }

          h1 {
            font-size: 1.2em;
          }

          p {
            font-size: 0.55em;
          }
        }

        @media screen and (max-width: 940px) {
          flex-direction: column;

          .confirmedcases-box,
          .recoveredcases-box {
            width: 100%;
          }
        }
      }
      .deaths-box {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;

        .deathcases-box {
          width: 100%;
          height: 90%;

          .numbers-box {
            @media (max-width: 1175px) {
              p {
                font-size: 9px;
                text-align: center;
              }
            }
          }

          .footer {
            h1 {
              font-size: 0.85em;
            }
          }
          h1 {
            font-size: 1.2em;
          }

          p {
            font-size: 0.65em;
          }
        }
      }
    }
    .graph-box {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

const HomePage = () => {
  //STATE
  const [globalData, setGlobalData] = useState({})
  const [globalLoading, setGlobalLoading] = useState(true)
  const [spainData, setSpainData] = useState({})
  const [spainLoading, setSpainLoading] = useState(true)
  const [previousMonth, setPreviousMonth] = useState("")
  const [actualMonth, setActualMonth] = useState("")
  console.log(actualMonth)
  //REFS
  const inputDate = useRef()
  let dateYear = new Date().getFullYear().toString()
  let dateMonth = (new Date().getMonth() + 1).toString()
  let dateDay = new Date().getDate().toString()

  //NUMBER FORMATER
  const formatNumber = {
    separador: ",", // separador para los miles
    sepDecimal: ".", // separador para los decimales
    formatear: function (num) {
      num += ""
      var splitStr = num.split(".")
      var splitLeft = splitStr[0]
      var splitRight = splitStr.length > 1 ? this.sepDecimal + splitStr[1] : ""
      var regx = /(\d+)(\d{3})/
      while (regx.test(splitLeft)) {
        splitLeft = splitLeft.replace(regx, "$1" + this.separador + "$2")
      }
      return this.simbol + splitLeft + splitRight
    },
    new: function (num, simbol) {
      this.simbol = simbol || ""
      return this.formatear(num)
    },
  }

  //MAIN RENDER FUNCTION
  const getDatesAndRender = () => {
    //DATES VALIDATION
    if (dateMonth < 10) {
      dateMonth = 0 + dateMonth
    }

    let month = new Date().getMonth()
    let year = new Date().getFullYear()
    let day = dateDay

    if (dateMonth.length === 1) {
      dateMonth = "0" + dateMonth
    }
    if (dateDay.length === 1) {
      dateDay = "0" + dateDay
    }

    if (month === 0) {
      month = 12
      year = year - 1
    }

    const fullDate = `${dateYear}-${dateMonth}-${dateDay}`
    const previousFullDate = `${year}-${month}-${day}`
    setPreviousMonth(previousFullDate)
    setActualMonth(fullDate)

    getGlobalData(fullDate)
    getSpainData(fullDate)
  }

  const getGlobalData = async (fullDate) => {
    const res = await fetch(
      `https://api.covid19tracking.narrativa.com/api/${fullDate}`
    )
    const data = await res.json()
    // data.total.today_confirmed = formatNumber.new(data.total.today_confirmed)
    // data.total.today_deaths = formatNumber.new(data.total.today_deaths)
    // data.total.today_recovered = formatNumber.new(data.total.today_recovered)

    setGlobalData(data.total)
    setGlobalLoading(false)
  }

  const getSpainData = async (fullDate) => {
    const res = await fetch(
      `https://api.covid19tracking.narrativa.com/api/${fullDate}/country/spain`
    )
    const data = await res.json()
    // console.log(
    //   data.dates[`${dateYear}-0${dateMonth}-${dateDay}`].countries.Spain
    // )

    setSpainData(data.dates[`${fullDate}`].countries.Spain)
    setSpainLoading(false)
    console.log(spainData)
  }

  const handleChangeDate = async () => {
    setGlobalLoading(true)
    const res = await fetch(
      `https://api.covid19tracking.narrativa.com/api/${inputDate.current.value}`
    )
    const data = await res.json()
    setGlobalData(data.total)
    setGlobalLoading(false)
  }

  useEffect(() => {
    getDatesAndRender()
  }, [])

  return (
    <>
      <GlobalStyles />
      <MenuWrapper>
        <Menu>
          <div className="logo-box">
            <Logo />
          </div>
          <div className="menu-box">
            <NavMenu />
          </div>
          <div className="profile-box">
            <img
              src="https://img.pngio.com/my-profile-svg-png-icon-free-download-266351-onlinewebfontscom-profile-icon-png-980_980.png"
              alt=""
            />
          </div>
          <div className="bars-box">
            <img
              src="http://assets.stickpng.com/images/588a6507d06f6719692a2d15.png"
              height="30px"
              width="30px"
              alt="bars"
            />
          </div>
        </Menu>
      </MenuWrapper>
      <MainWrapper>
        <GlobalDeathWrapper>
          <GlobalDeathBox>
            <div className="main-box">
              <div className="confirmedcases-box minheight">
                <div className="numbers-box">
                  {globalLoading && <h1>Loading..</h1>}
                  {!globalLoading && (
                    <h1>{formatNumber.new(globalData.today_confirmed)}</h1>
                  )}
                  {/* {globalLoading && <p>Loading...</p>} */}
                  {!globalLoading && (
                    <p>
                      (+
                      <span>
                        {formatNumber.new(
                          globalData.today_confirmed -
                            globalData.yesterday_confirmed
                        )}
                      </span>{" "}
                      from yesterday)
                    </p>
                  )}
                </div>
                <div className="footer">
                  <h1>Confirmed</h1>
                </div>
              </div>
              <div className="recoveredcases-box minheight">
                <div className="numbers-box">
                  {globalLoading && <h1>Loading..</h1>}
                  {!globalLoading && (
                    <h1>{formatNumber.new(globalData.today_recovered)}</h1>
                  )}
                  {/* {globalLoading && <p>Loading...</p>} */}
                  {!globalLoading && (
                    <p>
                      (+
                      <span>
                        {formatNumber.new(
                          globalData.today_recovered -
                            globalData.yesterday_recovered
                        )}
                      </span>{" "}
                      from yesterday)
                    </p>
                  )}
                </div>
                <div className="footer">
                  <h1>Recovered</h1>
                </div>
              </div>
              <div className="deathcases-box minheight">
                <div className="numbers-box">
                  {globalLoading && <h1>Loading..</h1>}
                  {!globalLoading && (
                    <h1>{formatNumber.new(globalData.today_deaths)}</h1>
                  )}
                  {/* {globalLoading && <p>Loading...</p>} */}
                  {!globalLoading && (
                    <p>
                      (+
                      <span>
                        {formatNumber.new(
                          globalData.today_deaths - globalData.yesterday_deaths
                        )}
                      </span>{" "}
                      from yesterday)
                    </p>
                  )}
                </div>
                <div className="footer">
                  <h1>Deaths</h1>
                </div>
              </div>
            </div>
            <div className="footer-box">
              <div className="title-box">
                <p>Global Cases</p>
              </div>
              <div className="day-box">
                <input
                  type="date"
                  name=""
                  ref={inputDate}
                  onChange={handleChangeDate}
                  min="2020-02-01"
                  max={actualMonth}
                  defaultValue={actualMonth}
                />
              </div>
              <div className="date-box">
                <p>Updated 3h ago</p>
              </div>
            </div>
          </GlobalDeathBox>
        </GlobalDeathWrapper>
        <SpainDeathBox className="home-box">
          <div className="title-box">
            <div className="country-box">
              <p>Spain - Total Cases</p>
            </div>
            <div className="date-box">
              <p>{`${previousMonth} / ${actualMonth}`}</p>
            </div>
            <div className="updated-box">
              <p>Updated 2h 47mins ago</p>
            </div>
          </div>
          <div className="main-box spain-box">
            <div className="data-box">
              <div className="confirmed_recovered-box">
                <div className="confirmedcases-box">
                  <div className="numbers-box">
                    {spainLoading && <h1>Loading..</h1>}
                    {!spainLoading && (
                      <h1>{formatNumber.new(spainData.today_confirmed)}</h1>
                    )}
                    {/* {globalLoading && <p>Loading...</p>} */}
                    {!spainLoading && (
                      <p>
                        (+
                        <span>
                          {formatNumber.new(
                            spainData.today_confirmed -
                              spainData.yesterday_confirmed
                          )}
                        </span>{" "}
                        from yesterday)
                      </p>
                    )}
                  </div>
                  <div className="footer">
                    <h1>Confirmed</h1>
                  </div>
                </div>
                <div className="recoveredcases-box">
                  <div className="numbers-box">
                    {spainLoading && <h1>Loading..</h1>}
                    {!spainLoading && (
                      <h1>{formatNumber.new(spainData.today_recovered)}</h1>
                    )}
                    {!spainLoading && (
                      <p>
                        (+
                        <span>
                          {formatNumber.new(
                            spainData.today_recovered -
                              spainData.yesterday_recovered
                          )}
                        </span>{" "}
                        from yesterday)
                      </p>
                    )}
                  </div>
                  <div className="footer">
                    <h1>Recovered</h1>
                  </div>
                </div>
              </div>
              <div className="deaths-box">
                <div className="deathcases-box">
                  <div className="numbers-box">
                    {spainLoading && <h1>Loading..</h1>}
                    {!spainLoading && (
                      <h1>{formatNumber.new(spainData.today_deaths)}</h1>
                    )}
                    {!spainLoading && (
                      <p>
                        (+
                        <span>
                          {formatNumber.new(
                            spainData.today_deaths - spainData.yesterday_deaths
                          )}
                        </span>{" "}
                        from yesterday)
                      </p>
                    )}
                  </div>
                  <div className="footer">
                    <h1>Deaths</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="graph-box">
              <Chart />
            </div>
          </div>
        </SpainDeathBox>
      </MainWrapper>
    </>
  )
}

export default HomePage
