import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"

//COMPONENTS
import NavMenu from "../components/NavMenu"
import GlobalStyles from "../components/GlobalStyles"
import Logo from "../components/logo"
import Chart from "../components/Chart"

//STYLES

const MenuWrapper = styled.div`
  height: 200px;
  width: 100%;
  background-color: #1471db;
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
  height: 100px;
  width: 78%;
  max-width: 1000px;
  min-width: 715px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid #eeee;

  .logo-box {
    width: fit-content;
    height: fit-content;
  }

  .menu-box {
    min-width: 53%;
    height: fit-content;
    margin-bottom: 5px;
  }

  .profile-box {
    width: fit-content;
    max-width: 5%;
    height: fit-content;
    margin-bottom: 5px;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    img {
      max-width: 80%;
      max-height: 25%;
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
  top: -50px;
`

const GlobalDeathBox = styled.div`
  width: 55%;
  max-width: 850px;
  min-width: 575px;
  background-color: #fff;
  border: 1px solid #eeee;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 6px;
  -webkit-box-shadow: 2px 3px 5px 0px rgba(122, 121, 122, 0.52);
  -moz-box-shadow: 2px 3px 5px 0px rgba(129, 127, 129, 0.52);
  box-shadow: 2px 3px 5px 0px rgba(134, 134, 134, 0.52);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin-top: ${({ mgtop }) => mgtop};

  h1,
  p {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
  }

  .main-box {
    height: 85%;
    padding: 5px 15px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .confirmedcases-box,
    .deathcases-box,
    .recoveredcases-box {
      width: 33%;
      height: 80%;
      border-radius: 7px;

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
      /* height: 85%; */
      width: 30%;
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
    height: 18%;
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;

    .title-box,
    .date-box,
    .day-box {
      display: flex;
      align-items: center;
    }

    .day-box {
      height: 100%;
      border-right: 1px solid #eeee;
      border-left: 1px solid #eeee;
      padding: 0 5px;

      input {
        border: none;
        font-weight: 300;
        font-family: "Roboto", sans-serif;
        width: 123px;
        cursor: pointer;

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

  .title-box {
    height: 13%;
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    box-sizing: border-box;

    .country-box,
    .updated-box,
    .date-box {
      p {
        font-weight: 300;
        font-size: 0.95em;
      }
    }

    .date-box {
      p {
        font-size: 0.8em;
      }
    }

    .date-box {
      height: 100%;
      border-right: 1px solid #eeee;
      border-left: 1px solid #eeee;
      display: flex;
      align-items: center;
      padding: 0 12px;
    }
  }

  .main-box {
    height: 87%;
    width: 100%;
    padding: 0;

    .data-box {
      width: 38%;
      height: 100%;
      padding: 5px 10px;
      box-sizing: border-box;

      border-right: 1px solid #dbdbdb;

      .confirmed_recovered-box {
        display: flex;
        width: 100%;
        height: 50%;
        justify-content: space-between;
        align-items: center;

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
      }
      .deaths-box {
        height: 50%;
        width: 100%;
        display: flex;
        align-items: center;

        .deathcases-box {
          width: 100%;
          height: 90%;

          .footer {
            h1 {
              font-size: 0.85em;
            }
          }

          h1 {
            font-size: 1.55em;
          }

          p {
            font-size: 0.65em;
          }
        }
      }
    }
    .graph-box {
      width: 64%;
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

  //REFS
  const inputDate = useRef()
  let dateYear = new Date().getFullYear()
  let dateMonth = new Date().getMonth() + 1
  let dateDay = new Date().getDate()

  //NUMBER FORMATER
  var formatNumber = {
    separador: ".", // separador para los miles
    sepDecimal: ",", // separador para los decimales
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

  const getGlobalData = async () => {
    const res = await fetch(
      `https://api.covid19tracking.narrativa.com/api/${dateYear}-${dateMonth}-${dateDay}`
    )
    const data = await res.json()
    // data.total.today_confirmed = formatNumber.new(data.total.today_confirmed)
    // data.total.today_deaths = formatNumber.new(data.total.today_deaths)
    // data.total.today_recovered = formatNumber.new(data.total.today_recovered)

    setGlobalData(data.total)
    setGlobalLoading(false)
  }

  const getSpainData = async () => {
    const res = await fetch(
      `https://api.covid19tracking.narrativa.com/api/${dateYear}-${dateMonth}-${dateDay}/country/spain`
    )
    const data = await res.json()

    setSpainData(
      data.dates[`${dateYear}-${dateMonth}-0${dateDay}`].countries.Spain
    )
    setSpainLoading(false)
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
    getGlobalData()
    getSpainData()
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
        </Menu>
      </MenuWrapper>
      <MainWrapper>
        <GlobalDeathWrapper>
          <GlobalDeathBox>
            <div className="main-box">
              <div className="confirmedcases-box">
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
              <div className="recoveredcases-box">
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
              <div className="deathcases-box">
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
                  defaultValue={`${dateYear}-${dateMonth}-0${dateDay}`}
                  // defaultValue={`2020-11-01`}
                  onChange={handleChangeDate}
                  min="2020-02-01"
                  max={`${dateYear}-${dateMonth}-0${dateDay}`}
                />
              </div>
              <div className="date-box">
                <p>Updated 3h ago</p>
              </div>
            </div>
          </GlobalDeathBox>
        </GlobalDeathWrapper>
        <SpainDeathBox mgtop="-65px">
          <div className="title-box">
            <div className="country-box">
              <p>Spain - Total Cases</p>
            </div>
            <div className="date-box">
              <p>{`${dateDay}/${
                dateMonth - 1
              }/${dateYear} - ${dateDay}/${dateMonth}/${dateYear}`}</p>
            </div>
            <div className="updated-box">
              <p>Updated 2h 47mins ago</p>
            </div>
          </div>
          <div className="main-box">
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
