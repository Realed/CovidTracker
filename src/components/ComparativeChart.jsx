import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { Line } from "react-chartjs-2"

const ChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 325px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 75px;
    max-height: 75px;
  }

  h1 {
    color: #444;
    font-weight: 500;
    font-size: 1em;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  canvas {
    max-height: 99%;
    max-width: 100%;
    max-height: 325px;
    margin-right: auto;
    margin-left: auto;
    margin-top: auto;
    margin-bottom: auto;
  }
`

const ComparativeChart = () => {
  const [fullDate, setFullDate] = useState("")
  const [previousDate, setPreviousDate] = useState("")
  const [spainData, setSpainData] = useState({})
  const [usData, setUsData] = useState({})
  const [ukData, setUkData] = useState({})
  const [chartData, setChartData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  let dateYear = new Date().getFullYear().toString()
  let dateMonth = (new Date().getMonth() + 1).toString()
  let dateDay = new Date().getDate().toString()

  const updateTimesAndRender = () => {
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
    const previousDate = `${year}-${month}-${day}`
    setFullDate(fullDate)
    setPreviousDate(previousDate)

    getCountryData(
      `https://api.covid19tracking.narrativa.com/api/country/spain?date_from=2021-01-01&date_to=${fullDate}`,
      `https://api.covid19tracking.narrativa.com/api/country/us?date_from=2021-01-01&date_to=${fullDate}`,
      `https://api.covid19tracking.narrativa.com/api/country/united_kingdom?date_from=2021-01-01&date_to=${fullDate}`
    )
  }

  const getCountryData = async (urlSpain, urlUs, urlUk) => {
    const resSpain = await fetch(urlSpain)
    const resUs = await fetch(urlUs)
    const resUk = await fetch(urlUk)
    const dataSpain = await resSpain.json()
    const dataUs = await resUs.json()
    const dataUk = await resUk.json()

    console.log(urlSpain)
    setSpainData(dataSpain)
    setUsData(usData)
    setUkData(ukData)
    await renderChart(dataSpain.dates, dataUs.dates, dataUk.dates)
    console.log(dataSpain, dataUs, dataUk)
  }

  const renderChart = (spainData, usData, ukData) => {
    const spainCases = []
    const usCases = []
    const ukCases = []
    const daysCounter = []

    //Total of days
    for (let totalDays in spainData) {
      const dataSplitted = totalDays.split("-")
      daysCounter.push(dataSplitted[2])
    }
    //Spain Cases
    for (let spainDataDay in spainData) {
      spainCases.push(
        spainData[spainDataDay].countries.Spain.today_new_confirmed
      )
    }
    //US Cases
    for (let usDataDay in usData) {
      usCases.push(usData[usDataDay].countries.US.today_new_confirmed)
    }
    //UK Cases
    for (let ukDataDay in ukData) {
      ukCases.push(
        ukData[ukDataDay].countries["United Kingdom"].today_new_confirmed
      )
      setIsLoading(false)
    }

    setChartData({
      labels: daysCounter.map((day) => day),
      datasets: [
        {
          label: "Spain",
          data: spainCases.map((day) => day),
          backgroundColor: "rgb(190, 39, 39,0.5)",
          borderColor: "rgb(190, 39, 39)",
          borderWidth: 3,
          pointBorderWidth: 1,
          pointBorderColor: "rgb(190, 39, 39)",
          pointBackgroundColor: "rgb(190, 39, 39,0.2)",
        },
        {
          label: "United Kingdom",
          data: ukCases.map((day) => day),
          backgroundColor: "rgb(37, 125, 219,0.5)",
          borderColor: "rgb(37, 125, 219)",
          borderWidth: 3,
          pointBorderWidth: 1,
          pointBorderColor: "rgb(37, 125, 219)",
          pointBackgroundColor: "rgb(37, 125, 219,0.2)",
        },
        {
          label: "United States",
          data: usCases.map((day) => day),
          backgroundColor: "rgb(0, 153, 51,0.5)",
          borderColor: "rgb(0, 153, 51)",
          borderWidth: 3,
          pointBorderWidth: 1,
          pointBorderColor: "rgb(0, 153, 51)",
          pointBackgroundColor: "rgb(0, 153, 51,0.2)",
        },
      ],
    })
  }

  useEffect(() => {
    updateTimesAndRender()
  }, [])

  return (
    <>
      <ChartWrapper>
        {isLoading && (
          <img
            src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"
            alt="loading-gif"
          />
        )}
        {isLoading && <h1>Loading...</h1>}
        {!isLoading && <Line data={chartData} options={{ responsive: true }} />}
      </ChartWrapper>
    </>
  )
}

export default ComparativeChart
