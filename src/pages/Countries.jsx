import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

//Compontents
import GlobalStyles from "../components/GlobalStyles"
import Logo from "../components/logo"
import Country from "../components/CountryBox"
import Error from "../components/Error"

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
  background-color: #eee;
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

const CountryWrapper = styled.div`
  width: 80%;
  min-height: 75vh;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: -90px;
  padding: 20px;
  border-radius: 5px;
  background-color: #eee;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 15px 0px;

  .menu-wrapper {
    width: 100%;
    /* height: 50px; */
    display: flex;
    margin-bottom: 20px;

    @media screen and (max-width: 725px) {
      flex-direction: column;

      .input-box {
        margin-bottom: 7px;
      }
    }

    .input-box {
      width: 67%;
      height: 50px;
      display: flex;
      align-items: center;
      width: 100%;
      background-color: white;
      border: 1px solid #c2c2c2;
      margin-right: 20px;
      padding: 10px 20px;
      border-radius: 5px;

      &:focus + input {
        border: 1px solid #8b8b8b;
      }

      input {
        width: 100%;
        border: none;
        padding: 5px;
        font-family: "Roboto", sans-serif;
        font-size: 1.2em;
        font-weight: 300;

        &:focus {
          outline: none;
        }
      }

      img {
        max-width: 80%;
        max-height: 80%;
        margin-right: 12px;
        cursor: pointer;
      }
    }

    .filter-box {
      width: 66%;
      height: 50px;

      select {
        width: 100%;
        height: 100%;
        border: 1px solid #c2c2c2;
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;

        &,
        option {
          font-family: "Roboto", sans-serif;
          font-size: 1em;
          font-weight: 300;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }

  .countries-wrapper {
    display: grid;
    row-gap: 20px;

    @media (min-width: 550px) {
      grid-template-columns: 1fr 1fr;
      column-gap: 15px;
    }

    @media (min-width: 790px) {
      grid-template-columns: repeat(3, 1fr);
      column-gap: 15px;
    }

    @media (min-width: 1000px) {
      column-gap: 27.5px;
    }

    @media (min-width: 1300px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`

const CountriesPage = ({ history }) => {
  const [countries, setCountries] = useState([])
  const form = useRef()
  const input = useRef()
  const filterSelect = useRef()
  const [searchError, setSearchError] = useState(false)

  const getCountryData = async (url) => {
    const res = await fetch(url)
    const data = await res.json()

    if (data.status !== 404) {
      setCountries(data)
    } else {
      if (input.current.value !== "") {
        setCountries([])
        setSearchError(true)
      }
    }
  }

  const handleClearSearch = () => {
    if (input.current.value === "") {
      setSearchError(false)
      getCountryData("https://restcountries.eu/rest/v2/all")
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    console.log(input.current.value)
    const country = input.current.value.trim().toLowerCase()
    if (country === "" || country === undefined || country === null) {
      setSearchError(false)
      getCountryData("https://restcountries.eu/rest/v2/all")
    } else {
      setSearchError(false)
      getCountryData(`https://restcountries.eu/rest/v2/name/${country}`)
    }
  }

  const handleFilter = () => {
    const region = filterSelect.current.value.trim().toLowerCase()
    if (filterSelect.current.value === "Worldwide") {
      input.current.value = ""
      setSearchError(false)
      getCountryData("https://restcountries.eu/rest/v2/all")
    } else {
      input.current.value = ""
      setSearchError(false)
      getCountryData(`https://restcountries.eu/rest/v2/region/${region}`)
    }
  }

  const handleClickCountry = (name) => {
    let countryName = name.trim()
    console.log(countryName)
    history.push(`/countries/${countryName}`)
  }

  useEffect(() => {
    getCountryData("https://restcountries.eu/rest/v2/all")
  }, [])

  return (
    <>
      <GlobalStyles />
      <MenuWrapper>
        <Menu>
          <div className="logo-box">
            <Logo />
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
      <CountryWrapper>
        <div className="menu-wrapper">
          <form className="input-box" ref={form} onSubmit={handleSearch}>
            <img
              src="https://img.icons8.com/ios/50/000000/search--v1.png"
              alt="searchIcon"
              onClick={handleSearch}
            />
            <input
              type="text"
              placeholder="Search for a country..."
              ref={input}
              onChange={handleClearSearch}
            />
          </form>
          <div className="filter-box" onChange={handleFilter}>
            <select name="regions" ref={filterSelect}>
              <option value="Worldwide">Worldwide</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
        <div className="countries-wrapper">
          {searchError && (
            <Error>
              <div className="title-box">
                <h1>404</h1>
              </div>
              <div className="error-desc">
                <p>
                  No country with name <span>"{input.current.value}"</span>
                </p>
              </div>
            </Error>
          )}
          {countries.map((country) => (
            <Country onClick={() => handleClickCountry(country.name)}>
              <div className="img-box">
                <img src={country.flag} alt="" />
              </div>
              <div className="data-box">
                <h1>{country.name}</h1>
              </div>
            </Country>
          ))}
        </div>
      </CountryWrapper>
    </>
  )
}

export default CountriesPage
